<script>
import {defineComponent} from 'vue'
import axios from "axios";

export default defineComponent({
   name: "CompaniesTable",
   data() {
      return {
         companies: []
      }
   },
   mounted() {
      this.getTickers()
   },
   methods: {
      getTickers() {
         const url = import.meta.env.VITE_API_URL
         axios
             .get(url + '/tickers')
             .then(response => {
                for (const item of response['data']['message']['items']) {
                   const report = item.substring(item.lastIndexOf('#') + 1)
                   const ticker = item.substring(item.indexOf('#') + 1, item.lastIndexOf('#'))
                   const year = item.substring(0, item.indexOf('#'))
                   const url = '/company/' + ticker + "/" + report + "/" + year

                   this.companies.push({
                      "ticker": ticker,
                      "report": report,
                      "year": year,
                      "url": url
                   })
                }
             })
             .catch(error => {
                console.log(error)
             })

      }
   }
})
</script>

<template>
   <table class="table mt-5">
      <thead>
      <tr>
         <th scope="col">Ticker</th>
         <th scope="col">Report</th>
         <th scope="col">Year</th>
         <th scope="col">Link</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="company in companies">
         <th scope="row">{{ company['ticker'] }}</th>
         <td>{{ company['report'] }}</td>
         <td>{{ company['year'] }}</td>
         <td><router-link :to="company['url']">Link</router-link></td>
      </tr>
      </tbody>
   </table>
</template>
