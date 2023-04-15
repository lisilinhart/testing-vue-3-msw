<template>
    <div v-editable="blok" class="flex row beast">
        <div class="">
            <img :src="getImageUrl(blok.image.filename)" :alt="blok.image.alt"
                class="beast-image">
        </div>
        <div class="">
            <h1 class="va-h3">{{ blok.name }}</h1>

            <p class="va-spacing-x-5 beast-text">{{ blok.description }}</p>
            <div class="row justify-start align-start beast-content">
                <div class="flex flex-col md7">
                    <h2 class="va-h4 beast-title">Skills</h2>
                    <ul>
                        <li v-for="skill in blok.skills" :key="skill._uid"
                            class="beast-skill">
                            <h4>{{ skill.name }}</h4>
                            <p>{{ skill.description }}</p>
                        </li>
                    </ul>
                </div>
                <div class="flex flex-col md5">
                    <h2 class="va-h4 beast-title">Habitat</h2>
                    <div>
                        <va-badge v-for="habitat in blok.habitat" :key="habitat"
                            class="beast-badge">
                            <va-button text-color="#fff" size="small">{{ habitat
                            }}</va-button>
                        </va-badge>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
defineProps({ blok: Object });

const getImageUrl = (filename) => {
    return filename + '/m/300x300';
};
</script>
  
<style scoped>
.beast {
    gap: 40px;
}

.beast-image {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

.beast-badge {
    margin-right: 10px;
    margin-bottom: 10px;
}

.beast-skill {
    margin-bottom: 20px;
}

.beast-title {
    margin-bottom: 10px;
}

.beast-content {
    margin-top: 20px;
}

.beast-text {
    max-width: 28em;
}
</style>