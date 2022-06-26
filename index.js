const express = require('express');
const cors = require('cors')
require('dotenv').config()


const port = process.env.PORT || 80
const app = express();


// importing all the routes 
const user = require('./routes/user')
const product = require('./routes/product')



// middlewares
app.use(cors())
app.use(express.json())


// end points 
//  Object management:
// User should be able to add a new inventory item by providing details like object name, description and other attributes.Assume attributes for mobiles by yourself like Brand name, RAM, i﻿nternal storage, screen size etc.to name a few.
// User should be able to edit the object values.
// User should be able to delete an object from inventory.
app.use('/user', user)
//     B.Listing endpoints:
// All the available items in the inventory can be fetched easily through API based on requirement scenarios. 
// Provide filter and sort options.
app.use('/product', product)

//     C.Object details endpoints:
// For any particular object, the user should be able to view all its details.Provide an API endpoint to share all details of an object which can be consumed for the Object details page.





app.listen(port)