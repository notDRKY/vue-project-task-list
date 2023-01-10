<template>
  <button @click="delList">Borrar toda la lista</button>
</template>

<script>
  export default {
    methods: {
      delList() {
        alert('Se desea eliminar esta lista')
      }
    },
    name: 'DelAll',
  }
</script>