const express = require('express');
const cors = require('cors');
const userRoute = require('./routes/UserRoute');
const connectDB = require('./config/db');
const bodyparser = require('body-parser');
const DealerRoute = require('./routes/DealerRoute');
const updatedDealersdata = require('./Controllers/UpdateDealers');
const updateUsers = require('./Controllers/UpdateUser');
const hallRoute = require('./routes/HallRoute');
const emailsend = require('./routes/Email');
const bookighallRoute = require('./routes/Booking');
const photographyBooking = require('./routes/PhotographyBooking');
const carRentalBooking = require('./routes/CarRentalRoute');
const saloonBooking = require('./routes/Saloon');
const cateringBooking = require('./routes/CateringRoute');
const orderStausRoute = require('./routes/OrderStausRoute');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const stripe = require('stripe')(
  'sk_test_51JebqAJnwz0YjBAE0QJYh1fHJa4NURL2Y2Wliv9oR5Z9gvRI4nzOJUMUJFmZQPOJizaDOxAnxAGG080lT1v7BgoG00pHQRnM5M'
);

const index = require('./index');
require('dotenv').config();

const app = express();
// const app=express.Router();
app.use(express.json());
app.use('/static', express.static('uploadFiles'));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE,PUT');

  next();
});

// Connect Database
connectDB();

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/users', userRoute);
app.use('/api/bookedhall', bookighallRoute);
app.use('/api/orderstatus', orderStausRoute);

//photographybooking
app.use('/api/bookingPhoto', photographyBooking);
//car rental booking
app.use('/api/carBooking', carRentalBooking);
//saloon
app.use('/api/saloonBooking', saloonBooking);
//catering
app.use('/api/cateringfood', cateringBooking);

app.use('/api/hall', hallRoute);
app.use('/api/email', emailsend);
app.use('/api/getdealer', DealerRoute.getDealerdata);
app.use('/api/getAlldealer', DealerRoute.getAllDealers);

app.use('/api/saloon', DealerRoute.getSaloonServices);
app.use('/api/cars', DealerRoute.getCarServices);
app.use('/api/catering', DealerRoute.getCatering);
app.use('/api/hall', DealerRoute.getHalls);

app.use('/api/servicescatering', cateringBooking);

app.use('/api/photos', DealerRoute.getPhotos);

app.use('/api/postdealer', DealerRoute.postDealerdata);
app.use('/api/updatedDealersprofile/:id', updatedDealersdata.updatedealers);
app.use('/apiupdateDealerServices/:id', updatedDealersdata.updateServices);

app.use('/api/del-dealers-services', updatedDealersdata.delDealers);
app.use('/api/updateuser/:id', updateUsers.updateUsers);
app.use('/api/delUser', updateUsers.delUsers);

const swaggerOptions = {
  swaggerDefinition: {
    components: {},
    info: {
      title: 'Wedding web Apis',
      description: "Customer and Dealer Api's",
      contact: {
        name: 'Muqaddas Shaaban',
      },
      servers: ['http://localhost:2000'],
    },
  },
  apis: ['app.js'],
  apis: ['routes/SwaggerApi/api.doc.js'],
};
const swaggerDoc = swaggerJsdoc(swaggerOptions);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

//biling
app.post('/stripe/charge', async (req, res) => {
  console.log('stripe-routes.js 9 | route reached', req.body);
  let { amount, id } = req.body;
  console.log('stripe-routes.js 10 | amount and id', amount, id);
  try {
    const payment = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'USD',
      description: 'Wanclouds wedding',
      payment_method: id,
      confirm: true,
    });
    console.log('stripe-routes.js 19 | payment', payment);
    res.json({
      message: 'Payment Successful',
      success: true,
    });
  } catch (error) {
    console.log('stripe-routes.js 17 | error', error);
    res.json({
      message: 'Payment Failed',
      success: false,
    });
  }
});

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on port ${port}`));
