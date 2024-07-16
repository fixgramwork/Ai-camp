const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.static("/Users/kimminje/AI\ CAMP"));

app.get("/", (req, res) => {
    res.sendFile("/Users/kimminje/AI\ CAMP/index.html");
    res.sendFile("/Users/kimminje/AI\ CAMP/index.css");
});

app.get("/login", (req, res) => {
    res.sendFile("/User/kimminje/AI\ CAMP/login.html");
    res.sendFile("/User/kimminje/AI\ CAMP/login.css");
});

app.listen(PORT, () => {
    console.log(`Server started at port: ${PORT}`);
});

