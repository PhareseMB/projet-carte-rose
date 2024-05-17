<template>
  <div>
    <VehicleForm @formSubmitted="addEntry" />
    <DataTable :entries="entries" />
  </div>
</template>

<script>
import VehicleForm from './components/VehicleForm.vue';
import DataTable from './components/DataTable.vue';

export default {
  components: {
    VehicleForm,
    DataTable
  },
  data() {
    return {
      entries: []
    };
  },
  methods: {
    addEntry(entry) {
      this.entries.push(entry);
    }
  }
};
</script>

<style>
/* Ajoutez des styles supplémentaires ici si nécessaire */
</style>
