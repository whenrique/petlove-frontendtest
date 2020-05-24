import React, { useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import GlobalStyle from 'utils/global-style'
import Search from 'components/Search/Search'
import Address from 'components/Address'
import request from 'utils/request'
import { API, MESSAGES } from 'utils/constants'

const App = () => {
  const [cep, setCep] = useState(null)
  const [address, setAddress] = useState(null)
  const [error, setError] = useState(null)
  const [errorMsg, setErrorMsg] = useState(null)

  const searchCep = async (postalCode) => {
    const data = await request(`${API}/viacep/${postalCode}`)

    if (data.erro) {
      setError(true)
      setErrorMsg(MESSAGES.NOT_FOUND)
      setAddress(null)
      return
    }

    setAddress(data)
    setError(false)
    setErrorMsg(null)
  }

  const handleCep = (postalCode) => {
    setCep(postalCode)
  }

  useEffect(() => {
    if (!cep) return
    searchCep(cep)
  }, [cep])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Search onSearch={handleCep} error={error} errorMsg={errorMsg} />
      {address && <Address address={address} /> }
    </ThemeProvider>
  )
}

export default App
