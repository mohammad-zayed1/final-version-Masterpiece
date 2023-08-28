const express = require("express");
const router = express.Router();
const writerController = require("../controllers/writerController");

// add new writer
router.post("/addwriter", writerController.addWriter);

// update writer
router.patch("/updatewriter/:id", writerController.updateWriter);

// delete writer
router.put("/deletewriter/:id", writerController.deleteWriter);

// get all writers
router.get("/showwriters", writerController.showWriters);
module.exports = router;
