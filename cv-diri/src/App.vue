<script setup>
import { ref } from 'vue'
import SkillCard from './components/SkillCard.vue'
import CardRate from './components/CardRate.vue'
import { useSkill } from '@/composables/useSkill'

const { daftarSkill } = useSkill()

const gambarProfil = ref('/public/coachliq.jpeg')

const daftarRate = ref([
  { id: 1, nama: 'Profile Web Perusahaan', harga: 5000000},
  { id: 2, nama: 'E-commerce Web', harga: 10000000},
  { id: 3, nama: 'Blog Web', harga: 7000000}
])

const stok = ref(10)

function addToCart(id) {
  const item = daftarRate.value.find(item => item.id === id)
  if (item) {
    alert(`${item.nama} dengan harga Rp.${item.harga} telah ditambahkan ke keranjang`)
  }
}

const comment = ref('')

</script>

<template>
<!--  <h1>You did it!</h1>
  <p>
    Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
    documentation
  </p> 
    <img :src="gambarProfil" alt='Foto Profil'/>
    <a :class="{ aktif: linkAktif }" href="#">Beranda</a>
    
    <ul>
      <li v-for="item in skill" :key="item">
      {{ item }}
    </li>
  </ul>

  <p v-if="stok > 1">Stok Tersedia</p>
  <p v-else-if="stok === 1">Stok Tipis</p>
  <p v-else>Tidak Tersedia</p> -->


  <div class="skill-list">
    <SkillCard 
      v-for="skill in daftarSkill" 
      :key="skill.id"
      :nama="skill.nama"
      :level="skill.level"
    />
  </div>

  <div class="rate-list">
    <CardRate
      v-for="rate in daftarRate" 
      :id="rate.id"
      :name="rate.nama"
      :price="rate.harga"
      @add-to-cart="addToCart"
    />

  </div>

  <div class="comment">
    <h2>Comment</h2>
    <form>
      <textarea v-model="comment" placeholder="Tinggalkan komentar Anda"></textarea>
      <p>Preview: {{ comment }}</p>
    </form>
  </div>

</template>

<style scoped></style>
