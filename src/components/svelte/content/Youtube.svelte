<script lang="ts">
  import { componentStyles } from '../../shared'

  let { videoId = '', className = '' }: { videoId?: string; className?: string } = $props()

  const youtubeUrl = $derived(videoId ? `https://www.youtube.com/embed/${videoId}` : '')
</script>

{#if videoId}
  <div class={componentStyles.youtube.container + ' ' + className}>
    <iframe
      src={youtubeUrl}
      title="YouTube video"
      class={componentStyles.youtube.iframe}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  </div>
{/if}
