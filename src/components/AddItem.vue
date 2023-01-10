<template>
  <div>
    <input id="insertaElemento" v-model="taskInput" type="text" placeholder="Introduce algo a la lista..." />
    <button @click="insertarElemento">Añadir</button>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    newTask: String
  },
  methods: {
    insertarElemento() {
      alert('Se desea insertar un elemento en la lista')
    }
  }
}
</script>