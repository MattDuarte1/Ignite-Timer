import styled from 'styled-components'

export const CountDownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 16rem;
  line-height: 12.8rem;
  color: ${({ theme }) => theme['gray-100']};

  display: flex;
  gap: 1.6rem;

  span {
    background: ${({ theme }) => theme['gray-700']};
    padding: 3.2rem 1.6rem;
    border-radius: 8px;
  }

  @media (max-width: 680px) {
    font-size: 8rem;
    gap: 1rem;
    line-height: 8rem;
  }
`

export const Separator = styled.div`
  padding: 3.2rem 0;
  color: ${({ theme }) => theme['green-500']};
  width: 6.4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 680px) {
    width: 3rem;
  }
`
