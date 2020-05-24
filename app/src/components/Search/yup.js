import * as yup from 'yup'
import { MESSAGES, CEP_REGEX } from 'utils/constants'

const validationSchema = yup.object({
  cep: yup
    .string()
    .matches(CEP_REGEX, MESSAGES.INVALID_CEP)
    .required(MESSAGES.REQUIRED)
})

export default validationSchema
