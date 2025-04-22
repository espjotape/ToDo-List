import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%; 
  display: flex;
  flex-direction: column;
`;


export const Content = styled.main`
  flex: 1;
  padding: 2rem;  // Ajuste o padding conforme necessário
  background-color: ${({ theme }) => theme.COLORS.GRAY_600}; // Cor mais clara para o conteúdo
  color: ${({ theme }) => theme.COLORS.GRAY_100}; // Cor do texto
  display: flex;
  justify-content: center; 
  align-items: center; 
  text-align: center; 
  flex-direction: column;
`;

