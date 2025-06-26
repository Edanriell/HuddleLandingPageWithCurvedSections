<script lang="ts">
	interface Props {
		colorScheme: "Light" | "Dark";
	}

	let { colorScheme }: Props = $props();
</script>

{#if colorScheme === "Dark"}
	<a href="/" class="relative">
		<img class="w-[96rem] h-[16rem] desktop:w-[240rem] desktop:h-[38rem] object-contain" alt="Huddle company logotype" src="/images/raster/logotype_dark.png">
	</a>
{:else}
	<a href="/" class="relative">
		<img class="w-[200rem] h-[32rem] desktop:w-[240rem] desktop:h-[38rem] object-contain" alt="Huddle company logotype" src="/images/raster/logotype_light.png">
	</a>
{/if}