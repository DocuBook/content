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
// Svelte Components
// ──────────────────────────────────────────────
// Content/Markdown Components
export {
  Button as SvelteButton,
  Card as SvelteCard,
  CardGroup as SvelteCardGroup,
  Note as SvelteNote,
  Link as SvelteLink,
  Image as SvelteImage,
  Pre as SveltePre,
  Copy as SvelteCopy,
  Kbd as SvelteKbd,
  Accordion as SvelteAccordion,
  AccordionGroup as SvelteAccordionGroup,
  FileTree as SvelteFileTree,
  Stepper as SvelteStepper,
  Release as SvelteRelease,
  Youtube as SvelteYoutube,
  Tooltip as SvelteTooltip
} from './svelte/content'

// bits-ui Components (Interactive)
export {
  Accordion as SvelteAccordionRoot,
  AccordionItem as SvelteAccordionItem,
  AccordionTrigger as SvelteAccordionTrigger,
  AccordionContent as SvelteAccordionContent,
  Dialog as SvelteDialog,
  DialogTrigger as SvelteDialogTrigger,
  DialogContent as SvelteDialogContent,
  DialogHeader as SvelteDialogHeader,
  DialogTitle as SvelteDialogTitle,
  DialogDescription as SvelteDialogDescription,
  DialogFooter as SvelteDialogFooter,
  Tabs as SvelteTabs,
  TabsList as SvelteTabsList,
  TabsTrigger as SvelteTabsTrigger,
  TabsContent as SvelteTabsContent,
  Checkbox as SvelteCheckbox,
  Switch as SvelteSwitch,
  RadioGroup as SvelteRadioGroup,
  RadioGroupItem as SvelteRadioGroupItem,
  Collapsible as SvelteCollapsible,
  CollapsibleTrigger as SvelteCollapsibleTrigger,
  CollapsibleContent as SvelteCollapsibleContent,
  Select as SvelteSelect,
  SelectTrigger as SvelteSelectTrigger,
  SelectContent as SvelteSelectContent,
  SelectItem as SvelteSelectItem,
  SelectValue as SvelteSelectValue,
  DropdownMenu as SvelteDropdownMenu,
  DropdownMenuTrigger as SvelteDropdownMenuTrigger,
  DropdownMenuContent as SvelteDropdownMenuContent,
  DropdownMenuItem as SvelteDropdownMenuItem,
  DropdownMenuSeparator as SvelteDropdownMenuSeparator,
  Tooltip as SvelteTooltipRoot,
  TooltipTrigger as SvelteTooltipTrigger,
  TooltipContent as SvelteTooltipContent,
  TooltipProvider as SvelteTooltipProvider,
  Separator as SvelteSeparator
} from './svelte/ui'

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
