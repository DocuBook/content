<script lang="ts">
  import { componentStyles } from '../shared'

  let className = ''
  export { className as class }
</script>

<h2 class="{componentStyles.dialog.title} {className}">
  <slot />
</h2>
