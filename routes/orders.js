const express = require("express");
const router = express.Router();
const passport = require("passport");

//Import controllers
const {
  placeOrder,
  updateOrder,
  cancelOrder,
  deleteOrder,
  getOrders,
  getAllOrders,
  getActiveOrders,
  getOrder
} = require("../controllers/orders");

// @route   POST /orders
// @desc    Place Order
// @access  Private
router.post("/", placeOrder);

// @route   PUT /orders/:id
// @desc    Update order
// @access  Private
router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  updateOrder
);

// @route   PUT /orders/cancel/:id
// @desc    Cancel order
// @access  Private
router.put(
  "/cancel/:id",
  passport.authenticate("jwt", { session: false }),
  cancelOrder
);

// @route   DELETE /orders/:id
// @desc    Delete order
// @access  Private
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  deleteOrder
);

// @route   GET /orders
// @desc    Get orders of user
// @access  Private
router.get("/", passport.authenticate("jwt", { session: false }), getOrders);

// @route   GET /orders/all
// @desc    Get all orders
// @access  Private
router.get("/all", passport.authenticate("jwt-admin", { session: false }), getAllOrders);

// @route   GET /orders/active
// @desc    Get active orders
// @access  Private
router.get("/active", passport.authenticate("jwt-admin", { session: false }), getActiveOrders);

// @route   GET /orders/:orderNo
// @desc    Get one order by orderNo
// @access  Private
router.get(
  "/:orderNo",
  passport.authenticate("jwt", { session: false }),
  getOrder
);

module.exports = router;
