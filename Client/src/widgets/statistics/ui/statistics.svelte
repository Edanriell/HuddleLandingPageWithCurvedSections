<script lang="ts">
	import {MessageIcon, PeopleIcon} from "@shared/ui/icons";
</script>

<section class="relative mt-[120rem]">
	<h2 class="visually-hidden">Statistics</h2>
	<dl class="flex flex-col items-center gap-y-[88rem] desktop:flex-row desktop:justify-center desktop:gap-x-[341rem]">
		<div class="flex flex-col-reverse items-center">
			<PeopleIcon classes="order-[1] self-start mb-[-11rem] desktop:mb-[-16rem]" />
			<dt class="font-[var(--font-family)] font-normal text-[15rem] leading-[150%] text-[#808e9a] mt-[1rem] desktop:mt-[2rem] desktop:text-[24rem]">Communities Formed</dt>
			<dd class="font-[var(--font-family)] font-bold text-[60rem] leading-[150%] text-[#00252e] desktop:text-[96rem]">1.4k+</dd>
		</div>
		<div class="flex flex-col-reverse items-center">
			<MessageIcon classes="order-[1] self-start mb-[-9rem] desktop:mb-[-16rem]" />
			<dt class="font-[var(--font-family)] font-normal text-[15rem] leading-[150%] text-[#808e9a] mt-[1rem] desktop:mt-[2rem] desktop:text-[24rem]">Messages Sent</dt>
			<dd class="font-[var(--font-family)] font-bold text-[60rem] leading-[150%] text-[#00252e] desktop:text-[96rem]">2.7m+</dd>
		</div>
	</dl>
</section>