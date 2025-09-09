<script lang="ts">
	interface Props {
		colorScheme: "Light" | "Dark";
		[key: string]: unknown;
	}

	let { colorScheme, ...restProps }: Props = $props();
</script>

{#if colorScheme === "Dark"}
	<a href="/" class="relative" {...restProps}>
		<img class="w-[96rem] h-[16rem] desktop:w-[240rem] desktop:h-[38rem] object-contain" alt="Huddle company logotype" src="/images/raster/logotype_dark.png">
	</a>
{:else}
	<a href="/" class="relative" {...restProps}>
		<img class="w-[200rem] h-[32rem] desktop:w-[240rem] desktop:h-[38rem] object-contain" alt="Huddle company logotype" src="/images/raster/logotype_light.png">
	</a>
{/if}