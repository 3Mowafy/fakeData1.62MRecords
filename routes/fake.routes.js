const router = require("express").Router();
const { getAllData } = require("../controllers/fakedata.controllers");

router.get("/fake", getAllData);

module.exports = router;
