const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app= express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//turn on routes 
app.use(routes);

//turn on connection to the db server
sequelize.sync({force:false}).then(() => {
    app.listen(port, console.log(`Now listening on ${port}`));
});