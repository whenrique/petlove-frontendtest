const express = require('express')
const router = express.Router()
const dotenv = require('dotenv')
const { NOT_FOUND } = require('../utils/constants')
dotenv.config()

const request = require('../utils/request')
const { VIACEP_API } = process.env

router.get('/viacep/:cep', (req, res, next) => {
  const { cep: searchedCep } = req.params
  request(`${VIACEP_API}/${searchedCep}/json`)
    .then(({ data }) => {
      const {
        cep,
        logradouro,
        localidade,
        uf,
        erro
      } = data

      if (erro) {
        throw new Error(NOT_FOUND)
      }

      res.status(200).json({
        cep,
        logradouro,
        localidade,
        uf
      })
    })
    .catch(err => {
      res.status(404).json({
        error: true,
        message: NOT_FOUND
      })
      next(err)
    })
})

module.exports = router
