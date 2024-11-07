<script>
  import Main from "./Main.svelte";
import Plus from "./Plus.svelte";
 import autoAnimate from "@formkit/auto-animate"
  export let question;
  export let answer;
  let active;
  let isActive = true;
  let handleActive = () => {
    active = !active;
  }
  let handleIactive = () => {
    isActive = !isActive;
  }
  
</script>

<div class="mt-12 space-y-8">
  <div class="border-2 border-gray-100 rounded-lg dark:border-gray-700" use:autoAnimate>
    <button class="flex items-center justify-between w-full p-8"  on:keydown={handleActive} on:click={handleIactive} tabindex="0" on:click={handleActive}>
      <h1 class="font-semibold text-left text-gray-700 dark:text-white">{question}</h1>
    {#if isActive}
      <Plus />
      {/if}
      {#if !isActive}
      <Main />
      {/if}

    </button>
    {#if active}
    <hr class="border-gray-200 dark:border-gray-700" />

    <p class="p-8 text-sm text-gray-500 dark:text-gray-300">
      {answer}
    </p>
    {/if}
  </div>
</div>
