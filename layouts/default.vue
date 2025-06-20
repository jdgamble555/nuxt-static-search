<template>
  <main class="min-h-screen bg-gray-100 text-gray-800">
    <div class="flex flex-col items-center py-8">
      <img src="/bttf.webp" alt="Back to the Future man!" />
    </div>
    <div class="max-w-4xl mx-auto px-6">
      <slot />
    </div>
    <nav class="bg-white border-t border-gray-200 mt-12 py-8">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="text-xl font-bold text-blue-700 mb-4">
          Back to the Future Archive
        </h2>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <li>
            <NuxtLink to="/" class="hover:underline text-blue-600">
              Home
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/vehicles/delorean"
              class="hover:underline text-blue-600"
            >
              The DeLorean Time Machine
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/characters/marty"
              class="hover:underline text-blue-600"
            >
              Marty McFly
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/characters/doc-brown"
              class="hover:underline text-blue-600"
            >
              Doc Emmett Brown
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/timeline/hill-valley"
              class="hover:underline text-blue-600"
            >
              Hill Valley Timeline
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/tech/hoverboard"
              class="hover:underline text-blue-600"
            >
              Hoverboard Technology
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/characters/biff"
              class="hover:underline text-blue-600"
            >
              Biff Tannen's Antagonism
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/tech/flux-capacitor"
              class="hover:underline text-blue-600"
            >
              Flux Capacitor
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/timeline/1985-vs-2015"
              class="hover:underline text-blue-600"
            >
              1985 vs. 2015
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/events/enchantment-dance"
              class="hover:underline text-blue-600"
            >
              Enchantment Under the Sea Dance
            </NuxtLink>
          </li>
          <li>
            <NuxtLink
              to="/shop/merchandise"
              class="hover:underline text-blue-600"
            >
              Back to the Future Merchandise
            </NuxtLink>
          </li>
        </ul>
      </div>
    </nav>
  </main>
</template>
