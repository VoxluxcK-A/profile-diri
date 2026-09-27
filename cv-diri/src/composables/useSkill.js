import { ref } from 'vue'

export function useSkill() {
    const daftarSkill = ref([
        { id: 1, nama: 'HTML', level: 'Mahir' },
        { id: 2, nama: 'CSS', level: 'Mahir' },
        { id: 3, nama: 'JS', level: 'Mahir' },
        { id: 4, nama: 'VueJS', level: 'Pelajar' }
    ])

    return { daftarSkill }
}