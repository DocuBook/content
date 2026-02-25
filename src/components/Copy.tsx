'use client'

import React, { useState } from 'react'

/**
 * Standalone copy button — no external UI component dependency.
 */
export function Copy({ content }: { content: string }) {
    const [isCopied, setIsCopied] = useState(false)

    async function handleCopy() {
        await navigator.clipboard.writeText(content)
        setIsCopied(true)
        setTimeout(() => setIsCopied(false), 2000)
    }

    return (
        <button
            type="button"
            className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium border rounded transition-colors bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-600 cursor-copy"
            onClick={handleCopy}
        >
            {isCopied ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                    <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
            )}
        </button>
    )
}

export default Copy
