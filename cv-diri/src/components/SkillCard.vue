<script setup>
const props = defineProps({
    nama: String,
    level: String
})

const ikonMap = {
    'HTML': 'devicon-html5-plain colored',
    'CSS': 'devicon-css3-plain colored',
    'JS': 'devicon-javascript-plain colored',
    'VueJS': 'devicon-vuejs-plain colored',
}

const ikonClass = ikonMap[props.nama] ?? null
</script>

<template>
    <div class="skill-card">
        <i v-if="ikonClass" :class="ikonClass" class="skill-icon"></i>
        <h3>{{ nama }}</h3>
        <span v-if="level === 'Mahir'" class="badge badge--mahir">Mahir</span>
        <span v-else class="badge badge--pelajar">Pelajar</span>
    </div>
</template>

<style scoped>
.skill-card {
    padding: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 12px;
}

.skill-icon {
    font-size: 40px;
    display: block;
    margin-bottom: 8px;
}

.badge {
    padding: 4px 10px;
    border-radius: 8px;
    font-size: 0.85rem;
}

.badge--mahir {
    background-color: #d4edda;
    color: #155724;
}

.badge--pelajar {
    background-color: #d1ecff;
    color: #192325;
}
</style>
