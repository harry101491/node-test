const express = require("express");
const router = express.Router();

const db = require("../queries");

router.get("/puppies", db.getAllPuppies);
router.get("/puppies/:id", db.getSinglePuppy);
router.post("/puppies", db.creatPuppy);
router.delete("/puppies/:id", db.removePuppy);

module.exports = router;