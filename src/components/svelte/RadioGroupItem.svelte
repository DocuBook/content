<script lang="ts">
  import { getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { Circle } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const RADIO_GROUP_CONTEXT = 'radio-group-context'

  interface RadioGroupContext {
    value: ReturnType<typeof writable<string>>
    setValue: (val: string) => void
    name: string
  }

  export let value: string
  export let disabled = false
  export let id = ''
  let className = ''
  export { className as class }

  const context = getContext<RadioGroupContext>(RADIO_GROUP_CONTEXT)
  const uniqueId = id || `${context?.name}-${value}`

  $: isChecked = $context?.value === value

  function handleChange() {
    if (!disabled && context) {
      context.setValue(value)
    }
  }
</script>

<div class="flex items-center space-x-2">
  <input
    type="radio"
    id={uniqueId}
    name={context?.name}
    {value}
    checked={isChecked}
    {disabled}
    class="sr-only"
    on:change={handleChange}
  />
  <label
    for={uniqueId}
    class="{componentStyles.radioGroup.item} {className}"
    class:cursor-pointer={!disabled}
    data-state={isChecked ? 'checked' : 'unchecked'}
  >
    {#if isChecked}
      <div class="flex items-center justify-center">
        <Circle class="h-2.5 w-2.5 fill-current text-current" />
      </div>
    {/if}
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
