<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Setup</title>
  <meta name="Setup" content="Setup your work environment" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  Setup
</h1>
<h2 class="font-josefin text-indigo-800 dark:text-indigo-300 text-3xl mb-4">
  Dragging Items
</h2>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  DropIt offers a straightforward API to facilitate drag-and-drop functionality
  for DOM nodes. To implement it, import the drag function and use it as
  demonstrated below:
</p>

<div
  class="container w-full p-4 bg-gray-800 rounded-xl overflow-x-auto text-white mb-4"
>
  <pre>
{`<script type="text/javascript">
	const { drag } = window.svelteDropit;

	let items = [...]; // Your array
	const onDrag = () => {
		// Callback function when drag-and-drop occurs
		// You can add your custom logic here
	};
</script>

<ul>
	{#each items as item (item.id)}
		<li use:drag={{ item, onDrag }}>
			<!-- Content of your item -->
			<h1>{item.name}</h1>
			<p>{item.description}</p>
		</li>
	{/each}
</ul>`}
</pre>
</div>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  In this example, the drag function from 'svelte-dropit' is employed to enable
  drag-and-drop functionality for each list item. The onDrag callback function
  provides a way to execute custom logic when an item is being dragged. This
  allows for a seamless integration of drag-and-drop behavior into your Svelte
  components, enhancing user interaction within your application.
</p>

<h2 class="font-josefin text-indigo-800 dark:text-indigo-300 text-3xl mb-4">
  Dropping Items
</h2>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  To handle the drop action, use the drop function:
</p>

<div
  class="container w-full p-4 bg-gray-800 rounded-xl overflow-x-auto text-white mb-4"
>
  <pre>
{`<script>
	import { drop } from 'svelte-dropit';

	const onDrop = (colName, item) => {
		// Callback function when an item is dropped
		// You can update the item's column or perform any other action
		console.log(item, colName);
	};
</script>

<ul use:drop={{ colName: 'yourColName', onDrop }}>
	<!-- Droppable area content -->
</ul>`}
</pre>
</div>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Make sure to replace 'yourColName' with the appropriate column name.
</p>

<div class="w-full my-12 flex flex-row justify-between rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/installation" ? "page" : undefined}
      href="{base}/installation"
      class="relative flex justify-between items-center z-10 pl-4 pr-5 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      <span class="mr-3">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15"
          height="15"
        >
          <path
            d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"
          />
        </svg>
      </span>
      Installation
    </a>
  </div>

  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/video-tutorial"
        ? "page"
        : undefined}
      href="{base}/video-tutorial"
      class="relative flex justify-between items-center z-10 pl-5 pr-4 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      Video tutorial
      <span class="ml-3">
        <svg
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="15"
          height="15"
        >
          <path
            d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"
          />
        </svg>
      </span>
    </a>
  </div>
</div>
