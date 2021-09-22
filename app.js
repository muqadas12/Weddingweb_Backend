const express = require("express");
const cors = require("cors");
const userRoute = require("./routes/UserRoute");
const connectDB = require("./config/db");
const bodyparser = require("body-parser");
const DealerRoute = require("./routes/DealerRoute");
const updatedDealersdata = require("./Controllers/UpdateDealers");
const updateUsers=require('./Controllers/UpdateUser')
const hallRoute = require("./routes/HallRoute");
const mongoose = require("mongoose");
const emailsend = require("./routes/Email");
const bookighallRoute = require("./routes/Booking");
const photographyBooking = require("./routes/PhotographyBooking");
const carRentalBooking = require("./routes/CarRentalRoute");
const saloonBooking = require("./routes/Saloon");
const cateringBooking = require("./routes/CateringRoute");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
require("./ModelS/Blog");

const upload = require("./Controllers/multer");
const Blog = mongoose.model("Blog");
const app = express();
app.use("/static", express.static("uploadFiles"));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");

  next();
});

// Connect Database
connectDB();

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => res.send("Hello world!"));

app.use("/api/users", userRoute);
app.use("/api/bookedhall", bookighallRoute);

//photographybooking
app.use("/api/bookingPhoto", photographyBooking);
//car rental booking
app.use("/api/carBooking", carRentalBooking);
//saloon
app.use("/api/saloonBooking", saloonBooking);
//catering
app.use("/api/cateringfood", cateringBooking);

app.use("/api/hall", hallRoute);
app.use("/api/email", emailsend);
//  app.use(checkAuth());
app.use("/api/getdealer", DealerRoute.getDealerdata);
app.use("/api/saloon", DealerRoute.getSaloonServices);
app.use("/api/cars", DealerRoute.getCarServices);
app.use("/api/catering", DealerRoute.getCatering);
app.use("/api/photos", DealerRoute.getPhotos);

app.use("/api/postdealer", DealerRoute.postDealerdata);

app.use("/api/updatedDealers/:id", updatedDealersdata.updatedealers);
app.use("/api/del-dealers-services", updatedDealersdata.delDealers);
app.use('/api/updateuser/:id',updateUsers.updateUsers);
app.use('/api/delUser',updateUsers.delUsers)





const swaggerOptions={
  swaggerDefinition:{
    components: {}, 
      info:{
          title:'Dealer Apis',
          description:'Dealer Services Information',
          contact:{
              name:'Muqaddas Shaaban'

          },
          servers:['http://localhost:2000']

      }
  },
  apis:['app.js']

};
const swaggerDoc=swaggerJsdoc(swaggerOptions);
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDoc));


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
 */


/**
 * @swagger
 * /api/users/gettingDealers:
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
 *      summary: del user from  mongodb
 *      description: deleting data from mongodb database
 *      parameters: 
 *             - in: path
 *               name: id
 *               schema:
 *                  type: string
 *                  required: true 
 *              
 *      responses:
 *       200:
 *        description: del services 
 *                   
 *                         
 *                   
 */

/**
 * @swagger
 * /api/users/signup:
 *   post:
 *     tags:
 *       - Users
 *     description: Creates a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: puppy
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
 * /api/updatedDealers/{id}:
 *   put:
 *     summary: updates posts by id
 *   
 *     parameters:
 *       - in: body
 *         required: true
 *         
 *       - in: id
 *         name: id 
 *         schema:
 *           $ref: '#/definitions/Users'
 *         required: true
 *         description: post id
 *     requestbody:
 *     
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Users'
 *     responses:
 *       200:
 *         decsription: The post was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Users'
 *       404:
 *         description: post was not found.
 *       500:
 *         description: Some errors happend.
 *
 */



const port = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on port ${port}`));
