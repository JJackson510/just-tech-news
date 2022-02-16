const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create our user models
class User extends Model {}

//define table columns and configuration
User.init(
    {
        //define an id column
        id: {
            //use the special Sequelize DataType object provide what type of data it is
            type: DataTypes.INTEGER,
            //this is the same as SQL "not null" option
            allowNull: false,
            //instruct that this is the primary key
            primaryKey: true,
            //turn on auto increment
            autoIncrement: true
        },

        //Define a username column
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },

        //define an email column
        email: {
            type: DataTypes.String,
            allowNull: false,
            //there can not be more than one email value in the table
            unique: true,
            //if allowNull is set to false, we can run our data through validators before creating the table data
            validate: {
                isEmail: true,
            }
        },

        //define a password column
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //this means that the password must be longer than 4 characters
                len: [4]
            }
        }
        
    //Table column definitions go here
},
{
    //table configuration options go here (https://sequelize.org/v5/manual/models-definition.html#configuration)

    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,

     // don't automatically create createdAt/updatedAt timestamp fields
     timestamp: false,
    
     // don't pluralize name of database table
     freezeTableName: true,
 
     // use underscores instead of camel-casing (i.e. `comment_text` and not `commentText`)
     underscored: true,

     // make it so our model name stays lowercase in the database
     modelName: 'user'
}
);
module.exports = User;