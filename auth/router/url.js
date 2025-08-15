const express = require("express");
const router = express.Router();
const {
  handleUrl,
  handleShortUrl,
  redirectUrl,
} = require("../controllers/url");

router.post("/url", handleUrl);
router.get("/url", handleShortUrl);
router.get("/url/:shortid", redirectUrl);

module.exports = router;
