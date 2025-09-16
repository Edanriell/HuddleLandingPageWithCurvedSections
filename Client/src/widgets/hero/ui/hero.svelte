<script lang="ts">
	import {Link} from "@shared/ui/link";

	import {default as HeroIllustration} from "./hero-illustration.svelte";
</script>

<section class="relative pr-[40rem] pl-[40rem] mt-[88rem] desktop:pr-[212rem] desktop:pl-[212rem] desktop:mt-[147rem]">
	<h1 class="font-[var(--second-family)] font-bold text-[24rem]! leading-[150%] text-[#00252e] text-center mt-[unset]! mb-[24rem]! desktop:text-[48rem]! desktop:mb-[26rem]!">Build The Community Your Fans Will Love</h1>
	<p class="font-[var(--font-family)] font-normal text-[14rem] leading-[150%] text-[#00252e] text-center mb-[48rem]! text-balance desktop:text-[20rem] desktop:mb-[49rem]! desktop:max-w-[600rem] desktop:ml-[auto] desktop:mr-[auto] desktop:text-wrap">Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.</p>
	<Link
			bgColor="#ff52c1"
			bgHoverColor="#ff8ed7"
			borderRadius={20}
			classes="text-center block! ml-auto mr-auto leading-[38rem] desktop:leading-[78rem] mb-[104rem] desktop:mb-[120rem]"
			color="#fff"
			height={40}
			hoverColor="#fff"
			hoverShadow="0 6rem 13rem 0 rgba(0, 37, 46, 0.22)"
			href="/"
			screenLargeBorderRadius={40}
			screenLargeHeight={80}
			screenLargeTextSize={20}
			screenLargeWidth={400}
			shadow="0 3rem 7rem 0 rgba(0, 37, 46, 0.22)"
			shape="pill"
			textSize={12}
			textWeight={700}
			type="solid"
			width={200}
	>Get Started For Free</Link>
	<HeroIllustration />
</section>