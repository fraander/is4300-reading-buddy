import OpenAI from "openai";
import { useState } from "react";
import VDiv from "../utils/VDiv";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI,
  dangerouslyAllowBrowser: true,
});

export default function ChatGpt() {
  const [message, setMessage] = useState<string>("Pet me for motivation!");
  const [dog, setDog] = useState<number>(0);

  const dogRoutes = [
    "/dog1.png",
    "/dog2.png",
    "/dog3.png",
    "/dog4.png",
    "/dog5.png",
  ];

  const fetch = async () => {
    setMessage(() => "");
    console.log("calling");
    const prompt: string =
      "Write me a very short (not more than 10 words) motivational message to help me, a young child and beginner reader, want to keep reading!";
    const stream = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [{ role: "user", content: prompt }],
      stream: true,
    });
    console.log("responding");
    for await (const chunk of stream) {
      const output = chunk.choices[0]?.delta?.content || "";
      console.log(message + output);
      setMessage((current) => current + output.replace(/"/g, ""));
    }
    setDog(Math.floor(Math.random() * dogRoutes.length));
    console.log("completed");
  };

  return (
    <VDiv onClick={() => fetch()}>
      <img className="h-64 w-64 p-4 brightness" src={dogRoutes[dog]} />

      <div className="p-4 mx-4 mb-4 text-lg font-serif font-medium bg-white rounded-full text-center">{message}</div>
    </VDiv>
  );
}
