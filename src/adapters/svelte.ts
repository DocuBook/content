import { writable, get, type Readable } from 'svelte/store'
import type { FrameworkLinkProps, FrameworkImageProps } from '../framework/types'
import type { SvelteComponent } from 'svelte'

export interface SvelteFrameworkConfig {
  Link: new (props: FrameworkLinkProps) => SvelteComponent
  Image: new (props: FrameworkImageProps) => SvelteComponent
}

function createDefaultLink(props: FrameworkLinkProps) {
  return { type: 'a', href: props.href }
}

function createDefaultImage(props: FrameworkImageProps) {
  return { type: 'img', src: props.src, alt: props.alt }
}

const defaultConfig: SvelteFrameworkConfig = {
  Link: createDefaultLink as never,
  Image: createDefaultImage as never,
}

const docuBookStore = writable<SvelteFrameworkConfig>(defaultConfig)

export function setDocuBook(config: Partial<SvelteFrameworkConfig>) {
  docuBookStore.set({ ...defaultConfig, ...config })
}

export function getDocuBook(): SvelteFrameworkConfig {
  return get(docuBookStore)
}

export function useDocuBook(): Readable<SvelteFrameworkConfig> {
  return docuBookStore
}

export function useLink(): SvelteFrameworkConfig['Link'] {
  return get(docuBookStore).Link
}

export function useImage(): SvelteFrameworkConfig['Image'] {
  return get(docuBookStore).Image
}
