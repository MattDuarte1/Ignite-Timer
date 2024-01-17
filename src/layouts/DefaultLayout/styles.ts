import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 118.4rem;
  min-height: calc(100vh - 16rem);
  margin: 8rem auto;
  background: ${({ theme }) => theme['gray-800']};
  padding: clamp(2rem, 2rem + 1vw, 4rem);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  @media (max-width: 680px) {
    min-height: 400px;
  }
`
