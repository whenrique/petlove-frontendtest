import React from 'react'
import PropTypes from 'prop-types'
import { useFormik } from 'formik'
import validationSchema from './yup'
import * as s from './style'

const Search = ({ onSearch, error, errorMsg }) => {
  const handleCep = ({ cep }) => {
    onSearch(cep)
  }

  const formik = useFormik({
    initialValues: {
      cep: ''
    },
    validationSchema,
    onSubmit: (fields, { resetForm }) => {
      handleCep(fields)
      resetForm()
    }
  })

  return (
    <s.Form onSubmit={formik.handleSubmit}>
      <s.Input type="text" name="cep" id="cep" placeholder="00000-000" onChange={formik.handleChange} mask="99999-999" />
      <s.Button type="submit">Buscar CEP</s.Button>
      {(formik.errors.cep && formik.touched.cep) && (
        <s.Error>{formik.errors.cep}</s.Error>
      )}
      {(error && errorMsg) && (
        <s.Error>{errorMsg}</s.Error>
      )}
    </s.Form>
  )
}

Search.propTypes = {
  onSearch: PropTypes.func,
  error: PropTypes.bool,
  errorMsg: PropTypes.string
}

export default Search
