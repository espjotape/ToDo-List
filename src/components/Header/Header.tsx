import { Container } from './HeaderStyles.ts';

import logo from '../../assets/logo.svg'

export function Header() {
 return(
  <Container>
   <img src={logo} alt="logo" />
  </Container>
 )
}