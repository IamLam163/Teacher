/* HTTP METHODS!!! 
 GET - app.get()
  POST - app.post()
  PUT - app.put()
  DELETE - app.delete()
  PATCH - app.patch()
*/
import axios from "axios";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
const app = express();
const port = process.env.PORT;
const api = process.env.API;

const localFile = "cele.json";

let post = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }
];

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

const readData = () => {
  try {
    const getlocaldata = fs.readFileSync(localFile, "utf8");
    return JSON.parse(getlocaldata);
  } catch (error) {
    console.error("Error reading local file:", error);
    return [];
  }
};

const writeData = (apiData) => {
  try {
    fs.writeFileSync(localFile, JSON.stringify(apiData, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing to local file:", error);
  }
};

app.get("/", (req, res) => {
  res.send("API is now working");
});

app.get("/posts", async (req, res) => {
  try {
    const response = await axios.get(api);
    //console.log(response);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch posts" });
  }
});

app.get("/posts/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log(req.params);
    const response = await axios.get(`${api}/${id}`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: " failed to fetch posts" });
  }
});

app.get("/title/:title", async (req, res) => {
  try {
    const { title } = req.params;
    console.log(req.params);
    const response = await axios.get(`${api}`);
    const posts = response.data;
    const filteredPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(title.toLowerCase())
    );
    res.json(filteredPosts);
  } catch (error) {
    res.status(500).json({ error: "failed to fetch posts" });
  }
});

app.post("/posts", async (req, res) => {
  try {
    const response = await axios.post(`${api}`, req.body); //post(http://localhost:4000/posts)
    console.log(req.body);
    res.status(201).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "failed to create post" });
  }
});

/**
 * This is our local data
 */

app.get("/localposts", (req, res) => {
  res.json(post);
});

app.get("/localposts/:id", (req, res) => {
  const { id } = req.params;
  const foundPost = post.find((post) => post.id === parseInt(id));
  if (foundPost) {
    res.json(foundPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/localposts", (req, res) => {
  const newPost = req.body;
  newPost.id = post.length + 1;
  post.push(newPost);
  res.status(201).json(newPost);
});

/**
 * This is for our local database(cele.json)
 */

app.get("/localdb", (req, res) => {
  const localData = readData();
  res.json(localData);
});

app.get("/localdb/:id", (req, res) => {
  const { id } = req.params;
  const localData = readData();
  const foundPost = localData.find((post) => post.id === parseInt(id));
  if (foundPost) {
    res.json(foundPost);
  } else {
    res.status(404).json({ error: "Post not found" });
  }
});

app.post("/localdb", (req, res) => {
  const newPost = req.body;
  const localData = readData();
  newPost.id = localData.length + 1;
  localData.push(newPost);
  writeData(localData);
  res.status(201).json(newPost);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
