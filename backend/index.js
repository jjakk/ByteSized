const OpenAI = require("openai");
const { Configuration, OpenAIApi } = OpenAI;


const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi(configuration);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (req, res) => {
    const { message, context } = req.body;
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Given this material as context
                "${context}"
                answer the following question:
                "${message}"`,
        max_tokens: 100,
        temperature: 0
    });

    if(response.data.choices[0].text){
        res.json({ message: response.data.choices[0].text });
    }
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});