<script lang="ts">
  import { componentStyles } from '../../shared';
  import { Info, AlertTriangle, AlertCircle, CheckCircle } from 'lucide-svelte';

  const iconMap = {
    note: Info,
    danger: AlertCircle,
    warning: AlertTriangle,
    success: CheckCircle,
  };

  type NoteType = keyof typeof iconMap;

  let type = $props<NoteType>('note');
  let title = $props<string>('Note');
  let className = $props<string>('');

  const Icon = $derived(iconMap[type]);

  const noteClasses = $derived([
    componentStyles.note.base,
    componentStyles.note.variants[type],
    className
  ].join(' '));
</script>

<div class={noteClasses}>
  <div class={componentStyles.note.icon}>
    <Icon class="w-5 h-5" />
  </div>
  <div class={componentStyles.note.content}>
    <h5 class={componentStyles.note.title}>{title}</h5>
    <div class={componentStyles.note.description}>
      <slot />
    </div>
  </div>
</div>
