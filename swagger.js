const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const app = require("./routes/Email");

const swaggerOptions={
    swaggerDefinition:{
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
app.use('/api-doc',swaggerUi.serve,swaggerUi.setup(swaggerDoc))