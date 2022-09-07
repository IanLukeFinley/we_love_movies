const router = require("express").Router();
const controller = require("./reviews.controller");
const methodNotAllowed = require("../utils/errors/methodNotAllowed");

router.route("/")
  .all(methodNotAllowed);

  router
  .route("/:reviewId")
  .get(controller.read)
  .put(controller.put)
  .delete(controller.delete)
  .all(methodNotAllowed);

module.exports = router;