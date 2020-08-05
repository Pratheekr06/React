const router = require("express").Router();
let Blog = require("../models/Blog.model");
const auth = require("../middleware/Auth");

router.get("/", (req, res) => {
  Blog.find()
    .then((Blogs) => res.json(Blogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.post("/", auth, (req, res) => {
  const username = req.body.username;
  const place = req.body.place;
  const dish = req.body.dish;
  const description = req.body.description;
  const image = req.body.image;
  const rating = req.body.rating;

  const newBlog = new Blog({
    username,
    place,
    dish,
    description,
    image,
    rating,
  });

  newBlog
    .save()
    .then(() => res.json("Blog added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.get("/:id", (req, res) => {
  Blog.findById(req.params.id)
    .then((Blog) => res.json(Blog))
    .catch((err) => res.json("Error: " + err));
});

router.delete("/:id", (req, res) => {
  Blog.findByIdAndDelete(req.params.id)
    .then(() => res.json("Blog deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

// router.route('/update/:id').post((req, res) => {
//   Blog.findById(req.params.id)
//     .then(Blog => {
//       Blog.username = req.body.username;
//       Blog.save()
//         .then(() => res.json('Blog updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;
