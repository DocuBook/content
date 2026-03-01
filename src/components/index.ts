'use client'
// ──────────────────────────────────────────────
// React Components (default for backwards compatibility)
// ──────────────────────────────────────────────
export { DocuBookProvider, useDocuBook } from './react/context'
export type { DocuBookConfig, DocuBookLinkProps, DocuBookImageProps } from './react/context'

// Content/Markdown Components
export { Note, Card, CardGroup, Copy, Kbd, Tooltip, Youtube, Pre } from './react/content'
export { Files, Folder, File } from './react/content'
export { Stepper, StepperItem } from './react/content'
export { Release, Changes } from './react/content'
export { default as Button } from './react/content/Button'
export { DocuLink } from './react/content/Link'
export { DocuImage } from './react/content/Image'

// Radix UI Components (Interactive)
export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from './react/ui'

export { default as AccordionGroup } from './react/content/AccordionGroup'

export {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './react/ui'

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './react/ui'

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from './react/ui'

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
} from './react/ui'

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
} from './react/ui'

export { Checkbox, Switch, RadioGroup, RadioGroupItem, Separator } from './react/ui'

// ──────────────────────────────────────────────
// Theme System (cross-framework)
// ──────────────────────────────────────────────
export {
  themeTokens,
  componentStyles,
  cn,
  cv
} from './shared'

export type {
  ThemeToken,
  ComponentStyle,
  VariantConfig
} from './shared'

// ──────────────────────────────────────────────
// Types (cross-framework)
// ──────────────────────────────────────────────
export type {
  LinkProps,
  ImageProps,
  AccordionProps,
  ButtonProps,
  CardProps,
  CopyProps,
} from './shared'
