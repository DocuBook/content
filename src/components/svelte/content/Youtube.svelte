<script lang="ts">
  import { componentStyles } from '../../shared';

  let videoId = $props<string>('');
  let className = $props<string>('');

  const youtubeUrl = $derived(videoId ? `https://www.youtube.com/embed/${videoId}` : '');
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
