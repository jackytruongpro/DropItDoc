<script>
    import { page } from '$app/stores';
    import github from '$lib/images/github.svg';
    import logoClear from '$lib/images/logo-clear.png'
</script>

<aside class="fixed flex flex-col w-64 h-screen left-0 px-5 py-8 overflow-y-auto bg-indigo-50 border-r rounded-r-2xl rtl:border-r-0 rtl:border-l dark:bg-slate-950 dark:border-gray-700">
    <a href="#">
        <img class="w-auto h-11" src="{logoClear}" alt="">
    </a>

    <div class="flex flex-col justify-between flex-1 mt-6">
        <nav class="-mx-3 space-y-6 ">
            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">introduction</label>

                <a aria-current={$page.url.pathname === '/' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>

                    <span class="mx-2 text-base font-lato">Overview</span>
                </a>

                <a aria-current={$page.url.pathname === '/whats-new' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/whats-new">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>

                    <span class="mx-2 text-base font-lato">What's new ?</span>
                </a>
            </div>

            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">Getting started</label>

                <a aria-current={$page.url.pathname === '/installation' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/installation">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12.8V2.5"/>
                    </svg>

                    <span class="mx-2 text-base font-lato">Installation</span>
                </a>

                <a aria-current={$page.url.pathname === '/setup' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/setup">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>
                    </svg>
                    <span class="mx-2 text-base font-lato">Setup</span>
                </a>
            </div>

            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">Components</label>

                <a aria-current={$page.url.pathname === '#' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span class="mx-2 text-base font-lato">Component 1</span>
                </a>

                <a aria-current={$page.url.pathname === '#' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>

                    <span class="mx-2 text-base font-lato">Component 2</span>
                </a>
            </div>

            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">Styles</label>

                <a aria-current={$page.url.pathname === '/styling' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/styling">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="16 3 21 8 8 21 3 21 3 16 16 3"></polygon>
                    </svg>

                    <span class="mx-2 text-base font-lato">Styling</span>
                </a>

                <a aria-current={$page.url.pathname === '/customizing' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/customizing">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
                    </svg>

                    <span class="mx-2 text-base font-lato">Customizing</span>
                </a>
            </div>

            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">Resources</label>

                <a aria-current={$page.url.pathname === '/video-tutorial' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/video-tutorial">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"/>
                    </svg>

                    <span class="mx-2 text-base font-lato">Video tutorial</span>
                </a>
            </div>

            <div class="space-y-2 ">
                <label class="px-3 text-base font-josefin text-indigo-800 uppercase dark:text-indigo-300">Versions</label>

                <div class="mx-3 p-1 bg-indigo-100 dark:bg-blue-950 rounded-lg max-h-52 overflow-y-auto">
                    <a class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.6</span>
                    </a>

                    <a class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.5</span>
                    </a>

                    <a class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.4</span>
                    </a>

                    <a class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.3</span>
                    </a>

                    <a aria-current={$page.url.pathname === '/versions/v.0.0.2' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/versions/v.0.0.2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.2</span>
                    </a>

                    <a aria-current={$page.url.pathname === '/versions/v.0.0.1' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/versions/v.0.0.1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.1</span>
                    </a>

                    <a aria-current={$page.url.pathname === '/versions/v.0.0.0' ? 'page' : undefined} class="flex items-center px-3 py-1 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-200 hover:bg-indigo-200 dark:hover:bg-blue-900 dark:hover:text-gray-200 hover:text-gray-700 hover:no-underline" href="/versions/v.0.0.0">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l9 4.9V17L12 22l-9-4.9V7z"/></svg>
                        <span class="mx-2 text-base font-lato">v.0.0.0</span>
                    </a>

                </div>

            </div>

        </nav>
    </div>

<!--    <footer class="flex flex-col justify-center items-center p-3 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-blue-950 dark:hover:text-gray-200 hover:text-gray-700">-->
<!--        <p>visit <a href="https://kit.svelte.dev" class="font-bold">kit.svelte.dev</a> to learn SvelteKit</p>-->
<!--    </footer>-->
</aside>
