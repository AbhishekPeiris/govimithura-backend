const express = require("express");
const dotenv = require('dotenv');
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser"); 
const app = express();
require("dotenv").config();

const dbconfig = require('./db');
const farmersRoute = require('./routes/FarmersRoute');
const employeesRoute = require('./routes/EmplyeesRoute');
const cropRoute = require('./routes/CropRoute');
const fertilizerRoute = require('./routes/FertilizerRoute');
const warehouseRoute = require('./routes/WareHouseRoute');
const appoinmentRoute = require('./routes/AppointmentRoute');

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/api/farmers', farmersRoute);
app.use('/api/employees', employeesRoute);
app.use('/api/crops', cropRoute);
app.use('/api/fertilizers', fertilizerRoute);
app.use('/api/warehouses', warehouseRoute);
app.use('/api/appoinments', appoinmentRoute);


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
