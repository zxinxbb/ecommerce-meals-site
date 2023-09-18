const express = require("express")
const router = express.Router()
const itemsController = require("../controllers/items")

router.get("/items", itemsController.getItems)
router.get("/item/:id", itemsController.getItem)
router.delete("/item/:id", itemsController.deleteItem)
router.post("/item", itemsController.addItem)
module.exports = router 