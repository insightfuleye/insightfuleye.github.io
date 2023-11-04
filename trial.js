// This code is for v4 of the openai package: npmjs.com/package/openai
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.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,
});

function Generator() {
const response = await openai.completions.create({
    model: "text-davinci-003",
    prompt: "write a story incorporating the following fact: there are more grains of sand on earth than stars in the sky",
    temperature: 1,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
});
  document.getElementById('generated_text').innerHTML = response;
}
console.log(response)
