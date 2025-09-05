<script lang="ts">
	import type {Snippet} from "svelte";

	interface Props {
		color?: string;
		hoverColor?: string;
		bgColor?: string;
		bgHoverColor?: string;
		borderThickness?: number;
		borderColor?: string;
		borderHoverColor?: string;
		width?: number;
		height?: number;
		screenLargeWidth?: number;
		screenLargeHeight?: number;
		screenLargeBorderThickness?: number;
		href: string;
		type?: "ghost" | "solid";
		shape?: "pill" | "rectangle";
		shadow?: string;
		hoverShadow?: string;
		children: Snippet;
	}

	let {
		color = "#000",
		hoverColor = "#000",
		bgColor = "transparent",
		bgHoverColor = "transparent",
		borderThickness = 0.6,
		borderColor = "#ff52c1",
		borderHoverColor="#ff8ed7",
		width = 80,
		height = 23,
		screenLargeWidth = width * 2,
		screenLargeHeight = height * 2,
		href="/",
		type="ghost",
		shape="pill",
		screenLargeBorderThickness=1,
		shadow = "0_0_5rem_0_rgba(255,82,193,0.22)",
		hoverShadow = "0_0_9rem_0_rgba(255,82,193,0.22)",
		children
	}:Props = $props();
</script>

{#if type === "ghost"}
	{#if shape === "pill"}
		<a href={href} class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] desktop:rounded-[20rem] border-[{borderThickness}rem] desktop:border-[{screenLargeBorderThickness}rem] border-solid border-[{borderColor}] hover:border-[{borderHoverColor}] shadow-[{shadow}] hover:shadow-[{hoverShadow}]">
			{@render children()}
		</a>
	{:else}
		<a href={href} class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] desktop:rounded-[5rem] border-[{borderThickness}rem] desktop:border-[{screenLargeBorderThickness}rem] border-solid border-[{borderColor}] hover:border-[{borderHoverColor}] shadow-[{shadow}] hover:shadow-[{hoverShadow}]">
			{@render children()}
		</a>
	{/if}
{:else}
	{#if shape === "pill"}
		<a href={href} class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] desktop:rounded-[20rem] shadow-[{shadow}] hover:shadow-[{hoverShadow}]">
			{@render children()}
		</a>
	{:else}
		<a href={href} class="text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] desktop:rounded-[5rem] shadow-[{shadow}] hover:shadow-[{hoverShadow}]">
			{@render children()}
		</a>
	{/if}
{/if}