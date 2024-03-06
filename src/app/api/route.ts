import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
    baseURL: 'http://localhost:11434/v1/',
    apiKey: 'ollama',
  });
export async function POST(req: Request, res: NextResponse) {
    const body = await req.json()
  
    const completion = await openai.chat.completions.create({
      model: "mistral",
      messages: body.messages,
    });
    console.log(completion.choices[0].message);
    const theResponse = completion.choices[0].message;
  
    return NextResponse.json({ output: theResponse }, { status: 200 })
  
  };