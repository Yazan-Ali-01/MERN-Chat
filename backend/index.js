const express = require('express');
const axios = require('axios');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: '*',
  })
);
//
app.post('/authenticate', async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      'https://api.chatengine.io/users/',
      {
        username: username,
        secret: username,
        first_name: username,
      },
      { headers: { 'private-key': process.env.PRIVATE_KEY } }
    );
    return res.status(r.status).json(r.data);
  } catch (error) {
    console.log(error);
    return res.status(error.response.status).json(error.response.data);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on PORT ${process.env.PORT}`);
});
