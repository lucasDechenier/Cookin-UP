<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingrediente: { type: String, required: true }
  },
  emits: ['adicionarIngrediente', 'removerIngrediente'],
  data() {
    return {
      selecionado: false
    }
  },
  methods: {
    aoClicar() {
      this.selecionado = !this.selecionado

      if (this.selecionado) {
        this.$emit('adicionarIngrediente', this.ingrediente)
      } else {
        this.$emit('removerIngrediente', this.ingrediente);
      }
    }
  }
}
</script>

<template>
  <button
    class="ingrediente"
    :aria-pressed="selecionado"
    @click="aoClicar"
  >
    <Tag :texto="ingrediente" :ativa="selecionado" />
  </button>
</template>

<style scoped>
.ingrediente {
  cursor: pointer;
}
</style>