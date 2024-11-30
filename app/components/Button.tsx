"use client";
import { useChat } from "ai/react";
import { useEffect } from "react";

type Message = {
    food: string,
    places: string,
    stays: string,
    transportation: string,
}

type ButtonProps = {
    prompts: Array<{key: string, prompt: string}>;
    isContinuation?: boolean;
    setMessages: React.Dispatch<React.SetStateAction<Message>> | ((val: Array<{role: string; content: string}>) => void);
    setIsGenerating?: (val: boolean) => void;
    withCopy: boolean;
}

export default function Button({prompts, setMessages, isContinuation = false, setIsGenerating, withCopy}: ButtonProps) {
	const { messages, append, isLoading } = useChat({ api: "/api/chat" });

	const handleMultiPromptSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
        setIsGenerating?.(true);
        for (const { key, prompt } of prompts) {
            await append({ role: "user", content: prompt });
        }
	};

    useEffect(() => {
        if (isContinuation) {
            setMessages(messages.map(m => ({ role: m.role, content: m.content })));
        } else {
            const latestMessage = messages[messages.length - 1];
            if (!latestMessage) return;
    
            const promptKey = latestMessage.role === "assistant" && messages.length >= 2
                ? prompts.find(p => messages[messages.length - 2].content === p.prompt)?.key
                : null;
    
            if (promptKey && latestMessage.role === "assistant") {
                setMessages(prevMessage => ({
                    ...prevMessage,
                    [promptKey]: latestMessage.content || "No response received"
                }));
            }
        }
    }, [messages, setMessages, prompts]);

	return (
        <form onSubmit={handleMultiPromptSubmit}>
            <button type="submit" disabled={isLoading} className={`h-10 flex gap-2 justify-center items-center w-full bg-gray-800 text-white rounded-md p-2 px-4`}>
                <div className={`${withCopy ? 'block' : 'hidden'}`}>
                    Generate
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                </svg>
            </button>
        </form>
	);
}