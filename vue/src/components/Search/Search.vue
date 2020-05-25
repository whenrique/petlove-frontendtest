<template>
  <form action="POST" class="form__wrapper" @submit.prevent="$emit('search-cep', cep)">
    <input type="text" name="cep" id="cep" placeholder="00000-000" class="form__input" v-model.trim="cep">
    <button type="submit" class="form__button">Buscar CEP</button>
    <p class="form__message form__message--error" v-if="error">{{ error.message }}</p>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      cep: null
    }
  },
  props: {
    error: {
      type: Object,
      default: null
    }
  },
}
</script>

<style lang="scss" scoped>
  .form {
    &__wrapper {
      font-size: 1.6rem;
      padding: 16px;
      max-width: 430px;
      margin: auto;
      margin-bottom: 8px;
      background-color: #ffffff;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      > * {
        margin-right: 8px;
        margin-left: 8px;
      }
    }

    &__input {
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      padding: 8px;
    }
    &__button {
      border: 1px solid #f0f0f0;
      padding: 8px;
      border-radius: 8px;
      background-color: #000000;
      color: #ffffff;
    }
    &__message {
      width: 100%;

      &--error {
        color: red;
        text-align: center;
        margin-top: 8px;
      }
    }
  }
</style>
