import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;
  }
`

export const ItemMenuLink = styled(NavLink)`
  position: relative;

  width: 4.8rem;
  height: 4.8rem;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme['gray-100']};

  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  &.active {
    color: ${({ theme }) => theme['green-500']};
    border-bottom: 3px solid ${({ theme }) => theme['green-500']};
  }

  &::after {
    content: attr(aria-label);
    display: none;
    position: absolute;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    background: #09090a;
    padding: 8px 16px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 5px;

    color: ${({ theme }) => theme['gray-100']};
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1.4;
  }

  &::before {
    display: none;
    top: -20%;
    left: 50%;
    transform: translateX(-50%) rotate(180deg);
    border: solid transparent;
    content: '';
    position: absolute;
    pointer-events: none;
    border-bottom-color: #09090a;
    border-width: 10px;
  }

  &:hover {
    border-bottom: 3px solid ${({ theme }) => theme['green-500']};

    &::before,
    &::after {
      display: flex;
    }
  }
`
