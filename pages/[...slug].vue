<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const fullPath = "/" + (route.params.slug as string[]).join("/");
const page = items.find((item) => item.url === fullPath);
</script>

<template>
  <div v-if="page">
    <h1>{{ page.title }}</h1>
    <p>{{ page.description }}</p>
  </div>
  <div v-else>
    <h1>404 - Page Not Found</h1>
    <p>The requested page does not exist.</p>
  </div>
</template>
