import React from 'react'
import { componentStyles, cn } from '../../shared'

const macKeyMap: Record<string, string> = {
    command: '⌘', cmd: '⌘', option: '⌥', alt: '⌥',
    shift: '⇧', ctrl: '⌃', control: '⌃', tab: '⇥',
    caps: '⇪', enter: '⏎', return: '⏎', delete: '⌫',
    escape: '⎋', esc: '⎋', up: '↑', down: '↓',
    left: '←', right: '→', space: '␣',
}

const windowsKeyMap: Record<string, string> = {
    command: 'Win', cmd: 'Win', option: 'Alt', alt: 'Alt',
    ctrl: 'Ctrl', control: 'Ctrl', delete: 'Del', escape: 'Esc',
    esc: 'Esc', enter: 'Enter', return: 'Enter', tab: 'Tab',
    caps: 'Caps', shift: 'Shift', space: 'Space',
    up: '↑', down: '↓', left: '←', right: '→',
}

export interface KbdProps extends React.HTMLAttributes<HTMLElement> {
    show?: string
    type?: 'window' | 'mac'
    children?: React.ReactNode
    className?: string
}

export function Kbd({ show: keyProp, type = 'window', children, className, ...props }: KbdProps) {
    const getKeyDisplay = (): React.ReactNode => {
        if (!keyProp || typeof keyProp !== 'string') return null
        const lowerKey = keyProp.toLowerCase()
        if (type === 'mac') return macKeyMap[lowerKey] || keyProp
        return windowsKeyMap[lowerKey] || (keyProp.charAt(0).toUpperCase() + keyProp.slice(1))
    }

    const renderContent = () => {
        if (children !== undefined && children !== null && children !== '') return children
        return getKeyDisplay() || keyProp || ''
    }

    return (
        <kbd
            className={cn(componentStyles.kbd.base, className)}
            {...props}
        >
            {renderContent()}
        </kbd>
    )
}

export default Kbd
