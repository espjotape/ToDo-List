import styled from "styled-components";

export const Container = styled.header `
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 100%;
 margin-top: 1.5rem;

 background-color: ${({ theme }) => theme.COLORS.GRAY_600};
 color: ${({ theme }) => theme.COLORS.GRAY_100}; 

 p {
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.BLUE}; 
 }

 span {
  padding: 2px 8px;
  border-radius: 8px;
  font-size: 0.75rem;

  display: flex; 
  align-items: center;
  
  color: ${({theme}) => theme.COLORS.GRAY_200};
  background:  ${({theme}) => theme.COLORS.GRAY_400};
 }

 @media (max-width: 768px) {
  margin-top: 0.5rem;

  p, span {
   font-size: 0.8rem;
   }
  }
 `
export const TaskCreate = styled.aside `
 display: flex;
 gap: 0.5rem;
 align-items: center;
 `
 export const Completed = styled.aside `
 display: flex;
 gap: 0.5rem;
 align-items: center;
 
 p {
  font-weight: bold;
  color: ${({ theme }) => theme.COLORS.PURPLE}; 
 }

  @media (max-width: 768px) {
  p, span {
   font-size: 0.8rem;
   }
  }
`