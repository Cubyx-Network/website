import type { MetaTagsProps } from 'svelte-meta-tags';
import { writable } from 'svelte/store';

export const metadata = writable<MetaTagsProps>();
