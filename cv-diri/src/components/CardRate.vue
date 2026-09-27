<script setup>
    const props = defineProps({
        id: Number,
        name: String,
        price: Number,
    })


    const  emit = defineEmits(['add-to-cart'])


    function handleAddToCart() {
        emit('add-to-cart', props.id)
    }
</script>

<template>
    <div class="rate-card">
        <h3>{{ name }}</h3>
        <p>Price: Rp.{{ price.toLocaleString('id-ID') }}</p>
        <button @click="handleAddToCart">Add To Cart</button>
    </div>
</template>

<style scoped>


.rate-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin: 16px;
    width: 200px;
    text-align: center;
}
.rate-card h3 {
    margin-top: 0;
}
.rate-card p {
    color: #555;
}
.rate-card button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 8px 16px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 4px;
}
.rate-card button:hover {
    background-color: #45a049;
}

</style>