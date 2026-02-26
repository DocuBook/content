<script lang="ts">
  import { componentStyles } from '../shared'

  export let checked = false
  export let defaultChecked = false
  export let disabled = false
  export let id = ''
  export let name = ''
  let className = ''
  export { className as class }

  let internalChecked = defaultChecked
  $: isChecked = checked !== undefined ? checked : internalChecked

  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement
    internalChecked = target.checked
    checked = target.checked
  }

  const uniqueId = id || `switch-${Math.random().toString(36).substring(7)}`
</script>

<div class="flex items-center space-x-2">
  <input
    type="checkbox"
    role="switch"
    id={uniqueId}
    {name}
    checked={isChecked}
    {disabled}
    class="sr-only"
    on:change={handleChange}
  />
  <label
    for={uniqueId}
    class="{componentStyles.switch.base} {className}"
    class:cursor-pointer={!disabled}
    data-state={isChecked ? 'checked' : 'unchecked'}
  >
    <span
      class="{componentStyles.switch.thumb}"
      data-state={isChecked ? 'checked' : 'unchecked'}
    />
  </label>
  {#if $$slots.default}
    <label
      for={uniqueId}
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      <slot />
    </label>
  {/if}
</div>
