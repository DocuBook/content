'use client'

import React, { useState, Children, isValidElement, cloneElement } from 'react'
import { ChevronRight as ChevronRightIcon, File as FileIcon, Folder as FolderIcon, FolderOpen as FolderOpenIcon } from 'lucide-react'
import clsx from 'clsx'

// ──────────────────────────────────────────────
// FileTree components
// ──────────────────────────────────────────────

interface FileTreeProps {
    name: string
    children?: React.ReactNode
}

const FileComponent = ({ name }: FileTreeProps) => {
    const [isHovered, setIsHovered] = useState(false)
    const fileExtension = name.split('.').pop()?.toUpperCase()

    return (
        <div
            className={clsx(
                'flex items-center gap-2 py-1.5 pl-7 pr-3 text-sm rounded-md transition-colors duration-150 cursor-default select-none',
                isHovered ? 'bg-blue-50 dark:bg-blue-950/20' : 'hover:bg-gray-100/50 dark:hover:bg-gray-800/50',
            )}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            tabIndex={-1}
        >
            <FileIcon
                className={clsx(
                    'flex-shrink-0 transition-colors',
                    isHovered ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500',
                )}
            />
            <span className="font-mono text-sm truncate">{name}</span>
            {isHovered && fileExtension && (
                <span className="ml-auto text-xs text-gray-400/80">{fileExtension}</span>
            )}
        </div>
    )
}

const FolderComponent = ({ name, children }: FileTreeProps) => {
    const [isOpen, setIsOpen] = useState(true)
    const [isHovered, setIsHovered] = useState(false)
    const hasChildren = React.Children.count(children) > 0

    return (
        <div className="relative">
            <div
                className={clsx(
                    'flex items-center gap-2 py-1.5 pl-4 pr-3 rounded-md transition-colors duration-150 select-none',
                    isHovered && 'bg-gray-100/60 dark:bg-gray-800/60',
                    isOpen ? 'text-gray-900 dark:text-gray-100' : 'text-gray-700 dark:text-gray-300',
                    hasChildren ? 'cursor-pointer' : 'cursor-default',
                )}
                onClick={() => hasChildren && setIsOpen(!isOpen)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                tabIndex={-1}
                onKeyDown={(e) => e.preventDefault()}
            >
                {hasChildren ? (
                    <ChevronRightIcon
                        className={clsx(
                            'flex-shrink-0 transition-transform duration-200',
                            isOpen && 'rotate-90',
                            isHovered ? 'text-gray-600 dark:text-gray-400' : 'text-gray-400 dark:text-gray-500',
                        )}
                    />
                ) : (
                    <div className="w-3.5" />
                )}
                {isOpen ? (
                    <FolderOpenIcon
                        className={clsx(
                            'flex-shrink-0 transition-colors',
                            isHovered ? 'text-blue-500' : 'text-gray-400 dark:text-gray-500',
                        )}
                    />
                ) : (
                    <FolderIcon
                        className={clsx(
                            'flex-shrink-0 transition-colors',
                            isHovered ? 'text-blue-400' : 'text-gray-400/80 dark:text-gray-500/80',
                        )}
                    />
                )}
                <span
                    className={clsx(
                        'font-medium transition-colors duration-150',
                        isHovered && 'text-blue-500',
                    )}
                >
                    {name}
                </span>
            </div>
            {isOpen && hasChildren && (
                <div className="ml-5 border-l-2 border-gray-200/50 dark:border-gray-700/50 pl-2">
                    {children}
                </div>
            )}
        </div>
    )
}

export function Files({ children }: { children: React.ReactNode }) {
    return (
        <div
            className="rounded-xl border border-gray-200/20 dark:border-gray-700/20 bg-white/20 dark:bg-gray-900/20 backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md hover:border-gray-300/60 dark:hover:border-gray-600/60"
            onKeyDown={(e) => e.preventDefault()}
        >
            <div className="p-2">
                {Children.map(children, (child, index) => {
                    if (isValidElement(child)) {
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        return cloneElement(child as any, { key: index })
                    }
                    return null
                })}
            </div>
        </div>
    )
}

export function Folder({ name, children }: FileTreeProps) {
    return <FolderComponent name={name}>{children}</FolderComponent>
}

export function File({ name }: FileTreeProps) {
    return <FileComponent name={name} />
}

export const FileTreeMdx = { Files, File, Folder }
export default FileTreeMdx
