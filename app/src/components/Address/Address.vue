<template>
  <div v-if="address" class="address__wrapper">
    <p class="address__text"><span class="address__prefix">CEP:</span> {{address.cep}}</p>
    <p class="address__text"><span class="address__prefix">Cidade:</span> {{address.localidade}}</p>
    <p class="address__text"><span class="address__prefix">Estado:</span> {{address.uf}}</p>
    <p class="address__text"><span class="address__prefix">Logradouro:</span> {{address.logradouro}}</p>
  </div>
</template>

<script>
export default {
  name: 'Address',
  props: {
    address: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
  .address {
    &__wrapper {
      font-size: 1.4rem;
      padding: 16px;
      max-width: 430px;
      margin: auto;
      background-color: #ffffff;
    }
    &__text {
      font-weight: 300;
    }
    &__prefix {
      font-weight: 800;
    }
  }
</style>
