<script lang="ts">
  import { componentStyles } from '../shared'

  let className = ''
  export { className as class }
</script>

<p class="{componentStyles.dialog.description} {className}">
  <slot />
</p>
