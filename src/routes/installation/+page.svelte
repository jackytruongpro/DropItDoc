<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  const dropItImport = "import DropIt from 'dropit-svelte';";
</script>

<svelte:head>
  <title>Installation</title>
  <meta name="Installation" content="Get started" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  Installation
</h1>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  To integrate DropIt into your Svelte project, you'll first need to install the
  library as a dependency. Open your terminal and run the following command
  within your Svelte project directory:
</p>

<div
  class="container w-full p-4 bg-gray-800 rounded-xl overflow-x-auto mb-4 text-white"
>
  <code>npm install svelte-dropit</code>
</div>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  This command fetches the DropIt library from the npm registry and installs it
  in your project.
</p>

<h2 class="font-josefin text-indigo-800 dark:text-indigo-300 text-3xl mb-4">
  Importing DropIt into your Svelte Components:
</h2>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Once installed, you can import DropIt into your Svelte components where you
  want to incorporate Drag and Drop functionality. In your Svelte component
  file, include the following import statement:
</p>

<div
  class="container w-full p-4 bg-gray-800 rounded-xl overflow-x-auto mb-4 text-white"
>
  <code>{dropItImport}</code>
</div>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Now that DropIt is successfully imported, you can use its various components,
  such as Draggable and Droppable, to implement a seamless and customizable Drag
  and Drop experience in your Svelte application. Refer to the DropIt
  documentation for detailed usage and customization instructions.
</p>

<div class="w-full my-12 flex flex-row justify-between rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/demo" ? "page" : undefined}
      href="{base}/demo"
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
      Demo
    </a>
  </div>

  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/setup" ? "page" : undefined}
      href="{base}/setup"
      class="relative flex justify-between items-center w-32 z-10 pl-5 pr-4 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      Setup
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
