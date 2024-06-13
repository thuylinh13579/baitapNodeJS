const { Sequelize, DataTypes } = require('sequelize');
const { toDefaultValue } = require('sequelize/lib/utils');

const sequelize = new Sequelize('express', 'root', 'abc#@12345', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  async function demoDB() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        createModles(sequelize)
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }

    //// model instance
    // async function createModles(sequelize) {
    //   const User = sequelize.define('user', {
    //       name: DataTypes.TEXT,
    //       favoriteColor: {
    //         type: DataTypes.TEXT,
    //         defaultValue: 'green',
    //       },
    //       age: DataTypes.INTEGER,
    //       cash: DataTypes.INTEGER,
    //     });
        
    //     (async () => {
    //       await sequelize.sync({ force: true });
      
    //       async function createModles(sequelize) {
    //         const User = sequelize.define('user', {
    //             username: {
    //               type: DataTypes.TEXT,
    //               allowNull: false,
    //               unique: true,
    //             },
    //             hashedPassword: {
    //               type: DataTypes.STRING(64),
    //               validate: {
    //                 is: /^[0-9a-f]{64}$/i,
    //               },
    //             },
    //           });
              
        
    //         //   allow null
    //           (async () => {
    //             await sequelize.sync({ force: true });
    //             User.init(
    //                 {
    //                   username: {
    //                     type: DataTypes.STRING,
    //                     allowNull: true,
    //                     validate: {
    //                       len: [5, 10],
    //                     },
    //                   },
    //                 },
    //                 { sequelize },
    //               );
    //           })();
    //     }






    //     })();
    // }


    demoDB();