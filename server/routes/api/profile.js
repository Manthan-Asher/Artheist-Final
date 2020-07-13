const express = require("express");
const router = express.Router();

const User = require("../../models/User");

router.get("/:id", (req, res) => {
  User.findById(req.params.id).then((user) => {
    if (!user) {
      return res.status(404).send({
        message: `user not found with id ${req.params.id}`,
      });
    } else {
      res.status(200).send(user);
    }
  });
});

// router.get("/:id/update", (req, res) =. {
//     User.findByIdAndUpdate(req.params.id, {
        
//     })
// })

module.exports = router;
