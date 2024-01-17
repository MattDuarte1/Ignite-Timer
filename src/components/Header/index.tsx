import { HeaderContainer, ItemMenuLink } from './styles'
import logoIgnite from '../../assets/Logo.svg'
import { Timer, Scroll } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoIgnite} alt="" />
      <nav>
        <ItemMenuLink to="/" aria-label="Timer">
          <Timer size={24} />
        </ItemMenuLink>
        <ItemMenuLink to="/history" aria-label="Histórico">
          <Scroll size={24} />
        </ItemMenuLink>
      </nav>
    </HeaderContainer>
  )
}
