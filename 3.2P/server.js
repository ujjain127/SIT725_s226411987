const express = require("express");

const app = express();

const inventoryCards = [
  {
    title: "Fleetwood Mac - Rumours",
    image:
      "https://images.unsplash.com/photo-1619983081563-430f63602796?auto=format&fit=crop&w=900&q=80",
    link: "Classic Rock Vinyl",
    description: "180g remastered vinyl edition. A must-have for every classic collection.",
    price: "$49.99",
    format: "Vinyl"
  },
  {
    title: "Daft Punk - Discovery",
    image:
      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=900&q=80",
    link: "Electronic CD",
    description: "Special edition CD with an expanded booklet and bonus artwork.",
    price: "$21.99",
    format: "CD"
  },
  {
    title: "Nirvana - Nevermind",
    image:
      "https://images.unsplash.com/photo-1471478331149-c72f17e33c73?auto=format&fit=crop&w=900&q=80",
    link: "Grunge Vinyl",
    description: "Iconic album on high-quality vinyl with restored studio mastering.",
    price: "$44.99",
    format: "Vinyl"
  }
];

app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/api/cards", (req, res) => {
  res.status(200).json({
    statusCode: 200,
    data: inventoryCards,
    message: "Music inventory cards fetched successfully"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening to: ${port}`);
});