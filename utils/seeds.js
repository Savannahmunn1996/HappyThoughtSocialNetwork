const connection = require("../config/connection");
const { User, Reaction, Thought } = require("../models");

// Start the seeding runtime timer
console.time("seeding");

// Creates a connection to mongodb
connection.once("open", async () => {
  // Delete the entries in the collection
  await User.deleteMany({});
  await Reaction.deleteMany({});
  await Thought.deleteMany({});

  const users = [
    {
      username: "codingFun",
      email: "codingFun1@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "SavannahMercedes",
      email: "savannahmunn1996@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "SquishyMarshmallow",
      email: "marshy@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "PandaPancake",
      email: "pandasrock99@yahoo.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "FunkyBuns",
      email: "funky@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "RandomHTMLgirl",
      email: "helloworld@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "coolestNerdEver",
      email: "cne3@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "girlsCodeToo101",
      email: "girl101@gmail.com",
      thoughts: [],
      friends: [],
    },

    {
      username: "happyCrab",
      email: "happy444@gmail.com",
      thoughts: [],
      friends: [],
    },

    {
      username: "HeyGirlHey",
      email: "hey@gmail.com",
      thoughts: [],
      friends: [],
    },
    {
      username: "gygudi",
      email: "hjhhhhui@gmail.com",
      thoughts: [],
      friends: [],
    },
  ];
  const reactions = [
    {reactionId:}
  ];
  const thoughts = [];

  // Wait for the users to be inserted into the database
  await User.collection.insertMany(users);
  await Reaction.collection.insertMany(reactions);
  await Thought.collection.insertMany(thoughts);
  console.table(users);
  console.timeEnd("seeding complete 🌱");
  process.exit(0);
});
