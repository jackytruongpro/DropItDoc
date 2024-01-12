<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1 class="font-josefin text-indigo-800 dark:text-indigo-300 text-5xl mb-8">
  Overview
</h1>
<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50">
  DropIt is a Svelte library designed to simplify one of the most complex
  functionalities on the web: Drag and Drop. Our project originated from an
  ambition to fill a gap in the realm of Drag and Drop libraries. Indeed, by
  collaborating on this project, we integrated the best features of existing
  libraries to create DropIt: a versatile, intuitive, and highly customizable
  solution.
</p>

<div
  class="w-full bg-indigo-200 my-8 p-4 text-white flex items-center rounded-xl"
>
  <svg
    class="w-6 h-6 mr-2"
    clip-rule="evenodd"
    fill-rule="evenodd"
    stroke-linejoin="round"
    stroke-miterlimit="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    ><path
      fill="#3730a3"
      d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 6.5c-.414 0-.75.336-.75.75v5.5c0 .414.336.75.75.75s.75-.336.75-.75v-5.5c0-.414-.336-.75-.75-.75zm-.002-3c.552 0 1 .448 1 1s-.448 1-1 1-1-.448-1-1 .448-1 1-1z"
      fill-rule="nonzero"
    /></svg
  >
  <p class="font-lato text-indigo-800">
    The library is currently under development and functionality is limited.
  </p>
</div>

<!--<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50">-->
<!--	Integer pellentesque <span class="bg-indigo-100 dark:bg-indigo-300 py-1 px-1 mx-1 rounded-md text-indigo-600 dark:text-indigo-700">vulputate</span> massa vel vehicula. Quisque odio velit, pharetra sed ultricies vel, euismod eu turpis. Aenean et accumsan nisi. Suspendisse in iaculis mauris. Duis venenatis rutrum lectus vitae lobortis. Sed placerat eu diam in venenatis. Morbi nulla velit, imperdiet quis felis nec, volutpat pretium lectus. Sed neque libero, efficitur eget est vel, viverra tempus nisi. Cras pharetra velit leo, in consequat sapien luctus rutrum. Phasellus tristique magna et eros molestie tincidunt. Aliquam placerat lorem sem, sed euismod augue dapibus ac.-->
<!--</p>-->

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  With DropIt, the Drag and Drop experience complements what was missing in the
  rising framework, Svelte. An ergonomic user interface, advanced customization,
  and performance optimization provide users with the ability to produce
  ambitious projects akin to the well-known web applications such as Trello or
  JIRA by Atlassian.
</p>

<h2 class="font-josefin text-indigo-800 dark:text-indigo-300 text-3xl mb-4">
  How we started
</h2>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  In a society increasingly turning to technology for everything, from task
  management to virtual meetings, we've developed DropIt, the Svelte library
  that makes intuitive organization as simple as drag and drop.
</p>

<h3 class="font-josefin text-indigo-800 dark:text-indigo-300 text-xl mb-4">
  The Significance of Drag and Drop in Digital Organization
</h3>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  In a world filled with screens and online collaborations, how we organize our
  ideas and tasks is crucial. DropIt fits seamlessly into this context,
  providing a smooth and efficient drag-and-drop experience to simplify daily
  management.
</p>

<h2 class="font-josefin text-indigo-800 dark:text-indigo-300 text-3xl mb-6">
  Key Advantages of DropIt
</h2>

<h3 class="font-josefin text-indigo-800 dark:text-indigo-300 text-xl mb-4">
  Efficient
</h3>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Fast and robust, DropIt can handle a multitude of draggable elements and drop
  zones (areas where draggable elements can be deposited).
</p>

<h3 class="font-josefin text-indigo-800 dark:text-indigo-300 text-xl mb-4">
  Customizable
</h3>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Tailor your interface to your specific needs, creating a digital environment
  that aligns perfectly with your work style.
</p>

<h3 class="font-josefin text-indigo-800 dark:text-indigo-300 text-xl mb-4">
  Scalable
</h3>

<p class="text-base font-lato leading-8 text-gray-900 dark:text-indigo-50 mb-8">
  Designed for easy scalability over time, DropIt can meet numerous expectations
  and evolve to accommodate various needs.
</p>

<div class="w-full my-12 flex flex-row justify-end rounded-xl">
  <div class="relative">
    <div
      class="absolute inset-0 bg-transparent border-dashed border-indigo-900 dark:border-white rounded-md"
      style="border-width: 3px"
    ></div>
    <a
      aria-current={$page.url.pathname === "/whats-new" ? "page" : undefined}
      href="{base}/whats-new"
      class="relative flex justify-between items-center z-10 pl-5 pr-4 py-2 font-lato text-indigo-900 rounded-lg bg-transparent border-dashed border-indigo-900 dark:text-white dark:border-white transform transition-transform hover:translate-x-[10px] hover:translate-y-[-10px] hover:text-white hover:border-transparent hover:bg-indigo-900 hover:no-underline"
      style="border-width: 3px"
    >
      What's new ?
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
