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
const index = require('./index');

const app = express();
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
app.use('/api/saloon', DealerRoute.getSaloonServices);
app.use('/api/cars', DealerRoute.getCarServices);
app.use('/api/catering', DealerRoute.getCatering);
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
  // apis: ["routes/SwaggerApi/api.doc.js"],
};
const swaggerDoc = swaggerJsdoc(swaggerOptions);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

/**
 * @swagger
 * definitions:
 *   Dealer:
 *     properties:
 *
 *       serviceName:
 *         type: string
 *       dealerService:
 *         type: string
 *       description:
 *         type: string
 *       price:
 *         type: string
 *       email:
 *         type: string
 *       pathImg:
 *         type: file
 */

/**
 * @swagger
 * definitions:
 *   Users:
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       phoneNumber:
 *         type: string
 *       address:
 *         type: string
 *       password:
 *         type: string
 *       role:
 *         type: string
 *
 *
 */

/**
 * @swagger
 * /api/users/gettingusers:
 *  get:
 *   description: Use to request all dealers
 *   responses:
 *    '200':
 *      description: A successful response
 */

/**
 * @swagger
 * /api/delUser/delete/{id}:
 *   delete:
 *      summary: del dealer from  mongodb
 *      description: deleting dealer profile from mongodb database
 *      parameters:
 *             - in: path
 *               name: id
 *               schema:
 *                  type: string
 *                  required: true
 *
 *      responses:
 *       200:
 *        description: delete user profile
 *
 *
 *
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     tags:
 *       - Dealers
 *     description: Creates a new dealer
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: user
 *         description: user
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Users'
 *     responses:
 *       200:
 *         description: Successfully created
 */
/**
 * @swagger
 * /api/updateuser/{id}:
 *  patch:
 *      description: Used to update message
 *      parameters:
 *          -   name:  id
 *              in:    path
 *              type: string
 *              required: true
 *
 *          -   name: name
 *              in:   body
 *              type: string
 *              required: true
 *              schema:
 *                  $ref: '#/definitions/Users'
 *      responses:
 *          '200':
 *              description: 'A successful response'
 */

const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on port ${port}`));
