<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>What's New ?</title>
  <meta name="What's new ?" content="Some awesome new features" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  What's New ?
</h1>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-4">
  We're excited to share the latest developments in the "DropIt" Svelte library
  on this page ! As of now, we've reached version <span
    class="bg-indigo-100 dark:bg-indigo-300 py-1 px-1 mx-1 rounded-md text-indigo-600 dark:text-indigo-700"
    >v.0.1.1</span
  >. While this version may not boast an extensive list of features just yet,
  it's a testament to the ongoing development and commitment to building a
  robust and user-friendly library.
</p>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-4">
  At this early stage, we're actively working behind the scenes to enhance and
  expand the capabilities of "DropIt." Anticipate <span
    class="bg-indigo-100 dark:bg-indigo-300 py-1 px-1 mx-1 rounded-md text-indigo-600 dark:text-indigo-700"
    >upcoming releases</span
  > that will introduce new features, improvements, and optimizations to provide
  a more powerful and seamless experience.
</p>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-4">
  We value your input! We encourage you to share your thoughts, suggestions, and
  ideas for improvement. Your feedback plays a crucial role in shaping the
  future of "DropIt," and we're grateful for your involvement as we strive to
  create a top-notch drag-and-drop solution.
</p>

<p
  class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-84"
>
  Stay tuned for updates, and thank you for being a part of the "DropIt"
  journey!
</p>

<div class="w-full my-12 flex flex-row justify-between rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/" ? "page" : undefined}
      href="{base}/"
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
      Overview
    </a>
  </div>

  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/demo" ? "page" : undefined}
      href="{base}/demo"
      class="relative flex justify-between items-center w-32 z-10 pl-5 pr-4 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      Demo
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
