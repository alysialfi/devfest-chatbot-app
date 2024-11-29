"use client"

import Button from "../components/Button";
import ButtonModal from "../components/ButtonModal";
import Input from "../components/Input";
import { useEffect, useState } from "react";

type Message = {
    food: string,
    places: string,
    stays: string,
    transportation: string,
}
 
export default function Page() {
    const [messages, setMessages] = useState<Message>({
        food: "",
        places: "",
        stays: "",
        transportation: ""
    })
    const [country, setCountry] = useState<string>('')
    const [city, setCity] = useState<string>('')
    const [isGenerating, setIsGenerating] = useState<boolean>(false);
    const questProps = [
        {
            val: country,
            setVal: setCountry,
            placeholder: "Where country are you travelling from?",
        },
        {
            val: city,
            setVal: setCity,
            placeholder: "What city you want to visit?",
        }
    ]

    const [prompts, setPrompts] = useState<Array<{key: string, prompt: string}>>([
        {
            key: '',
            prompt: ''
        }
    ]);

    useEffect(() => {
        setPrompts([
            {
                key: "food",
                prompt: `Give me food recommendations in ${city}`
            },
            {
                key: "places",
                prompt: `What are the best places to visit in ${city}?`
            },
            {
                key: "stays",
                prompt: `What are the best stays in ${city}?`
            },
            {
                key: "transportation",
                prompt: `How can I travel from ${country} to ${city}?`
            }
        ]);
    }, [city, country]);
    
    return (
        <>
            <div className={`${isGenerating ? 'hidden' : 'flex'} fixed inset-0 bg-black bg-opacity-50 items-center justify-center z-50`}>
                <div className="bg-white p-8 rounded-lg shadow-xl w-96">
                    <h2 className="text-2xl font-bold mb-4">Enter Travel Details</h2>
                    <div className="space-y-4">
                        {questProps.map((quest, index) => (
                            <Input key={index} {...quest} />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-end">
                        <Button prompts={prompts} setMessages={setMessages} setIsGenerating={setIsGenerating} withCopy={true}/>
                    </div>
                </div>
            </div>
            <div className={`bg-orange-a w-screen min-h-screen p-16`}>
                <div className="flex justify-end">
                    <ButtonModal setIsModalOpen={setIsGenerating}/>
                </div>
                <div className="w-full h-full flex flex-col justify-center items-center">
                    <div className={`${isGenerating ? 'flex' : 'hidden'} mt-4 w-full grid grid-cols-2 gap-4 text-left`}>
                        {Object.keys(messages).map((key) => (
                            <div key={key} className="mt-4 bg-white rounded-md p-8">
                                <h3 className="font-bold capitalize">{key}:</h3>
                                <p>{messages[key as keyof Message]}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}