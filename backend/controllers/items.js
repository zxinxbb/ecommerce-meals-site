 const Item = require("../models/shoppingCart")

const getItems = async (req, res) => {
    const items = await Item.find({})
    res.json({
        message: "all items",
        items: items
    })
}

const getItem = async (req, res) => {
    const { id } = req.params
    const item = await Item.findById(id)
    res.status(200).json(item)
}

const deleteItem = async (req, res) => {
    try {
      const { id } = req.params;
      const item = await Item.findByIdAndDelete(id);
  
      if (!item) {
        // Item with the given ID was not found
        return res.status(404).json({ message: "Item not found" });
      }
  
      res.status(200).json(item);
    } catch (error) {
      console.error("Error deleting item:", error);
      res.status(500).json({ message: "Failed to delete item" });
    }
  };
  

const addItem = async (req, res) => {
    // get the text from the req.body
    const {text,image,price} = req.body
    // create new todo object with model
    const itemObj = new Item ({
        text, image, price
       })
    const newItem = await itemObj.save()
       res.status(200).json(newItem)
    // await for it to be saved
    // respond with json()
  
}

module.exports = {
    getItems,
    getItem,
    deleteItem,
    addItem
}
