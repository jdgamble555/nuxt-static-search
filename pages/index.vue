<script setup lang="ts">
const { query, results, search } = useSearch();
</script>

<template>

  <div class="p-6 max-w-xl mx-auto relative">
    <input
      type="text"
      v-model="query"
      @input="search"
      placeholder="Search Back to the Future..."
      class="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    />

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <ul
        v-if="query && results.length"
        class="absolute left-0 right-0 mt-2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg max-h-80 overflow-y-auto"
      >
        <li
          v-for="(item, index) in results"
          :key="index"
          class="hover:bg-gray-50 border-b border-gray-100 last:border-0"
        >
          <NuxtLink
            :to="item.url"
            class="block px-4 py-3 text-blue-600 font-medium"
          >
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </transition>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <p
        v-if="query && !results.length"
        class="absolute left-0 right-0 mt-2 z-50 bg-white border border-gray-200 rounded-lg shadow-lg px-4 py-3 text-center text-gray-500 italic"
      >
        No results found.
      </p>
    </transition>
  </div>
</template>
