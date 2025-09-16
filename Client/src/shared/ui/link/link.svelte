<script lang="ts">

	interface Props {
		color?: string;
		hoverColor?: string;
		bgColor?: string;
		bgHoverColor?: string;
		borderThickness?: number;
		borderColor?: string;
		borderHoverColor?: string;
		borderRadius?: number;
		screenLargeBorderRadius?: number;
		width?: number;
		height?: number;
		screenLargeWidth?: number;
		screenLargeHeight?: number;
		textSize?: number;
		textWeight?: number;
		screenLargeTextSize?: number;
		screenLargeBorderThickness?: number;
		href: string;
		type?: "ghost" | "solid";
		shape?: "pill" | "rectangle";
		shadow?: string;
		hoverShadow?: string;
		classes?: string;
		children: import('svelte').Snippet;
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
		borderRadius = 12,
		screenLargeBorderRadius = 20,
		screenLargeTextSize = 16,
		screenLargeWidth = width * 2,
		screenLargeHeight = height * 2,
		href="/",
		type="ghost",
		shape="pill",
		screenLargeBorderThickness=1,
		shadow = "0 0 5rem 0 rgba(255,82,193,0.22)",
		hoverShadow = "0 0 9rem 0 rgba(255,82,193,0.22)",
		classes = "",
		children,
		...restProps
	}:Props = $props();

	const dynamicStyles = $derived(`
		--link-color: ${color};
		--link-hover-color: ${hoverColor};
		--link-bg: ${bgColor};
		--link-bg-hover: ${bgHoverColor};
		--link-border-color: ${borderColor};
		--link-border-hover-color: ${borderHoverColor};
		--link-border-width: ${borderThickness}rem;
		--link-border-width-large: ${screenLargeBorderThickness}rem;
		--link-width: ${width}rem;
		--link-height: ${height}rem;
		--link-width-large: ${screenLargeWidth}rem;
		--link-height-large: ${screenLargeHeight}rem;
		--link-text-size: ${textSize}rem;
		--link-text-size-large: ${screenLargeTextSize}rem;
		--link-font-weight: ${textWeight};
		--link-shadow: ${shadow};
		--link-hover-shadow: ${hoverShadow};
		--link-border-radius: ${borderRadius}rem;
		--link-border-radius-large: ${screenLargeBorderRadius}rem;
	`);
</script>

<style>
	.link {
		font-family: var(--font-family);
		border-style: solid;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
		text-decoration: none;

		/* Apply dynamic styles */
		color: var(--link-color);
		background-color: var(--link-bg);
		border-color: var(--link-border-color);
		border-width: var(--link-border-width);
		width: var(--link-width);
		height: var(--link-height);
		font-size: var(--link-text-size);
		font-weight: var(--link-font-weight);
		box-shadow: var(--link-shadow);
	}

	.link:hover {
		color: var(--link-hover-color);
		background-color: var(--link-bg-hover);
		border-color: var(--link-border-hover-color);
		box-shadow: var(--link-hover-shadow);
	}

	.link--shape--pill {
		border-radius: var(--link-border-radius);
	}

	.link--shape--rectangle {
		border-radius: 5rem;
	}

	@media (min-width: 1440px) {
		.link {
			width: var(--link-width-large);
			height: var(--link-height-large);
			font-size: var(--link-text-size-large);
			border-width: var(--link-border-width-large);
		}

		.link--shape--pill {
			border-radius: var(--link-border-radius-large);
		}
	}
</style>

{#if type === "ghost"}
	{#if shape === "pill"}
		<a
				{href}
				class="link link--shape--pill {classes}"
				style={dynamicStyles}
				{...restProps}
		>
			{@render children()}
		</a>
	{:else} 
		<a
				{href}
				class="link link--shape--rectangle {classes}"
				style={dynamicStyles}
				{...restProps}
		>
			{@render children()}
		</a>
	{/if}
{:else}
	{#if shape === "pill"}
		<a
				{href}
				class="link link--shape--pill {classes}"
				style={dynamicStyles}
				{...restProps}
		>
			{@render children()}
		</a>
	{:else}
		<a
				{href}
				class="link link--shape--rectangle {classes}"
				style={dynamicStyles}
				{...restProps}
		>
			{@render children()}
		</a>
	{/if}
{/if} 