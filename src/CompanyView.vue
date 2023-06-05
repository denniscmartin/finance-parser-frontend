<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
   name: "CompanyView",
   props: ['ticker', 'type', 'year'],
   data() {
      return {
         accounts: [],
         format: ''
      }
   },
   mounted() {
      this.getReport()
   },
   methods: {
      getReport() {
         const url = import.meta.env.VITE_API_URL
         axios
             .get(url + '/report?ticker=' + this.ticker + '&type=' + this.type + '&year=' + this.year)
             .then(response => {
                this.accounts = response['data']['message']['items']
             })
             .catch(error => {
                console.log(error)
             })
      }
   }
})
</script>

<template>
   <div class="container">
      <div class="mt-5">
         <p>Company ticker: {{ this.ticker }}</p>
         <p>Report type: {{ this.type }}</p>
         <p>Year: {{ this.year }}</p>
      </div>
      <table class="table mt-3">
         <thead>
         <tr>
            <th scope="col">Account name</th>
            <th scope="col">Value</th>
            <th scope="col">Type</th>
            <th scope="col">Format</th>
         </tr>
         </thead>
         <tbody>
         <tr v-for="account in accounts">
            <td>{{ account['account_name'] }}</td>
            <td>{{ account['account_value'] }}</td>
            <td>{{ account['column_types'] }}</td>
            <td>{{ account['format'] }}</td>
         </tr>
         </tbody>
      </table>
   </div>
</template>

<style scoped>

</style>