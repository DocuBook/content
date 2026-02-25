export interface ComponentMeta {
    /** Named exports to import from this module */
    exports: string[]
    /** Sub-path under the import source */
    path: string
}

/**
 * Registry of all DocuBook MDX components.
 * Maps JSX tag names detected in MDX source to their import metadata.
 */
export const COMPONENT_REGISTRY: Record<string, ComponentMeta> = {
    // --- Standalone components ---
    Note: {
        exports: ['Note'],
        path: '/Note',
    },
    Card: {
        exports: ['Card'],
        path: '/Card',
    },
    CardGroup: {
        exports: ['CardGroup'],
        path: '/CardGroup',
    },
    Accordion: {
        exports: ['Accordion'],
        path: '/Accordion',
    },
    AccordionGroup: {
        exports: ['AccordionGroup'],
        path: '/AccordionGroup',
    },
    Stepper: {
        exports: ['Stepper'],
        path: '/Stepper',
    },
    StepperItem: {
        exports: ['StepperItem'],
        path: '/Stepper',
    },
    Kbd: {
        exports: ['Kbd'],
        path: '/Kbd',
    },
    Tooltip: {
        exports: ['Tooltip'],
        path: '/Tooltip',
    },
    Youtube: {
        exports: ['Youtube'],
        path: '/Youtube',
    },
    Button: {
        exports: ['Button'],
        path: '/Button',
    },

    // --- Link & Image (use adapter context) ---
    DocuLink: {
        exports: ['DocuLink'],
        path: '/Link',
    },
    DocuImage: {
        exports: ['DocuImage'],
        path: '/Image',
    },

    // --- FileTree compound ---
    Files: {
        exports: ['Files'],
        path: '/FileTree',
    },
    Folder: {
        exports: ['Folder'],
        path: '/FileTree',
    },
    File: {
        exports: ['File'],
        path: '/FileTree',
    },

    // --- Release compound ---
    Release: {
        exports: ['Release'],
        path: '/Release',
    },
    Changes: {
        exports: ['Changes'],
        path: '/Release',
    },

    // --- Code block ---
    Pre: {
        exports: ['Pre'],
        path: '/Pre',
    },
    Copy: {
        exports: ['Copy'],
        path: '/Copy',
    },

    // --- Provider ---
    DocuBookProvider: {
        exports: ['DocuBookProvider'],
        path: '/context',
    },
}

/**
 * Build a regex that matches any of the registered component names
 * used as JSX opening tags in MDX content.
 *
 * Matches: `<Note`, `<CardGroup`, `<Files` etc.
 */
export function buildComponentDetectionRegex(): RegExp {
    const names = Object.keys(COMPONENT_REGISTRY)
    // Match opening JSX tag: `<ComponentName` followed by whitespace, `/`, or `>`
    return new RegExp(`<(${names.join('|')})(?=[\\s/>])`, 'g')
}
