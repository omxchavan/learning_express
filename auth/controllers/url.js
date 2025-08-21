const shortid = require("shortid");
const URL = require("../model/url");



async function handleUrl(req, res) {
  const body = req.body;
  const shortUrl = shortid.generate(4);
  console.log(shortUrl);
  await URL.create({
    baseUrl: body.url,
    shortUrl: shortUrl,
  });
  return res.json({ url: "created" });
}

async function handleShortUrl(req, res) {
  const urls = await URL.find();
  return res.json(urls);
}

async function redirectUrl(req, res) {
  const {shortid}  = req.params;
  const url = await URL.findOne({ shortUrl: shortid });
  res.redirect(url.baseUrl);
}

module.exports = {
  handleUrl,
  handleShortUrl,
  redirectUrl,
};


