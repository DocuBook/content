/**
 * Component style tokens - Pre-defined style combinations
 * Updated to use Tailwind semantic colors with HSL CSS variables
 */
export const componentStyles = {
    // Button variations
    button: {
        base: 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:pointer-events-none disabled:opacity-50',
        sizes: {
            sm: 'h-8 px-3 text-xs',
            md: 'h-9 px-4 py-2 text-sm',
            lg: 'h-10 px-6 text-base',
        },
        variations: {
            primary: 'bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90',
            accent: 'bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] hover:bg-[hsl(var(--accent))]/90',
            outline: 'border border-[hsl(var(--input))] bg-[hsl(var(--background))] hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
            ghost: 'hover:bg-[hsl(var(--accent))] hover:text-[hsl(var(--accent-foreground))]',
            link: 'text-[hsl(var(--primary))] underline-offset-4 hover:underline',
        },
    },

    // Card variations
    card: {
        base: 'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] shadow-sm',
        header: 'flex flex-col space-y-1.5 p-6',
        content: 'p-6 pt-0',
        footer: 'flex items-center p-6 pt-0',
        title: 'text-2xl font-semibold leading-none tracking-tight',
        description: 'text-sm text-[hsl(var(--muted-foreground))]',
    },

    // Note/Alert variations
    // Using HSL variables with proper semantic color classes
    note: {
        base: 'relative w-full rounded-lg border p-4 border-l-4',
        variants: {
            note: 'bg-[hsl(var(--note-bg))] border-[hsl(var(--note-border))] border-l-[hsl(var(--note-accent))] text-[hsl(var(--note-text))]',
            danger: 'bg-[hsl(var(--danger-bg))] border-[hsl(var(--danger-border))] border-l-[hsl(var(--danger-accent))] text-[hsl(var(--danger-text))]',
            warning: 'bg-[hsl(var(--warning-bg))] border-[hsl(var(--warning-border))] border-l-[hsl(var(--warning-accent))] text-[hsl(var(--warning-text))]',
            success: 'bg-[hsl(var(--success-bg))] border-[hsl(var(--success-border))] border-l-[hsl(var(--success-accent))] text-[hsl(var(--success-text))]',
        },
        icon: 'absolute left-4 top-4 h-5 w-5',
        content: 'pl-8',
        title: 'mb-1 font-medium leading-none tracking-tight',
        description: 'text-sm opacity-90',
    },

    // Accordion
    accordion: {
        base: 'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))]',
        item: 'border-b border-[hsl(var(--border))] last:border-b-0',
        trigger: 'flex w-full items-center justify-between p-4 font-medium transition-all hover:bg-[hsl(var(--muted))] [&[data-state=open]>svg]:rotate-180',
        content: 'overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
        contentInner: 'p-4 pt-0',
    },

    // Tooltip
    tooltip: {
        content: 'z-50 overflow-hidden rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-md px-3 py-1.5 text-sm animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    },

    // Kbd
    kbd: {
        base: 'pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-[hsl(var(--border))] bg-[hsl(var(--muted))] px-1.5 font-mono text-[10px] font-medium text-[hsl(var(--muted-foreground))] opacity-100',
    },

    // Stepper
    stepper: {
        base: 'flex w-full items-start gap-2',
        item: 'flex-1',
        trigger: 'flex items-center gap-2',
        indicator: 'flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(var(--border))] text-sm font-medium',
        title: 'text-sm font-medium',
        description: 'text-xs text-[hsl(var(--muted-foreground))]',
        separator: 'flex-1 h-[1px] bg-[hsl(var(--border))] mt-4',
    },

    // File Tree
    fileTree: {
        base: 'rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--card))] p-4',
        folder: 'font-medium',
        file: 'text-[hsl(var(--muted-foreground))]',
        indent: 'ml-4 pl-4 border-l border-[hsl(var(--border))]',
    },

    // Copy button
    copy: {
        base: 'absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] opacity-0 transition-opacity hover:bg-[hsl(var(--muted))] focus:outline-none group-hover:opacity-100',
        icon: 'h-3 w-3',
    },

    // Pre (code block)
    pre: {
        base: 'relative mb-4 mt-6 overflow-x-auto rounded-lg border border-[hsl(var(--border))] bg-[hsl(var(--muted))] p-4 font-mono text-sm',
        withCopy: 'pr-12',
    },

    // Release
    release: {
        base: 'space-y-4',
        version: 'text-2xl font-bold',
        date: 'text-sm text-[hsl(var(--muted-foreground))]',
        changes: 'space-y-2',
        changeItem: 'flex items-start gap-2',
        badge: 'inline-flex items-center rounded-full border border-[hsl(var(--border))] px-2 py-0.5 text-xs font-semibold transition-colors',
        badgeVariants: {
            major: 'bg-[hsl(var(--destructive))]/10 text-[hsl(var(--destructive))] border-[hsl(var(--destructive))]/20',
            minor: 'bg-[hsl(var(--primary))]/10 text-[hsl(var(--primary))] border-[hsl(var(--primary))]/20',
            patch: 'bg-[hsl(var(--success))]/10 text-[hsl(var(--success))] border-[hsl(var(--success))]/20',
        },
    },

    // YouTube
    youtube: {
        container: 'relative aspect-video w-full overflow-hidden rounded-lg border border-[hsl(var(--border))]',
        iframe: 'absolute inset-0 h-full w-full',
    },

    // Image
    image: {
        base: 'rounded-lg border border-[hsl(var(--border))]',
        caption: 'mt-2 text-center text-sm text-[hsl(var(--muted-foreground))]',
    },

    // Link
    link: {
        base: 'font-medium text-[hsl(var(--primary))] underline underline-offset-4 hover:text-[hsl(var(--primary))]/80',
    },

    // Tabs (Radix UI)
    tabs: {
        root: 'w-full',
        list: 'inline-flex h-9 items-center justify-center rounded-lg bg-[hsl(var(--muted))] p-1 text-[hsl(var(--muted-foreground))]',
        trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-[hsl(var(--background))] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-[hsl(var(--background))] data-[state=active]:text-[hsl(var(--foreground))] data-[state=active]:shadow-sm',
        content: 'mt-2 ring-offset-[hsl(var(--background))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2',
    },

    // Collapsible
    collapsible: {
        base: '',
        trigger: 'flex w-full items-center justify-between p-4 font-medium transition-all hover:bg-[hsl(var(--muted))] [&[data-state=open]>svg]:rotate-180',
        content: 'overflow-hidden transition-all data-[state=closed]:animate-collapse-up data-[state=open]:animate-collapse-down',
    },

    // Dialog
    dialog: {
        overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
        content: 'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-[hsl(var(--border))] bg-[hsl(var(--background))] p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
        header: 'flex flex-col space-y-1.5 text-center sm:text-left',
        footer: 'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
        title: 'text-lg font-semibold leading-none tracking-tight',
        description: 'text-sm text-[hsl(var(--muted-foreground))]',
        close: 'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-[hsl(var(--background))] transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--ring))] focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-[hsl(var(--accent))] data-[state=open]:text-[hsl(var(--muted-foreground))]',
    },

    // Dropdown Menu
    dropdownMenu: {
        content: 'z-50 min-w-[8rem] overflow-hidden rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        item: 'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-[hsl(var(--accent))] focus:text-[hsl(var(--accent-foreground))] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        separator: '-mx-1 my-1 h-px bg-[hsl(var(--border))]',
        label: 'px-2 py-1.5 text-sm font-semibold',
    },

    // Select
    select: {
        trigger: 'flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-[hsl(var(--input))] bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-[hsl(var(--background))] placeholder:text-[hsl(var(--muted-foreground))] focus:outline-none focus:ring-1 focus:ring-[hsl(var(--ring))] disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
        content: 'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-[hsl(var(--border))] bg-[hsl(var(--popover))] text-[hsl(var(--popover-foreground))] shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        viewport: 'p-1',
        item: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-[hsl(var(--accent))] focus:text-[hsl(var(--accent-foreground))] data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        itemIndicator: 'absolute right-2 flex h-3.5 w-3.5 items-center justify-center',
        groupLabel: 'px-2 py-1.5 text-sm font-semibold',
    },

    // Checkbox
    checkbox: {
        base: 'peer h-4 w-4 shrink-0 rounded-sm border border-[hsl(var(--primary))] ring-offset-[hsl(var(--background))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[hsl(var(--primary))] data-[state=checked]:text-[hsl(var(--primary-foreground))]',
        indicator: 'flex items-center justify-center text-current',
    },

    // Switch
    switch: {
        base: 'peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--background))] disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-[hsl(var(--primary))] data-[state=unchecked]:bg-[hsl(var(--input))]',
        thumb: 'pointer-events-none block h-4 w-4 rounded-full bg-[hsl(var(--background))] shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0',
    },

    // Radio Group
    radioGroup: {
        root: 'grid gap-2',
        item: 'aspect-square h-4 w-4 rounded-full border border-[hsl(var(--primary))] text-[hsl(var(--primary))] ring-offset-[hsl(var(--background))] focus:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        indicator: 'flex items-center justify-center',
    },

    // Separator
    separator: {
        base: 'bg-[hsl(var(--border))] shrink-0',
        horizontal: 'h-[1px] w-full',
        vertical: 'h-full w-[1px]',
    },
} as const

export type ComponentStyle = typeof componentStyles
