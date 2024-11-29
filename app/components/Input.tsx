"use client";

type InputProps = {
	val: string;
	setVal: (val: string) => void;
	placeholder: string;
}

export default function Input({val, setVal, placeholder}: InputProps) {

	return (
		<input
			value={val}
			onChange={(e) => setVal(e.target.value)}
			placeholder={placeholder}
			className="py-2 px-4 rounded-md text-gray-700 w-full border border-gray-300"
		/>
	);
}