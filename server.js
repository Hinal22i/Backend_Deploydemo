const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// app.use(express.json()); //inbuilt middleware
// app.use(cors()); thirdparty middleware

const PORT = process.env.PORT || 8080;

const fighters = [
  {
    id: 1,
    first_name: "Bruce",
    last_name: "Lee",
    country_id: 10,
    style: "Jeet Kune Do",
  },
  {
    id: 2,
    first_name: "Chuck",
    last_name: "Norris",
    country_id: 2,
    style: "Chunk Kuk Do",
  },
  {
    id: 3,
    first_name: "Jackie",
    last_name: "Chan",
    country_id: 11,
    style: "Kung Fu",
  },
  {
    id: 4,
    first_name: "Ip",
    last_name: "Man",
    country_id: 10,
    style: "Wing Chun",
  },
  {
    id: 5,
    first_name: "Tony",
    last_name: "Jaa",
    country_id: 87,
    style: "Muay Thai",
  },
  {
    id: 6,
    first_name: "Jean Claude",
    last_name: "Van Damme",
    country_id: 8,
    style: "Kickboxing",
  },
  {
    id: 7,
    first_name: "Jet",
    last_name: "Li",
    country_id: 10,
    style: "Wushu",
  },
];

app.get("/", (req, res) => {
  res.json("Welcome to my API");
});

app.get("/fighters", (req, res) => {
  res.json(fighters);
});

app.get("/fighters/:id", (req, res) => {
  const { id } = req.params;
  const fighter = fighters.find((f) => f.id === parseInt(id, 10));
  console.log(id);
  if (fighter) {
    res.json(fighter);
  } else {
    res.status(404).json({ msg: "Fighter not found" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost${PORT}`);
});

// const myMiddleware = (req, res, next) => {
//   console.log("I am Mr.Middleware");
//   next();
// };

// const myOtherMiddleware = (req, res, next) => {
//   console.log("I am also Mr.Middleware");
//   next();
// };

// app.use(myMiddleware);
// app.use(myOtherMiddleware);

// app.get("/", (req, res) => {
//   res.send("Welcome to my API");
// });

// const tellMe = (req, res, next) => {
//   console.log("Hey, Everything will be alright");
//   next();
// };
// const tellMeanother = (req, res, next) => {
//   console.log("Hey, Everything will be alright another");
//   next();
// };

// app.get("/somewhere", tellMe, tellMeanother, (req, res) => {
//   res.send("I am somewhere");
// });

// app.listen(PORT, () => {
//   console.log(`Listening on http://localhost${PORT}`);
// });
