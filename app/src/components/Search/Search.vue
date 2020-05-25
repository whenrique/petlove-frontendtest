<template>
  <form
    action="POST"
    class="form__wrapper"
    @submit.prevent="$emit('search-cep', { cep, $v })"
  >
    <input-mask mask="#####-###" type="tel" name="cep" id="cep" placeholder="00000-000" class="form__input" v-model.lazy="$v.cep.$model" @input="$emit('clean-error', null)" />
    <button type="submit" class="form__button">Buscar CEP</button>
    <p class="form__message form__message--error" v-if="error">{{ error.message }}</p>
    <p class="form__message form__message--error" v-if="!$v.cep.checkCEP">{{ invalidCEP }}</p>
    <p class="form__message form__message--error" v-if="!$v.cep.required && $v.cep.$error">{{ requiredCEP }}</p>
  </form>
</template>

<script>
import { TheMask } from 'vue-the-mask'
import { required, helpers } from 'vuelidate/lib/validators'
import { MESSAGES, CEP_REGEX } from '../../utils/constants'
const checkCEP = helpers.regex('cep', CEP_REGEX)

export default {
  name: 'Search',
  components: {
    'input-mask': TheMask
  },
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
  computed: {
    invalidCEP () {
      return MESSAGES.INVALID_CEP
    },
    requiredCEP () {
      return MESSAGES.REQUIRED
    }
  },
  validations: {
    cep: {
      required,
      checkCEP
    }
  }
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
        color: #721c24;
        text-align: center;
        margin-top: 8px;
      }
    }
  }
</style>
