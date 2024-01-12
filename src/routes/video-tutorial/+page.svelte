<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Video tutorial</title>
  <meta name="Video tutorial" content="A quick video get started with DropIt" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  Video tutorial
</h1>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  This video tutorial serves as a comprehensive guide to introduce the "DropIt"
  library, providing step-by-step instructions on its installation,
  configuration, and usage within a Svelte application. Whether you're a
  beginner looking to explore the basics or an experienced developer seeking a
  deeper understanding of the library's capabilities, this tutorial covers key
  aspects such as library setup, integration into Svelte components, and
  practical examples of drag-and-drop functionality. Follow along to gain
  insights into effectively incorporating "DropIt" into your projects, enabling
  you to enhance user interactions through intuitive and seamless drag-and-drop
  features.
</p>

<div
  class="relative max-w-screen-md w-full left-8 overflow-hidden shadow-lg rounded-3xl mb-8"
>
  <div class="relative" style="padding-bottom: 56.25%;">
    <iframe
      class="absolute top-0 left-0 w-full h-full rounded-3xl"
      src="https://www.youtube.com/embed/H0wHx_ID_vo?si=yxB0wq2vntrzaaND"
      frameborder="0"
      allowfullscreen
    ></iframe>
  </div>
</div>

<div class="w-full my-12 flex flex-row justify-start rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/setup" ? "page" : undefined}
      href="{base}/setup"
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
      Setup
    </a>
  </div>
</div>
