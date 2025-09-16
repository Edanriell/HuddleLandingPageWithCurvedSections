<script lang="ts">

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

	// Create CSS custom properties for dynamic values
	const dynamicStyles = $derived(`
		--btn-color: ${color};
		--btn-hover-color: ${hoverColor};
		--btn-bg: ${bgColor};
		--btn-bg-hover: ${bgHoverColor};
		--btn-border-color: ${borderColor};
		--btn-border-hover-color: ${borderHoverColor};
		--btn-border-width: ${borderThickness}rem;
		--btn-border-width-large: ${screenLargeBorderThickness}rem;
		--btn-width: ${width}rem;
		--btn-height: ${height}rem;
		--btn-width-large: ${screenLargeWidth}rem;
		--btn-height-large: ${screenLargeHeight}rem;
		--btn-text-size: ${textSize}rem;
		--btn-text-size-large: ${screenLargeTextSize}rem;
		--btn-font-weight: ${textWeight};
		--btn-shadow: ${shadow};
		--btn-hover-shadow: ${hoverShadow};
	`);
</script>

<style>
	.button-base {
		font-family: var(--font-family);
		border-style: solid;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;

		/* Apply dynamic styles */
		color: var(--btn-color);
		background-color: var(--btn-bg);
		border-color: var(--btn-border-color);
		border-width: var(--btn-border-width);
		width: var(--btn-width);
		height: var(--btn-height);
		font-size: var(--btn-text-size);
		font-weight: var(--btn-font-weight);
		box-shadow: var(--btn-shadow);
	}

	.button-base:hover {
		color: var(--btn-hover-color);
		background-color: var(--btn-bg-hover);
		border-color: var(--btn-border-hover-color);
		box-shadow: var(--btn-hover-shadow);
	}

	.button-pill {
		border-radius: 12rem;
	}

	.button-rectangle {
		border-radius: 5rem;
	}

	@media (min-width: 1440px) {
		.button-base {
			width: var(--btn-width-large);
			height: var(--btn-height-large);
			font-size: var(--btn-text-size-large);
			border-width: var(--btn-border-width-large);
		}

		.button-pill {
			border-radius: 20rem;
		}
	}
</style>

{#if type === "ghost"}
	{#if shape === "pill"}
		<button
				type={buttonType}
				{...restProps}
				class="button-base button-pill {classes}"
				style={dynamicStyles}
		>
			{@render children()}
		</button>
	{:else}
		<button
				type={buttonType}
				{...restProps}
				class="button-base button-rectangle {classes}"
				style={dynamicStyles}
		>
			{@render children()}
		</button>
	{/if}
{:else}
	{#if shape === "pill"}
		<button
				type={buttonType}
				{...restProps}
				class="button-base button-pill {classes}"
				style={dynamicStyles}
		>
			{@render children()}
		</button>
	{:else}
		<button
				type={buttonType}
				{...restProps}
				class="button-base button-rectangle {classes}"
				style={dynamicStyles}
		>
			{@render children()}
		</button>
	{/if}
{/if}