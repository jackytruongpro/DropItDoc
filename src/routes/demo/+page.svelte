<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Customizing</title>
  <meta name="Customizing" content="Customize your interface" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  Demo
</h1>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  This is a demonstration showcasing the functionality of the drag-and-drop
  feature using the "DropIt" library in a Svelte application. In this example,
  we provide a simple implementation to enable users to drag and drop items
  within a list. The code illustrates the integration of the library, including
  the setup of drag events and a callback function for handling the drag action.
  Feel free to explore this demo to suit your specific use case.
</p>

<div
  class="relative left-6 max-w-screen-md w-full overflow-hidden shadow-lg rounded-xl"
>
  <iframe
    src="https://stackblitz.com/edit/svelte-kit?embed=1&file=README.md"
    width="100%"
    height="600px"
    frameborder="0"
    allowfullscreen="true"
    sandbox="allow-modals allow-forms allow-scripts allow-same-origin"
  ></iframe>
</div>

<div class="w-full my-12 flex flex-row justify-between rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/whats-new" ? "page" : undefined}
      href="{base}/whats-new"
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
      What's new ?
    </a>
  </div>

  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/installation" ? "page" : undefined}
      href="{base}/installation"
      class="relative flex justify-between items-center z-10 pl-5 pr-4 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      Installation
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
