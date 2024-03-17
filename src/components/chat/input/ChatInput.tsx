import { useEffect, useRef, useState } from "react";

export const ChatInput = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      textAreaRef.current.style.maxHeight = "90px";
      textAreaRef.current.style.minHeight = "20px";
      if (inputValue === "") textAreaRef.current.style.height = "50px";
    }
  }, [inputValue]);

  useEffect(() => {
    if (buttonRef.current && textAreaRef.current) {
      buttonRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
      buttonRef.current.style.maxHeight = "90px";
    }
  });

  return (
    <div className="w-full flex justify-center">
      <div className="absolute bottom-10">
        <form
          className="flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <textarea
            className="2xl:w-[33rem] h-10 py-3 px-6 rounded-l-xl bg-slate-800 text-white outline-none resize-none overflow-auto"
            placeholder="Type a message"
            ref={textAreaRef}
            value={inputValue}
            rows={2}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="flex items-center">
            <button
              ref={buttonRef}
              type="submit"
              className="bg-slate-800 text-white px-4 py-2 rounded-r-xl hover:bg-slate-700 transition-colors duration-300 ease-in-out"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
