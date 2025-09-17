<script>
	import {Logotype} from "@shared/ui/logotype";
	import {Contacts} from "@shared/ui/contacts";
	import {SocialLinks} from "@shared/ui/social-links";
	import {Newsletter} from "@shared/ui/newsletter";

	import {default as FooterMaskMobile} from "./footer-mask-mobile.svelte";
	import {default as FooterMaskDesktop} from "./footer-mask-desktop.svelte";

	let {data} = $props();
</script>

<footer class="bg-[#00252e] flex flex-col-reverse pt-[108rem] pb-[46rem] gap-y-[104rem] relative desktop:flex-row desktop:gap-x-[unset] desktop:gap-y-[unset] desktop:pt-[280rem] desktop:pb-[103rem] desktop:items-start desktop:justify-between">
	<FooterMaskMobile />
	<FooterMaskDesktop />
	<div class="ml-[28rem] mr-[28rem] desktop:ml-[120rem] desktop:mr-[unset] desktop:basis-[340rem]">
		<Logotype class="relative mb-[16rem] block desktop:mb-[27rem]" colorScheme="Light" />
		<p class="font-[var(--font-family)] font-semibold text-[14rem] leading-[171%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
		<Contacts />
		<SocialLinks classes="ml-[-3rem]" />
	</div>
	<div class="ml-[28rem] mr-[28rem] desktop:ml-[unset] desktop:mr-[120rem] desktop:basis-[520rem]">
		<Newsletter {data} />
	</div>
</footer>