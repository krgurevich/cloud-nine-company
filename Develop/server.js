const express = require("express");
const { Product, Category, Tag, ProductTag } = require("./models");
const routes = require("./routes");
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

Product.sync()
  .then(() => console.log("The Product Table has been created"))
  .catch((err) =>
    console.log("An error occurred while creating the table:", err)
  );

Category.sync()
  .then(() => console.log("The Category Table has been created"))
  .catch((err) =>
    console.log("An error occurred while creating the table:", err)
  );

Tag.sync()
  .then(() => console.log("The Tag Table has been created"))
  .catch((err) =>
    console.log("An error occurred while creating the table:", err)
  );

ProductTag.sync()
  .then(() => console.log("The Product Tab Table has been created"))
  .catch((err) =>
    console.log("An error occurred while creating the table:", err)
  );

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
