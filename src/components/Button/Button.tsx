import { ReactNode } from "react";
import { Container } from "./ButtonStyles";

interface ButtonProps {
 children: ReactNode;
 onClick?: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
 return(
  <Container onClick={onClick}>
   {children}
  </Container>
 )
}