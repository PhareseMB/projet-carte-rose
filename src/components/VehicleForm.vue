<template>
  <div class="max-w-lg mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6">Formulaire de véhicule</h2>
    <form @submit.prevent="submitForm" class="space-y-4">
      <div>
        <label for="nomAssure" class="block text-sm font-medium text-gray-700">Nom et adresse de l'assuré:</label>
        <input type="text" id="nomAssure" v-model="form.nomAssure" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="immatriculation" class="block text-sm font-medium text-gray-700">Immatriculation:</label>
        <input type="text" id="immatriculation" v-model="form.immatriculation" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="marque" class="block text-sm font-medium text-gray-700">Marque et type:</label>
        <input type="text" id="marque" v-model="form.marque" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="assureur" class="block text-sm font-medium text-gray-700">Assureur:</label>
        <input type="text" id="assureur" v-model="form.assureur" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="bureauEmetteur" class="block text-sm font-medium text-gray-700">Bureau émetteur:</label>
        <input type="text" id="bureauEmetteur" v-model="form.bureauEmetteur" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="dateDebut" class="block text-sm font-medium text-gray-700">Date de début:</label>
        <input type="date" id="dateDebut" v-model="form.dateDebut" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="dateFin" class="block text-sm font-medium text-gray-700">Date de fin:</label>
        <input type="date" id="dateFin" v-model="form.dateFin" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="usage" class="block text-sm font-medium text-gray-700">Usage ou catégorie du véhicule:</label>
        <input type="text" id="usage" v-model="form.usage" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="numeroPolice" class="block text-sm font-medium text-gray-700">Numéro de police:</label>
        <input type="text" id="numeroPolice" v-model="form.numeroPolice" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="policeOriginale" class="block text-sm font-medium text-gray-700">Police originale:</label>
        <input type="text" id="policeOriginale" v-model="form.policeOriginale" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="nomAdresseAssurance" class="block text-sm font-medium text-gray-700">Nom et adresse de la société d'assurance:</label>
        <input type="text" id="nomAdresseAssurance" v-model="form.nomAdresseAssurance" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <div>
        <label for="numeroChassis" class="block text-sm font-medium text-gray-700">Numéro du châssis ou du moteur:</label>
        <input type="text" id="numeroChassis" v-model="form.numeroChassis" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" required />
      </div>
      <button type="submit" class="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700">Soumettre</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nomAssure: '',
        immatriculation: '',
        marque: '',
        assureur: '',
        bureauEmetteur: '',
        dateDebut: '',
        dateFin: '',
        usage: '',
        numeroPolice: '',
        policeOriginale: '',
        nomAdresseAssurance: '',
        numeroChassis: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.$emit('formSubmitted', { ...this.form });
      this.resetForm();
    },
    resetForm() {
      this.form = {
        nomAssure: '',
        immatriculation: '',
        marque: '',
        assureur: '',
        bureauEmetteur: '',
        dateDebut: '',
        dateFin: '',
        usage: '',
        numeroPolice: '',
        policeOriginale: '',
        nomAdresseAssurance: '',
        numeroChassis: ''
      };
    }
  }
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires ici si nécessaire */
</style>
