const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

    try {
        const resp = await axios.put(
            "https://api.chatengine.io/users/",
            {username: username, secret: username, first_name:username},
            {headers: {"private-key": "ffacc2d8-9d50-48e8-9b6b-4e959da32846"}}
        )
        return res.status(resp.status).json(resp.data)
    } catch (error) {
        return res.status(error.response.status).json(error.response.data)
    }
});

app.listen(3001);

// 3064ffe7-e9fe-436c-bf28-388996c001bc  public
//ffacc2d8-9d50-48e8-9b6b-4e959da32846  private