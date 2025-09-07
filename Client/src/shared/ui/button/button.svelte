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
		textSize?: number;
		textWeight?: number;
		screenLargeTextSize?: number;
		screenLargeBorderThickness?: number;
		type?: "ghost" | "solid";
		shape?: "pill" | "rectangle";
		shadow?: string;
		hoverShadow?: string;
		buttonType?: "button" | "submit" | "reset";
		classes?: string;
		children: Snippet;
		[key: string]: unknown;
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
		textWeight = 400,
		height = 23,
		textSize = 9,
		screenLargeTextSize = 16,
		screenLargeWidth = width * 2,
		screenLargeHeight = height * 2,
		type="ghost",
		buttonType="button",
		shape="pill",
		screenLargeBorderThickness=1,
		shadow = "0_0_5rem_0_rgba(255,82,193,0.22)",
		hoverShadow = "0_0_9rem_0_rgba(255,82,193,0.22)",
		classes = "",
		children,
		...restProps
	}:Props = $props();
</script>

{#if type === "ghost"}
	{#if shape === "pill"}
		<button type={buttonType} {...restProps} class="font-[var(--font-family)] text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] desktop:rounded-[20rem] border-[{borderThickness}rem] desktop:border-[{screenLargeBorderThickness}rem] border-solid border-[{borderColor}] hover:border-[{borderHoverColor}] shadow-[{shadow}] hover:shadow-[{hoverShadow}] text-[{textSize}rem] desktop:text-[{screenLargeTextSize}rem] font-[{textWeight}rem] {classes}" >
			{@render children()}
		</button>
	{:else}
		<button type={buttonType} {...restProps} class="font-[var(--font-family)] text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] desktop:rounded-[5rem] border-[{borderThickness}rem] desktop:border-[{screenLargeBorderThickness}rem] border-solid border-[{borderColor}] hover:border-[{borderHoverColor}] shadow-[{shadow}] hover:shadow-[{hoverShadow}] text-[{textSize}rem] desktop:text-[{screenLargeTextSize}rem] font-[{textWeight}rem] {classes}">
			{@render children()}
		</button>
	{/if}
{:else}
	{#if shape === "pill"}
		<button type={buttonType} {...restProps} class="font-[var(--font-family)] text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[12rem] desktop:rounded-[20rem] shadow-[{shadow}] hover:shadow-[{hoverShadow}] text-[{textSize}rem] desktop:text-[{screenLargeTextSize}rem] font-[{textWeight}rem] {classes}">
			{@render children()}
		</button>
	{:else}
		<button type={buttonType} {...restProps} class="font-[var(--font-family)] text-[{color}] hover:text-[{hoverColor}] w-[{width}rem] h-[{height}rem] desktop:w-[{screenLargeWidth}rem] desktop:h-[{screenLargeHeight}rem] bg-[{bgColor}] hover:bg-[{bgHoverColor}] rounded-[5rem] desktop:rounded-[5rem] shadow-[{shadow}] hover:shadow-[{hoverShadow}] text-[{textSize}rem] desktop:text-[{screenLargeTextSize}rem] font-[{textWeight}rem] {classes}">
			{@render children()}
		</button>
	{/if}
{/if}