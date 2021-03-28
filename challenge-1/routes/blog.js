const express = require("express");
const router = express.Router();
const BlogController = require("../controllers/blog");

router.get("/", BlogController.GetAll);
router.get("/:id", BlogController.GetOne);
router.post("/", BlogController.Create);
router.put("/:id", BlogController.Update);
router.delete("/:id", BlogController.Delete);

module.exports = router;
