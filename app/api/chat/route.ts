import { streamText, StreamData } from "ai";
import { google } from "@ai-sdk/google";

export const dynamic = "force-dynamic";
export async function POST(req: Request) {
  const { messages } = await req.json();
  const data = new StreamData();
  data.append({ test: "initialized calls" });

  const result = streamText({
    model: google("models/gemini-1.5-flash"),
    system: "You are a helpful assistant.",
    messages,
  });
  return result.toDataStreamResponse();
}
