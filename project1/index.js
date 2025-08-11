import mongoose from "mongoose";
import shortid from "shortid";

// creating express app
const app = express();

// middleware
app.use(json());
app.use(urlencoded({ extended: false }));

// connecting mongo
mongoose
  .connect(
    "mongodb+srv://om:samartha@cluster0.1l9hbkr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("mongo db connected");
  });

// defining url schema
const UrlSchema = mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  shortenedUrl: {
    type: String,
  },
});

//routes for post url

// model for url
const Url = mongoose.model("url", UrlSchema);

//routes for post url
app.post("/url", async (req, res) => {
  const body = req.body;
  const url = body.url;
  const shortenedUrl = shortid();
  await Url.create({
    url: url,
    shortenedUrl: shortenedUrl,
  });
  res.json({ shortenedUrl: shortenedUrl });
});

app.get("/url/:id", async (req, res) => {
  const id = req.params.id;
  const record = await Url.findOne({ shortenedUrl: id });


  if (!record) {
    return res.status(404).json({ error: "URL not found" });
  }

  res.redirect(record.url);
});

// listening app on port
app.listen(3000, () => {
  console.log("app listening on port 3000");
});
