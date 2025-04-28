import { ReactNode } from "react";
import { Container } from "./ButtonStyles";

interface ButtonProps {
 children: ReactNode;
}

export function Button({ children }: ButtonProps) {
 return(
  <Container>
   {children}
  </Container>
 )
}