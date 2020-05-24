import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  font-size: 1.4rem;
  max-width: 430px;
  margin: ${({ theme }) => theme.margin}px auto;
  padding: ${({ theme }) => theme.padding * 2}px;
`

export const Text = styled.p`
  font-weight: 300;
`

export const Prefix = styled.span`
  font-weight: 800;
`
