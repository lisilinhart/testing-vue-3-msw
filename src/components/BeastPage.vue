<template>
  <div v-editable="blok" class="px-6">
    <h1 class="va-h3 va-text-center">{{ blok.title }}</h1>

    <div class="cards">
      <router-link class="card" :to="`/beast/${beast.slug}`" v-for="beast in blok.beasts" :key="beast.id">
      <va-card  color="secondary" gradient>
        <va-image :src="getImageUrl(beast.content.image.filename)"
          :alt="beast.content.image.alt" style="height: 300px;" />
          <va-card-title>{{ beast.content.name }}</va-card-title>
        <va-card-content>
          {{ beast.content.description }}
        </va-card-content>
      </va-card>
      </router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({ blok: Object });

const getImageUrl = (filename) => {
  return filename + '/m/300x300';
};
</script>

<style>
.cards {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 50px;
  align-items: center;
}

.card {
  overflow: hidden;
  flex: 1;
  border-radius: 16px;
}
</style>