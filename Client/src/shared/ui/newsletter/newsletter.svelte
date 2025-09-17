<script>
	import {superForm} from "sveltekit-superforms";
	import {yupClient} from "sveltekit-superforms/adapters";

	import {Button} from "@shared/ui/button";

	import {newsletterSchema} from "./model";

	export let data;

	const { form, errors, enhance, submitting, message} = superForm(data.newsletterForm, {
		validators: yupClient(newsletterSchema),
		resetForm: true,
		onUpdated: ({form}) => {
			if (form.valid) {
				console.log('Newsletter subscription successful!');
			}
		}
	})

</script>

<article class="flex flex-col items-start">
	<h3 class="font-[var(--font-family)] font-bold text-[20rem] leading-[150%] text-white uppercase mb-[16rem] desktop:text-[24rem]">Newsletter</h3>
	<p class="font-[var(--font-family)] font-semibold text-[14rem] leading-[171%] text-white mb-[32rem] w-full desktop:mb-[40rem] desktop:pr-[176rem]">To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address</p>
	<form action="?/newsletter"
	      class="flex flex-col gap-y-[16rem] w-full items-center desktop:flex-row desktop:gap-y-[unset] desktop:gap-x-[40rem]"
	      method="POST"
	      use:enhance
	>
		<div class="relative flex flex-col gap-y-[16rem] w-full">
			<label class="visually-hidden" for="email">Email</label>
			<input aria-invalid={$errors.email ? 'true' : undefined}
			       bind:value={$form.email}
			       class="font-[var(--font-family)] font-normal text-[14rem] leading-[171%] text-[#00252e] pt-[12rem] pb-[12rem] pl-[16rem] pr-[16rem] max-h-[48rem] bg-[#fff] rounded-[6rem] w-full min-w-[320rem]"
			       id="email"
			       name="email"
			       type="email"
			>
			{#if $errors.email}
				<span class="absolute bottom-[-25rem] font-[var(--font-family)] font-semibold text-[12rem] leading-[200%] text-[#ff4343]">
					{$errors.email}
				</span>
			{/if}
			{#if $message}
				<div class="absolute bottom-[-25rem] font-[var(--font-family)] font-semibold text-[12rem] leading-[200%] text-[#22c55e] desktop:bottom-[-50rem]">
					Newsletter subscription successful! Check your email for confirmation.
				</div>
			{/if}
		</div>
		<Button
				bgColor="#ff52c1"
				bgHoverColor="#ff8ed7"
				buttonType="submit"
				classes="self-end desktop:shrink-0 desktop:grow-0"
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
		>
			{$submitting ? 'Subscribing...' : 'Subscribe'}
		</Button>
	</form>
</article>