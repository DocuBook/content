<script lang="ts">
  import { componentStyles } from '../../shared'
  import { getDocuBook } from '../../../adapters/svelte'
  import { Search, X } from 'lucide-svelte'

  let { 
    src = '', 
    alt = '', 
    width = 800, 
    height = 350, 
    className = '' 
  }: {
    src?: string
    alt?: string
    width?: number | string
    height?: number | string
    className?: string
  } = $props()

  let isOpen = $state(false)

  let ImageComponent = $derived(getDocuBook()?.Image || null)

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      isOpen = false
    }
  }

  const imageClasses = $derived([
    componentStyles.image.base,
    'w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]',
    className
  ].join(' '))

  function handleClick() {
    if (src) {
      isOpen = true
      document.body.style.overflow = 'hidden'
    }
  }

  function closeLightbox() {
    isOpen = false
    document.body.style.overflow = 'auto'
  }
</script>

<svelte:window onkeydown={handleKeydown} />

{#if src}
  <button
    type="button"
    class="relative group cursor-zoom-in my-6 w-full flex justify-center rounded-lg"
    onclick={handleClick}
    aria-label="Zoom image"
  >
    <span class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 rounded-lg">
      <Search class="w-8 h-8 text-white drop-shadow-md" />
    </span>
    {#if ImageComponent}
      <ImageComponent
        {src}
        {alt}
        {width}
        {height}
        class={imageClasses}
      />
    {:else}
      <img
        {src}
        {alt}
        {width}
        {height}
        class={imageClasses}
      />
    {/if}
  </button>

  {#if isOpen}
    <div
      class="fixed inset-0 z-[99999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-10 cursor-zoom-out"
      onclick={closeLightbox}
      role="button"
      tabindex="0"
      onkeydown={(e) => e.key === 'Enter' && closeLightbox()}
    >
      <button
        class="absolute top-4 right-4 z-50 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-white/10 rounded-full transition-colors"
        onclick={(e) => { e.stopPropagation(); closeLightbox(); }}
      >
        <X class="w-6 h-6" />
      </button>

      <div class="relative max-w-7xl w-full h-full flex items-center justify-center">
        {#if ImageComponent}
          <ImageComponent
            {src}
            {alt}
            width={1920}
            height={1080}
            class="object-contain max-h-[90vh] w-auto h-auto rounded-md shadow-2xl"
          />
        {:else}
          <img
            {src}
            {alt}
            width={1920}
            height={1080}
            class="object-contain max-h-[90vh] w-auto h-auto rounded-md shadow-2xl"
          />
        {/if}
      </div>

      {#if alt && alt !== 'alt'}
        <div class="absolute bottom-6 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md border border-white/10">
          {alt}
        </div>
      {/if}
    </div>
  {/if}
{/if}
