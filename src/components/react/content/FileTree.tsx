'use client'

import React, { Children, isValidElement, cloneElement } from 'react'
import { ChevronRight as ChevronRightIcon, File as FileIcon, Folder as FolderIcon, FolderOpen as FolderOpenIcon } from 'lucide-react'
import { componentStyles, cn } from '../../shared'
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from '../ui/Collapsible'

// ──────────────────────────────────────────────
// FileTree components
// ──────────────────────────────────────────────

interface FileTreeProps {
  name: string
  children?: React.ReactNode
  defaultOpen?: boolean
}

const FileComponent = ({ name }: { name: string }) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const fileExtension = name.split('.').pop()?.toUpperCase()

  return (
    <div
      className={cn(
        componentStyles.fileTree.file,
        'flex items-center gap-2 py-1.5 pl-7 pr-3 text-sm rounded-md transition-colors duration-150 cursor-default select-none',
        isHovered ? 'bg-[var(--color-filetree-hover)] dark:bg-[var(--color-filetree-hover-dark)]' : 'hover:bg-muted/50',
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      tabIndex={-1}
    >
      <FileIcon
        className={cn(
          'flex-shrink-0 transition-colors',
          isHovered ? 'text-primary' : 'text-muted-foreground',
        )}
      />
      <span className="font-mono text-sm truncate">{name}</span>
      {isHovered && fileExtension && (
        <span className="ml-auto text-xs text-muted-foreground/80">{fileExtension}</span>
      )}
    </div>
  )
}

const FolderComponent = ({ name, children, defaultOpen = true }: FileTreeProps) => {
  const [isHovered, setIsHovered] = React.useState(false)
  const hasChildren = React.Children.count(children) > 0

  return (
    <Collapsible defaultOpen={defaultOpen} className="relative">
      <div className="relative">
        <CollapsibleTrigger
          asChild
          disabled={!hasChildren}
          className={cn(
            componentStyles.fileTree.folder,
            'flex items-center gap-2 py-1.5 pl-4 pr-3 rounded-md transition-colors duration-150 select-none w-full text-start',
            isHovered && 'bg-muted/60',
            hasChildren ? 'cursor-pointer' : 'cursor-default',
          )}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {hasChildren ? (
              <ChevronRightIcon
                className={cn(
                  'flex-shrink-0 transition-transform duration-200',
                  isHovered ? 'text-foreground' : 'text-muted-foreground',
                  '[&[data-state=open]]:rotate-90',
                )}
              />
            ) : (
              <div className="w-3.5" />
            )}
            {hasChildren ? (
              <FolderOpenIcon
                className={cn(
                  'flex-shrink-0 transition-colors',
                  isHovered ? 'text-primary' : 'text-muted-foreground',
                )}
              />
            ) : (
              <FolderIcon
                className={cn(
                  'flex-shrink-0 transition-colors',
                  isHovered ? 'text-primary/80' : 'text-muted-foreground/80',
                )}
              />
            )}
            <span
              className={cn(
                'font-medium transition-colors duration-150',
                isHovered && 'text-primary',
              )}
            >
              {name}
            </span>
          </div>
        </CollapsibleTrigger>
      </div>
      {hasChildren && (
        <CollapsibleContent>
          <div className="ml-5 border-l-2 border-[var(--color-filetree-border)] dark:border-[var(--color-filetree-border-dark)] pl-2">
            {children}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  )
}

export function Files({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        componentStyles.fileTree.base,
        'backdrop-blur-sm shadow-sm overflow-hidden transition-all duration-200 hover:shadow-md'
      )}
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

export function Folder({ name, children, defaultOpen }: { name: string; children?: React.ReactNode; defaultOpen?: boolean }) {
  return <FolderComponent name={name} defaultOpen={defaultOpen}>{children}</FolderComponent>
}

export function File({ name }: { name: string }) {
  return <FileComponent name={name} />
}

export const FileTreeMdx = { Files, File, Folder }
export default FileTreeMdx
