import styled from "styled-components";

export const Container = styled.div`
  width: 100%; 
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const TaskContainer = styled.section`
  display: flex;
  justify-content: center;
  max-width: 46rem;
  width: 100%;
  margin: 0 auto;
`;

export const TaskAction = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;
  justify-content: space-between;

  transform: translateY(-50%);
`;

export const ButtonCreate = styled.button`
  width: 5.6rem
  background: ${({theme}) => theme.COLORS.BLUE};
  padding: 1rem;
  border-radius: 0.65rem;

  border: none;
`

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

