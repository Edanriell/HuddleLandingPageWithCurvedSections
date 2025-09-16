<script lang="ts">
	import {DecoratedSection} from "@shared/ui/decorated-section"
</script>

<section class="relative">
	<h2 class="visually-hidden">Features</h2>
	<ul class="relative">
		<li class="relative">
			<DecoratedSection classes="pt-[180rem] pb-[133rem] pl-[30rem] pr-[30rem] desktop:pl-[130rem] desktop:pr-[151rem] desktop:pt-[233.45rem] desktop:pb-[184.44] desktop:justify-between" decorationType={1}>
				<picture>
					<source media="(min-width: 1440px)" srcset="images/raster/grow-together-image-desktop.png" />
					<source height="306" media="(min-width: 768px)" srcset="images/raster/grow-together-image-desktop.png" width="391" />
					<img alt="Grow Together" class="mb-[74.22rem]" src="images/raster/grow-together-image-mobile.png">
				</picture>
				<div class="relative flex flex-col items-center desktop:basis-[520rem] desktop:items-start">
					<h3 class="font-[var(--second-family)] font-bold text-[20rem] leading-[150%] text-[#00252e] mb-[16rem] desktop:text-[40rem] desktop:mb-[26rem]">Grow Together</h3>
					<p class="font-[var(--font-family)] font-normal text-[14rem] leading-[150%] text-[#00252e] text-center desktop:text-left desktop:text-[16rem]">Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form. </p>
				</div>
			</DecoratedSection>
		</li>
		<li class="relative">
			<section class="flex flex-col items-center bg-[#fff] pt-[112.5rem] pb-[120rem] pl-[30rem] pr-[30rem] desktop:pl-[135rem] desktop:pr-[120rem] desktop:pt-[195rem] desktop:pb-[111rem] desktop:flex-row desktop:justify-between">
				<picture>
					<source media="(min-width: 1440px)" srcset="images/raster/flowing-conversations-image-desktop.png" />
					<source height="284" media="(min-width: 768px)" srcset="images/raster/flowing-conversations-image-desktop.png" width="398" />
					<img alt="Flowing Conversations" class="mb-[85.5rem]" src="images/raster/flowing-conversations-image-mobile.png">
				</picture>
				<div class="relative flex flex-col items-center desktop:basis-[520rem] desktop:items-start">
					<h3 class="font-[var(--second-family)] font-bold text-[20rem] leading-[150%] text-[#00252e] mb-[16rem] desktop:text-[40rem] desktop:mb-[26rem]">Flowing Conversations</h3>
					<p class="font-[var(--font-family)] font-normal text-[14rem] leading-[150%] text-[#00252e] text-center desktop:text-left desktop:text-[16rem]">You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
				</div>
			</section>
		</li>
		<li class="relative">
			<DecoratedSection classes="pt-[119rem] pb-[273rem] pl-[30rem] pr-[30rem] desktop:pl-[120rem] desktop:pr-[133rem] desktop:pt-[198rem] desktop:pb-[200.99rem] desktop:justify-between" decorationType={2}>
				<picture>
					<source media="(min-width: 1440px)" srcset="images/raster/your-users-image-desktop.png" />
					<source height="303" media="(min-width: 768px)" srcset="images/raster/your-users-image-desktop.png" width="400" />
					<img alt="Your Users" class="mb-[79rem]" src="images/raster/your-users-image-mobile.png">
				</picture>
				<div class="relative flex flex-col items-center desktop:basis-[520rem] desktop:items-start">
					<h3 class="font-[var(--second-family)] font-bold text-[20rem] leading-[150%] text-[#00252e] mb-[16rem] desktop:text-[40rem] desktop:mb-[26rem]">Your Users</h3>
					<p class="font-[var(--font-family)] font-normal text-[14rem] leading-[150%] text-[#00252e] text-center desktop:text-left desktop:text-[16rem]">It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
				</div>
			</DecoratedSection>
		</li>
	</ul>
</section>