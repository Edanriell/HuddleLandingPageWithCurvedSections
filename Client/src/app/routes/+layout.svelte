<script lang="ts">
	import "@app/styles/styles.less"
	import "@app/styles/tailwindcss.css"

	import {DefaultLayout} from "@widgets/layout/default";
	import {Header} from "@widgets/header";
	import {Footer} from "@widgets/footer";

	let { children, data } = $props();
</script>

<DefaultLayout>
	<Header slot="header"/>

	{@render children()}

	<Footer {data} slot="footer"/>
</DefaultLayout>