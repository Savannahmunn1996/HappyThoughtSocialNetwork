

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
  const reactions = [];
  const thoughts = [
    "I am so very happy today!",
    "I am so calm today.",
    "I like chocolate cake.",
    "I think flowers are beautiful.",
    "I love backend development!",
    "I tried your algorithm!",
    "This was awesome!",
    "Thank you for loving me.",
    "Please check out my video response..",
    "Like and subscribe and I will love you forever!",
    "Popcorn is really tasty.",
    "I like books on Algorithms and Data structures.",
    "happy dayzzzz are here again!"
  ];


  const getThoughts = (int) => {
    if (int === 1) {
      return getRandomArrItem(thoughts);
    }
    let results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        responseBody: getRandomArrItem(thoughts),
        username: getRandomName(),
      });
    }
    return results;
  };
 
  
