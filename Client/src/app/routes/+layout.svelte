<script lang="ts">
	import "@app/styles/styles.less"
	import "@app/styles/tailwindcss.css"

	import {DefaultLayout} from "@widgets/layout/default";
	import {Header} from "@widgets/header";
	import {Footer} from "@widgets/footer";

	let { children } = $props();
</script>

<DefaultLayout>
	<Header slot="header"/>

	{@render children()}

	<Footer slot="footer"/>
</DefaultLayout>