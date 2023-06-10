<script>
import {defineComponent} from 'vue'
import CompaniesTable from "@/components/CompaniesTable.vue";

export default defineComponent({
   name: "HomeView",
   components: {CompaniesTable}
})
</script>

<template>
   <div class="container my-5">
      <p>hey, it's the finance parser. your crypto bro friend who is always talking about how easy is to get rich.
         this project was developed by me (Dennis). it's a serverless finance parser using a machine learning service
         by AWS called Textract. check out my <a href="https://youtube.com/@denniscmartin" target="_blank">youtube</a>
         channel, the development process is documented there.</p>
      <p>
         Project code: <br>
         - Frontend: <a href="https://github.com/denniscmartin/finance-parser-frontend" target="_blank">Link</a><br>
         - Backend: <a href="https://github.com/denniscmartin/finance-parser" target="_blank">Link</a>
      </p>

      <CompaniesTable/>
   </div>
</template>