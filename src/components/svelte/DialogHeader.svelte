<script lang="ts">
  import { componentStyles } from '../shared'

  let className = ''
  export { className as class }
</script>

<div class="{componentStyles.dialog.header} {className}">
  <slot />
</div>
