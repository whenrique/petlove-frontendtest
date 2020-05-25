import styled from 'styled-components'
import InputMask from 'react-input-mask'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.color.white};
  font-size: 1.6rem;
  max-width: 430px;
  margin: auto;
  padding: ${({ theme }) => theme.padding * 2}px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  * {
    margin-right: ${({ theme }) => theme.margin}px;
    margin-left: ${({ theme }) => theme.margin}px;
  }
`

export const Input = styled(InputMask)`
  border: 1px solid ${({ theme }) => theme.color.gallery};
  border-radius: ${({ theme }) => theme.radius}px;
  padding: ${({ theme }) => theme.padding}px;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.color.black};
  border: 1px solid ${({ theme }) => theme.color.gallery};
  border-radius: ${({ theme }) => theme.radius}px;
  color: ${({ theme }) => theme.color.white};
  padding: ${({ theme }) => theme.padding}px;
`

export const Error = styled.p`
  color: ${({ theme }) => theme.color.error};
  font-size: 1.4rem;
  text-align: center;
  width: 100%;
  margin: ${({ theme }) => theme.margin * 2}px;
`
