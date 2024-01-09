<script>
	import Header from './Header.svelte';
	import './styles.css';
	import "../app.css";
	import Sidebar from "./Sidebar.svelte";
	import CornerLink from "./CornerLink.svelte";
</script>

<div class="flex row min-h-screen">

	<Sidebar/>

	<main class="flex flex-col items-center w-full min-h-screen overflow-y-auto box-border py-24 pl-52">
		<div class="flex flex-col items-start w-3/6">
			<slot/>
		</div>
	</main>

	<CornerLink/>

</div>


