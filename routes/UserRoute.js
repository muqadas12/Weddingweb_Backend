const express = require("express");
const { check } = require("express-validator");

const router = express.Router();

const UserController = require("../Controllers/UserController");

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),

    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ max: 20 }),
  ],
  UserController.SignUp
);

router.post("/login", UserController.Login);
router.post("/autoSignIn", UserController.autoSignIn);
router.post("/dashboard", UserController.dashboard);

router.get("/gettingusers", UserController.getUserCustomers);
router.get("/gettingDealers", UserController.getDealers);

module.exports = router;
