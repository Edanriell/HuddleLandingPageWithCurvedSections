<script lang="ts">
	import {goto} from "$app/navigation";

	import {Button} from "@shared/ui/button";

	function goHome() {
		goto('/');
	}

	function goBack() {
		history.back();
	}
</script>

<svelte:head>
	<title>Page Not Found - 404</title>
	<meta content="The page you're looking for could not be found." name="description" />
</svelte:head>

<section class="min-h-screen flex items-center justify-center px-[16rem]">
	<div class="w-full max-w-[1024rem] text-center mb-[24rem] desktop:mb-[64rem]">
		<div class="mb-[48rem]! mt-[48rem]">
			<h1 class="mb-[unset]! mt-[unset]! text-[128rem]! sm:text-[144rem]! desktop:text-[192rem]! font-bold! text-gray-200! select-none!">404</h1>
		</div>
		<div class="mb-[48rem] max-w-[512rem] mx-auto">
			<h2 class="text-[48rem]! sm:text-[64rem]! desktop:text-[60rem]! font-bold! text-gray-900! mb-[24rem]!">Page Not Found</h2>
			<p class="text-[16rem]! desktop:text-[18rem]! text-gray-600! mb-[32rem]! leading-[150%]!">
				Sorry, we couldn't find the page you're looking for.
				It might have been moved, deleted, or you entered the wrong URL.
			</p>
		</div>
		<div class="flex flex-row gap-[16rem] justify-center mb-[84rem]">
			<Button
					bgColor="#ff52c1"
					bgHoverColor="#ff8ed7"
					buttonType="submit"
					classes="self-end desktop:shrink-0 desktop:grow-0"
					color="#fff"
					height={48}
					hoverColor="#fff"
					hoverShadow=""
					onclick={goHome}
					screenLargeHeight={48}
					screenLargeTextSize={16}
					screenLargeWidth={160}
					shadow=""
					shape="rectangle"
					textSize={16}
					textWeight={700}
					type="solid"
					width={160}
			>Go Home</Button>
			<Button
					bgColor="#ff52c1"
					bgHoverColor="#ff8ed7"
					buttonType="submit"
					classes="self-end desktop:shrink-0 desktop:grow-0"
					color="#fff"
					height={48}
					hoverColor="#fff"
					hoverShadow=""
					onclick={goBack}
					screenLargeHeight={48}
					screenLargeTextSize={16}
					screenLargeWidth={160}
					shadow=""
					shape="rectangle"
					textSize={16}
					textWeight={700}
					type="solid"
					width={160}
			>Go Back</Button>
		</div>
	</div>
</section>

<style>
	@keyframes float {
		0%, 100% { transform: translateY(0rem); }
		50% { transform: translateY(-10rem); }
	}

	h1 {
		animation: float 3s ease-in-out infinite;
	}
</style>