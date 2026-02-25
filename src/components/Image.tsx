'use client'

import React, { useState, useEffect } from 'react'
import { useDocuBook } from './context'

interface DocuImageProps {
    src: string
    alt?: string
    width?: number | string
    height?: number | string
    className?: string
}

/**
 * Framework-agnostic Image component with lightbox.
 * Uses useDocuBook().Image for the rendering primitive.
 */
export function DocuImage({
    src,
    alt = 'alt',
    width = 800,
    height = 350,
    className,
    ...props
}: DocuImageProps) {
    const { Image } = useDocuBook()
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            const handleEsc = (e: KeyboardEvent) => {
                if (e.key === 'Escape') setIsOpen(false)
            }
            window.addEventListener('keydown', handleEsc)
            return () => {
                document.body.style.overflow = 'auto'
                window.removeEventListener('keydown', handleEsc)
            }
        }
    }, [isOpen])

    if (!src) return null

    return (
        <>
            <button
                type="button"
                className="relative group cursor-zoom-in my-6 w-full flex justify-center rounded-lg"
                onClick={() => setIsOpen(true)}
                aria-label="Zoom image"
            >
                <span className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-md">
                        <circle cx="11" cy="11" r="8" />
                        <line x1="21" x2="16.65" y1="21" y2="16.65" />
                        <line x1="11" x2="11" y1="8" y2="14" />
                        <line x1="8" x2="14" y1="11" y2="11" />
                    </svg>
                </span>
                <Image
                    src={src}
                    alt={alt}
                    width={width}
                    height={height}
                    className={`w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01] ${className || ''}`}
                    {...props}
                />
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
                    onClick={() => setIsOpen(false)}
                >
                    <button
                        className="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-colors"
                        onClick={(e) => {
                            e.stopPropagation()
                            setIsOpen(false)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg>
                    </button>

                    <div className="relative max-w-7xl w-full h-full flex items-center justify-center">
                        <Image
                            src={src}
                            alt={alt}
                            width={1920}
                            height={1080}
                            className="object-contain max-h-[90vh] w-auto h-auto rounded-md shadow-2xl"
                        />
                    </div>

                    {alt && alt !== 'alt' && (
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/10">
                            {alt}
                        </div>
                    )}
                </div>
            )}
        </>
    )
}

export default DocuImage
