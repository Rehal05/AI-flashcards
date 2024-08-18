import {NextResponse} from 'next/server'
import OpenAI from 'openai'

const systemPrompt = `
You are a flashcard creator. Each flashcard should contain a question or prompt on one side and the corresponding answer or explanation on the other. 
The flashcards should be concise, focused, and clear, enabling quick review sessions. The format should support a variety of subjects, 
from technical topics like programming and algorithms to more general areas like vocabulary, or language learning. 
Return in the following JSON format
{
    "flashcards":[{
        "front": str,
        "back": str
    }]
}
`

export async function POST(req) {
    const openai =  new OpenAI()
    const data = await req.text()

    const completion = await openai.chat.completion.create({
        messages: [
            {role: 'system', content: systemPrompt},
            {role: 'user', content: data},
        ],
        model: 'gpt-4',
        response_format: {type: 'json_object'},
    })

    const flashcards = JSON.parse(completion.choices[0].message.content)

    return NextResponse.json(flashcards.flashcard)
}