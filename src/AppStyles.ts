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
  flex-direction: column;
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
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

