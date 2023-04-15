<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <va-navbar>
    <template #right>
      <va-navbar-item class="navbar-item-slot">
        <RouterLink to="/">Home</RouterLink>
      </va-navbar-item>
    </template>
  </va-navbar>
  <Suspense>
    <div class="container">
      <RouterView />
    </div>
    <template #fallback>
      Loading...
    </template>
  </Suspense>
</template>

