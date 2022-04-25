var express = require("express");

const router = express.Router();

var controller1 = require("../controller/index")

let routes = (app) => {
 
 
  router.post("/prime", controller1.prime);
   router.post("/calc", controller1.calc);
   router.post("/oddeven", controller1.oddeven);
  router.post("/user",controller1.user)
 
  app.use("/apk", router);
};

module.exports = routes;

