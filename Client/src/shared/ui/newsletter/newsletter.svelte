<script>
	import {Button} from "@shared/ui/button";
</script>

<article class="flex flex-col items-start">
	<h3 class="font-[var(--font-family)] font-bold text-[20rem] leading-[150%] text-white uppercase mb-[16rem]">Newsletter</h3>
	<p class="font-[var(--font-family)] font-semibold text-[14rem] leading-[171%] text-white mb-[32rem] w-full">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
	<form class="flex flex-col gap-y-[16rem] w-full items-center">
		<div class="relative flex flex-col gap-y-[16rem]">
			<label class="visually-hidden" for="email">Email</label>
			<input class="font-[var(--font-family)] font-normal text-[14rem] leading-[171%] text-[#00252e] pt-[12rem] pb-[12rem] pl-[16rem] pr-[16rem] max-h-[48rem] bg-[#fff] rounded-[6rem] w-full min-w-[320rem]" id="email" name="email" type="email">
		</div>
		<Button
				bgColor="#ff52c1"
				bgHoverColor="#ff8ed7"
				buttonType="submit"
				classes="self-end"
				color="#fff"
				height={48}
				hoverColor="#fff"
				hoverShadow=""
				screenLargeHeight={48}
				screenLargeTextSize={16}
				screenLargeWidth={160}
				shadow=""
				shape="rectangle"
				textSize={16}
				textWeight={700}
				type="solid"
				width={160}
		>Subscribe</Button>
	</form>
</article>