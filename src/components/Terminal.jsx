'use client'

// import { Terminal } from "lucide-react";
import { useEffect, useState } from "react";

const messages = [
  "compiling...",
  "installing dependencies...",
  "configuring environment...",
  "almost there...",
  "coming soon...",
];

export default function TerminalStatus() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const delay = index === messages.length - 1 ? 7500 : 3000;

    const interval = setTimeout(() => {
      setVisible(false);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % messages.length);
        setVisible(true);
      }, 350);
    }, delay);

    return () => clearInterval(interval);
  }, [index]);

  return (
    // <div className="inline-flex items-center gap-2">
    //   <Terminal className="size-5" />

    //   <div className="terminal-status font-mono">
    //     <span className={visible ? "message visible" : "message"}>
    //       {messages[index]}
    //     </span>
    //   </div>
    // </div>
    <div className="terminal-status font-mono text-zinc-500">
      <span className={visible ? "message visible" : "message"}>
        {messages[index]}
      </span>
    </div>
  );
}
