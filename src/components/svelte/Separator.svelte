<script lang="ts">
  import { componentStyles } from '../shared'

  export let orientation: 'horizontal' | 'vertical' = 'horizontal'
  export let decorative = true
  let className = ''
  export { className as class }
</script>

<div
  class="{componentStyles.separator.base} {orientation === 'horizontal' ? componentStyles.separator.horizontal : componentStyles.separator.vertical} {className}"
  data-orientation={orientation}
  role={decorative ? 'none' : 'separator'}
/>
