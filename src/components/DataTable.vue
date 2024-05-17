<template>
    <div class="max-w-7xl mx-auto mt-10 p-8 bg-white rounded-lg shadow-md">
        <h2 class="text-2xl font-bold mb-6">Tableau des véhicules</h2>
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-800">
                    <tr>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nom et
                            adresse de l'assuré</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                            Immatriculation</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Marque
                            et type</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Assureur
                        </th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Bureau
                            émetteur</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date de
                            début</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date de
                            fin</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Usage ou
                            catégorie</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Numéro
                            de police</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Police
                            originale</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Nom et
                            adresse de la société d'assurance</th>
                        <th scope="col"
                            class="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Numéro
                            du châssis ou du moteur</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="(entry, index) in entries" :key="index" class="hover:bg-gray-100">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.nomAssure }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.immatriculation }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.marque }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.assureur }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.bureauEmetteur }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.dateDebut }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.dateFin }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.usage }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.numeroPolice }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.policeOriginale }}</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.nomAdresseAssurance }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{{ entry.numeroChassis }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        entries: {
            type: Array,
            required: true
        }
    }
};
</script>

<style scoped>
/* Ajoutez des styles supplémentaires ici si nécessaire */
</style>