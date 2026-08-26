<!-- Footer.svelte -->

<script lang="ts">
  export let cardColor: string;
</script>

<footer
  class="border-t border-white/10 px-4 py-5 text-center text-xs opacity-70"
  style={`background-color: ${cardColor};`}
>
  <p class="text-xl">Created by Rafael Septava</p>

  <nav aria-label="Social Media" class="mt-3">
    <ul
      class="flex items-center justify-center space-x-3 text-xs font-semibold p-0 m-0 list-none"
    >
      <li>
        <a
          href="https://www.instagram.com/rafaelseptava"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors duration-200 hover:opacity-100 opacity-90 focus:outline-none focus:underline"
        >
          Instagram
        </a>
      </li>
      <li class="select-none opacity-40" aria-hidden="true">•</li>
      <li>
        <a
          href="https://github.com/RafaelSeptava"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors duration-200 hover:opacity-100 opacity-90 focus:outline-none focus:underline"
        >
          GitHub
        </a>
      </li>
      <li class="select-none opacity-40" aria-hidden="true">•</li>
      <li>
        <a
          href="https://linkedin.com/in/rafael-septava-254125328"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors duration-200 hover:opacity-100 opacity-90 focus:outline-none focus:underline"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </nav>
</footer>
