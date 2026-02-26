import { inject, type InjectionKey, type App, h, type VNode } from 'vue'
import type { FrameworkLinkProps, FrameworkImageProps } from '../framework/types'

export interface VueFrameworkConfig {
  Link: (props: FrameworkLinkProps) => VNode
  Image: (props: FrameworkImageProps) => VNode
}

export const DocuBookKey: InjectionKey<VueFrameworkConfig> = Symbol('docubook')

function createDefaultLink(props: FrameworkLinkProps): VNode {
  return h('a', { href: props.href }, props.children)
}

function createDefaultImage(props: FrameworkImageProps): VNode {
  return h('img', { src: props.src, alt: props.alt })
}

const defaultConfig: VueFrameworkConfig = {
  Link: createDefaultLink,
  Image: createDefaultImage,
}

export function useDocuBook(): VueFrameworkConfig {
  return inject(DocuBookKey, defaultConfig)
}

export function useLink() {
  const { Link } = useDocuBook()
  return Link
}

export function useImage() {
  const { Image } = useDocuBook()
  return Image
}

export interface VueAdapterOptions {
  Link?: VueFrameworkConfig['Link']
  Image?: VueFrameworkConfig['Image']
}

export function VueAdapter(options: VueAdapterOptions = {}) {
  return {
    install(app: App) {
      const config: VueFrameworkConfig = {
        Link: options.Link ?? createDefaultLink,
        Image: options.Image ?? createDefaultImage,
      }
      app.provide(DocuBookKey, config)
    },
  }
}

export default VueAdapter
