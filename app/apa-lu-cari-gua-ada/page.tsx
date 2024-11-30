"use client"

import { useEffect, useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";

 export default function Page() {
    const [quest, setQuest] = useState<string>('')
    const [messages, setMessages] = useState<Array<{role: string; content: string}>>([{
        role: "",
        content: ""
    }])

    // const [messages, setMessages] = useState<String[]>([''])
    const [prompts, setPrompts] = useState<Array<{key: string, prompt: string}>>([
        {
            key: '',
            prompt: ''
        }
    ]);
    const questProps = {
        val: quest,
        setVal: setQuest,
        placeholder: "Search anything...",
    }

    useEffect(() => {
        setPrompts([
            {
                key: "quest",
                prompt: quest
            }
        ]);
    }, [quest]);


    useEffect(() => {
        console.log(messages);
    }, [messages])

    return (
        <div className="bg-cream-a w-screen min-h-screen p-8 md:p-16">
            <div className="mt-0 md:mt-8 relative w-full mx-auto space-y-4 pb-20 md:pb-14">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex items-start gap-4 ${
                            message.role === 'user' ? 'justify-end' : 'justify-start'
                        }`}
                    >
                        <div className={`max-w-[80%] rounded-lg p-4 ${
                            message.role === 'user'
                                ? 'bg-white rounded-tr-none' 
                                : 'bg-gray-800 text-gray-200 rounded-tl-none'
                        }`}>
                            {message.content}
                        </div>
                    </div>
                ))}
            </div>

            <div className="fixed bottom-0 left-0 right-0 p-4 bg-cream-a">
                <div className="flex gap-2 max-w-[1000px] mx-auto pb-6">
                    <Input {...questProps} />
                    <Button prompts={prompts} setMessages={setMessages} isContinuation={true} withCopy={false}/>
                </div>
            </div>
        </div>
    )
}