<template>
  <div>
    <Search v-on:search-cep="fetchAddress" :error="error" />
    <Address :address="address" />
  </div>
</template>

<script>
import Search from './components/Search/Search.vue'
import Address from './components/Address/Address.vue'
import request from './utils/request'
import { API, MESSAGES } from './utils/constants'
export default {
  name: 'App',
  components: {
    Search,
    Address
  },
  data () {
    return {
      address: null,
      error: null
    }
  },
  methods: {
    async fetchAddress (searchedCEP) {
      try {
        const {
          cep,
          localidade,
          uf,
          logradouro,
          error
        } = await request(`${API}/viacep/${searchedCEP}`)

        if (error) throw new Error(error.message)

        this.error = null
        this.address = {
          cep,
          localidade,
          uf,
          logradouro,
          error
        }
      } catch (error) {
        this.address = null
        this.error = {
          status: 404,
          message: MESSAGES.NOT_FOUND
        }
        return error
      }
    }
  }
}
</script>

<style>
  :root {
    font-size: 10px;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #f0f0f0;
    font-family: sans-serif;
  }
</style>
