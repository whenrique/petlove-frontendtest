export const API = 'http://localhost:9000/api'

export const CEP_REGEX = /^[0-9]{5}-?[0-9]{3}$/g

export const MESSAGES = {
  INVALID_CEP: 'CEP inválido. Por favor, tente novamente.',
  REQUIRED: 'O campo CEP é obrigatório.',
  NOT_FOUND: 'CEP solicitado não encontrado. Tente novamente.',
  DEFAULT: 'Houve um erro. Tente novamente.'
}
