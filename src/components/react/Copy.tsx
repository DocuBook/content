import React, { useState } from "react";
import { Check, Copy as CopyIcon } from "lucide-react";

type CopyProps = {
  content: string;
};

const Copy: React.FC<CopyProps> = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  }

  return (
    <button
      type="button"
      className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium border rounded transition-colors bg-muted hover:bg-muted/70 border-border cursor-copy"
      onClick={handleCopy}
    >
      {isCopied ? (
        <Check className="w-3 h-3" />
      ) : (
        <CopyIcon className="w-3 h-3" />
      )}
    </button>
  );
};

export default Copy;
