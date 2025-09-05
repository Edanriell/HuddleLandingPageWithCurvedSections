<script>
	import {Logotype} from "@shared/ui/logotype";
	import {Link} from "@shared/ui/link";
</script>

<header class="bg-[#fff]">
	<div class="relative z-2 flex flex-row items-center justify-between pr-[24rem] pl-[24rem] mt-[24rem] mb-[24rem] desktop:pr-[80rem] desktop:pl-[63rem] desktop:mt-[78rem] desktop:mb-[78rem]">
		<Logotype colorScheme="Dark" />
		<Link
				borderColor="#ff52c1"
				borderHoverColor="#ff8ed7"
				borderThickness={0.6}
				color="#ff52c1"
				height={23}
				hoverColor="#ff8ed7"
				hoverShadow="0_0_9rem_0_rgba(255,82,193,0.22)"
				href="/"
				screenLargeBorderThickness={1}
				screenLargeHeight={40}
				screenLargeWidth={136}
				shadow="0_0_5rem_0_rgba(255,82,193,0.22)"
				shape="rectangle"
				type="ghost"
				width={80}
		>Try It Free</Link>
	</div>
</header>