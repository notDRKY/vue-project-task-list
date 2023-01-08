<template>
  <button @click="delList">Borrar toda la lista</button>
</template>

<script>
  export default {
    methods: {
      delList() {
        alert('Se desea eliminar este elemento de la lista')
      }
    },
    name: 'DelAll',
  }
</script>