<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		color?: string;
		hoverColor?: string;
		bgColor?: string;
		bgHoverColor?: string;
		borderThickness?: number;
		borderColor?: string;
		width?: number;
		height?: number;
		screenLargeWidth?: number;
		screenLargeHeight?: number;
		type?: "ghost" | "solid";
		shape?: "pill" | "rectangle";
		shadow?: string;
		children: Snippet;
	}

	let {
		color = "#000",
		hoverColor = "#000",
		bgColor = "transparent",
		bgHoverColor = "transparent",
		borderThickness = 0.6,
		borderColor = "#ff52c1",
		width = 80,
		height = 23,
		screenLargeWidth = width * 2,
		screenLargeHeight = height * 2,
		type="ghost",
		shape="pill",
		shadow = "0_0_9rem_0_rgba(255,82,193,0.22)",
		children
	}:Props = $props();
</script>

{#if type === "ghost"}
	{#if shape === "pill"}
		<button type="button" class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] border-[{borderThickness}rem] border-solid border-[{borderColor}] shadow-[{shadow}]">
			{@render children()}
		</button>
	{:else}
		<button type="button" class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] border-[{borderThickness}rem] border-solid border-[{borderColor}] shadow-[{shadow}]">
			{@render children()}
		</button>
	{/if}
{:else}
	{#if shape === "pill"}
		<button type="button" class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] shadow-[{shadow}]">
			{@render children()}
		</button>
	{:else}
		<button type="button" class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] shadow-[{shadow}]">
			{@render children()}
		</button>
	{/if}
{/if}