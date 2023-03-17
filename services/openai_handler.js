const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config()


class OpenAIHandler {
    constructor() {
        const configuration = new Configuration({
            apiKey: process.env.OPENAI_API_KEY,
        });

        this.openai = new OpenAIApi(configuration);
    }

    async ask(prompt) {
        // What is a completion? https://platform.openai.com/docs/api-reference/completions
        let completion = await this.openai.createCompletion({
            // Models: https://platform.openai.com/docs/models/overview
            model: "text-davinci-003",
            prompt: prompt
        })

        console.log(completion.data.choices[0].text)
        console.log(completion)
        console.log(completion.data)
        console.log(completion.data.choices)
        console.log(completion.data.choices[0])

        return completion.data.choices[0].text
    }
}


module.exports = OpenAIHandler