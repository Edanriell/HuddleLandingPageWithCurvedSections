<script lang="ts">
	import {
		default as SectionMaskType1BottomDesktop
	} from "./section-mask-type-1-bottom-desktop.svelte";
	import {
		default as SectionMaskType1BottomMobile
	} from "./section-mask-type-1-bottom-mobile.svelte";
	import {default as SectionMaskType1TopDesktop} from "./section-mask-type-1-top-desktop.svelte";
	import {default as SectionMaskType1TopMobile} from "./section-mask-type-1-top-mobile.svelte";
	import {
		default as SectionMaskType2BottomDesktop
	} from "./section-mask-type-2-bottom-desktop.svelte";
	import {
		default as SectionMaskType2BottomMobile
	} from "./section-mask-type-2-bottom-mobile.svelte";
	import {default as SectionMaskType2TopDesktop} from "./section-mask-type-2-top-desktop.svelte";
	import {default as SectionMaskType2TopMobile} from "./section-mask-type-2-top-mobile.svelte";

	interface Props {
		decorationType: 1 | 2;
		children: import('svelte').Snippet;
		classes?: string;
		[key: string]: unknown;
	}

	let { decorationType, children, classes, ...restProps }: Props = $props();
</script>

<section {...restProps} class="relative flex flex-col items-center bg-[#f6fbff] desktop:flex-row-reverse {classes}">
	{#if decorationType === 1}
		<SectionMaskType1TopDesktop />
		<SectionMaskType1TopMobile />
	{:else if decorationType === 2}
		<SectionMaskType2TopDesktop />
		<SectionMaskType2TopMobile />
	{/if}
	{@render children()}
	{#if decorationType === 1}
		<SectionMaskType1BottomDesktop />
		<SectionMaskType1BottomMobile />
	{:else if decorationType === 2}
		<SectionMaskType2BottomDesktop />
		<SectionMaskType2BottomMobile />
	{/if}
</section>