<script lang="ts">
  import { setContext, getContext } from 'svelte'
  import { writable } from 'svelte/store'
  import { Circle } from 'lucide-svelte'
  import { componentStyles } from '../shared'

  const RADIO_GROUP_CONTEXT = 'radio-group-context'

  interface RadioGroupContext {
    value: ReturnType<typeof writable<string>>
    setValue: (val: string) => void
    name: string
  }

  // Radio Group Root
  export let value = ''
  export let defaultValue = ''
  export let name = ''
  let className = ''
  export { className as class }

  const internalValue = writable(defaultValue || '')
  $: internalValue.set(value || defaultValue || '')
  $: value = $internalValue

  const uniqueName = name || `radio-group-${Math.random().toString(36).substring(7)}`

  setContext<RadioGroupContext>(RADIO_GROUP_CONTEXT, {
    value: internalValue,
    setValue: (val: string) => internalValue.set(val),
    name: uniqueName
  })
</script>

<div class="{componentStyles.radioGroup.root} {className}" role="radiogroup">
  <slot />
</div>
