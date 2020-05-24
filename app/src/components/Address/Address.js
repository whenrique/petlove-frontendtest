import React from 'react'
import PropTypes from 'prop-types'
import * as s from './style'

const Address = ({ address }) => (
  <s.Wrapper>
    <s.Text>
      <s.Prefix>CEP:</s.Prefix> {address.cep}
    </s.Text>
    <s.Text>
      <s.Prefix>Bairro:</s.Prefix> {address.bairro}
    </s.Text>
    <s.Text>
      <s.Prefix>Cidade:</s.Prefix> {address.localidade}
    </s.Text>
    <s.Text>
      <s.Prefix>Logradouro:</s.Prefix> {address.logradouro}
    </s.Text>
  </s.Wrapper>
)

Address.propTypes = {
  address: PropTypes.object
}

export default Address
