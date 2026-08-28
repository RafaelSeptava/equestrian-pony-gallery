<!-- src/lib/components/Footer.svelte -->

<script lang="ts">
</script>

<footer
  class="border-t border-white/10 bg-(--theme-card) px-4 py-5 text-center text-xs"
>
  <p class="text-xl">Created by Rafael Septava</p>

  <nav aria-label="Social Media" class="mt-3">
    <ul
      class="m-0 flex items-center justify-center space-x-3 p-0 list-none text-xs font-semibold"
    >
      <li>
        <a
          href="https://www.instagram.com/rafaelseptava"
          target="_blank"
          rel="noopener noreferrer"
          class="opacity-90 transition-colors duration-200 hover:opacity-100 focus:outline-none focus:underline"
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
          class="opacity-90 transition-colors duration-200 hover:opacity-100 focus:outline-none focus:underline"
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
          class="opacity-90 transition-colors duration-200 hover:opacity-100 focus:opacity-100 focus:outline-none focus:underline"
        >
          LinkedIn
        </a>
      </li>
    </ul>
  </nav>
</footer>
