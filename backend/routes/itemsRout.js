const express = require("express");
const {
  getAllItems,
  getSingleItem,
  getFilteredItem,
  getAllBrands,
  createItem,
  deleteItem,
  updateItem,
} = require("../controllers/itemController");

const router = express.Router();

//GET all items
router.get("/", getAllItems);

//GET a single item by Id
router.get("/:id", getSingleItem);

//GET filtered items
router.get(
  "/search/:title/:brand/:category/:priceMin/:priceMax",
  getFilteredItem
);

//POST a new item
router.post("/", createItem);

//DELETE an item
router.delete("/:id", deleteItem);

//UPDATE an item
router.patch("/:id", updateItem);

module.exports = router;
