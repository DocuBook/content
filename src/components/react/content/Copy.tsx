'use client'

import React, { useState } from 'react'
import { Check, Copy as CopyIcon } from 'lucide-react'
import { componentStyles, cn } from '../../shared'

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
      className={cn(componentStyles.copy.base, 'cursor-copy')}
      onClick={handleCopy}
    >
      {isCopied ? (
        <Check className={componentStyles.copy.icon} />
      ) : (
        <CopyIcon className={componentStyles.copy.icon} />
      )}
    </button>
  );
};

export default Copy;
