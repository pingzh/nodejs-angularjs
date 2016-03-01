//export model
var YourModel = require("../models/yourModel");

var router = require("express").Router();


//set browser cookie to current_school
router.post("/", function(req, res) {
  // var body_params = req.body.id;

  //write cookie
  res.cookie("your-cookie", "value", { maxAge: 9000000 });
  var response = {
    success: "Updated Successfully",
    status: 200
  }
  res.end(JSON.stringify(response));
});


module.exports = router
