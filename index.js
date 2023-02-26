const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: '*',
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// connect db
const db = require("./app/models");
const { mongoose } = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });



require("./app/routes/farm-machine-route")(app);
require("./app/routes/cluster-route")(app);
require("./app/routes/farmer-route")(app);
require("./app/routes/plot-route")(app);
require("./app/routes/driver-route")(app);
require("./app/routes/state-route")(app);
require("./app/routes/district-route")(app);
require("./app/routes/common-route")(app);
require("./app/routes/owner-type-route")(app);
require("./app/routes/farm-season-route")(app);
require("./app/routes/crop-type-route")(app);
require("./app/routes/crop-sub-type-route")(app);
require("./app/routes/variety-route")(app);
require("./app/routes/user-route")(app);
require("./app/routes/auth-route")(app);
require("./app/routes/clusterId.route")(app);
require("./app/routes/machine-route")(app);
require("./app/routes/auth-route")(app);
require("./app/routes/implement-name-route")(app);
require("./app/routes/category-route")(app);
require("./app/routes/implement-identifier-route")(app);
require("./app/routes/vendor-route")(app);
require("./app/routes/machine-hp-route")(app);
require("./app/routes/machine-brand-route")(app);
require("./app/routes/cultivation-route")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.get("/", (req, res) => res.json({ message: "Welcome to our deliveryHistory Application!" }));



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
