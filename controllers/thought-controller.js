const { Thought } = require("../models");

module.exports = {
  getThought(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughts) =>
        !thought
          ? res.status(404).json({ message: "No thought with that ID" })
          : res.json(thoughts)
      )
      .catch((err) => res.status(500).json(err));
  },
  // create a new post
  createAThought(req, res) {
    Thought.create(req.body)
      .then((data) => res.json(data))
      .catch((err) => res.status(500).json(err));
  },
};
