<script>
	import {Logotype} from "@shared/ui/logotype";
	import {Contacts} from "@shared/ui/contacts";
	import {SocialLinks} from "@shared/ui/social-links";
	import {Newsletter} from "@shared/ui/newsletter";

	import {default as FooterMaskMobile} from "./footer-mask-mobile.svelte";
	import {default as FooterMaskDesktop} from "./footer-mask-desktop.svelte";
</script>

<footer class="bg-[#00252e] flex flex-col-reverse pt-[108rem] pb-[46rem] gap-y-[104rem] relative">
	<FooterMaskMobile />
	<FooterMaskDesktop />
	<div class="ml-[28rem] mr-[28rem]">
		<Logotype class="relative mb-[16rem] block" colorScheme="Light" />
		<p class="font-[var(--font-family)] font-semibold text-[14rem] leading-[171%] text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
		<Contacts />
		<SocialLinks classes="ml-[-3rem]" />
	</div>
	<div class="ml-[28rem] mr-[28rem]">
		<Newsletter />
	</div>
</footer>