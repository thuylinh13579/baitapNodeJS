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
    async function createModles(sequelize) {
      const User = sequelize.define('user', {
          name: DataTypes.TEXT,
          favoriteColor: {
            type: DataTypes.TEXT,
            defaultValue: 'green',
          },
          age: DataTypes.INTEGER,
          cash: DataTypes.INTEGER,
        });
        
        (async () => {
          await sequelize.sync({ force: true });
          
    //       // Creating an instance
    //       // const jane = User.build({ name: 'Jane' });
    //       // console.log(jane instanceof User); // true
    //       // jane.age = 18;
    //       // console.log(jane.name); // "Jane"
    //       // jane.save();


    //       //// Updating an instance
    //       // const jane = await User.create({ name: 'Jane' });


    //       // jane.set({
    //       //   name: 'Ada',
    //       //   favoriteColor: 'blue',
    //       // });
    //       // // As above, the database still has "Jane" and "green"
    //       // await jane.save();
    //       // // The database now has "Ada" and "blue" for name and favorite color
                  

    //       // //Deleting an instance
    //       // const jane = await User.create({ name: 'Jane' });
    //       // console.log(jane.name); // "Jane"
    //       // await jane.destroy();


    //       ////Reloading an instance
    //       // const jane = await User.create({ name: 'Jane' });
    //       // console.log(jane.name); // "Jane"
    //       // jane.name = 'Ada';
    //       // // the name is still "Jane" in the database
    //       // await jane.reload();
    //       // console.log(jane.name); // "Jane"


    //       ////Saving only some fields
    //       // const jane = await User.create({ name: 'Jane' });
    //       // console.log(jane.name); // "Jane"
    //       // console.log(jane.favoriteColor); // "green"
    //       // jane.name = 'Jane II';
    //       // jane.favoriteColor = 'blue';
    //       // await jane.save({ fields: ['name'] });
    //       // console.log(jane.name); // "Jane II"
    //       // console.log(jane.favoriteColor); // "blue"
    //       // // The above printed blue because the local object has it set to blue, but
    //       // // in the database it is still "green":
    //       // await jane.reload();
    //       // console.log(jane.name); // "Jane II"
    //       // console.log(jane.favoriteColor); // "green"


    //       ////Incrementing and decrementing integer values
    //     //   const jane = await User.create({ name: 'Jane', age: 100, cash: 5000 });
    //     //   await jane.increment({
    //     //     age: 2,
    //     //     cash: 100,
    //     //   });

    //     //   // If the values are incremented by the same amount, you can use this other syntax as well:
    //     //   await jane.increment(['age', 'cash'], { by: 2 });
        

       

       

         })();
 }






  demoDB();