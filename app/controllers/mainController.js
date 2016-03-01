//export model
var Todo = require("../models/todo");

var router   = require("express").Router();


//set browser cookie to current_school
router.post("/set_current_school", function(req, res) {
  var school_id = req.body.id;
  if(!school_id) {
    var errorMessage = {
      school_id: "required"
    }
    res.send(JSON.stringify(errorMessage));
  }

  res.cookie("cs", school_id, { maxAge: 9000000 });
  var response = {
    success: "Updated Successfully",
    status: 200
  }
  res.end(JSON.stringify(response));
});


module.exports = router
