<script setup>
import { useStoryblok } from "@storyblok/vue";

const story = await useStoryblok("beasts", { version: "draft", resolve_relations: ["BeastPage.beasts"] });
</script>

<template>
    <main>
      <StoryblokComponent v-if="story" :blok="story.content" /> 
    </main>
</template>
