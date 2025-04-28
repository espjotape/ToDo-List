import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 width: 100%;
 flex: 1;
 padding: 1rem;
 border-radius: 8px;
 align-items: center;
 justify-content: space-between;
 margin-top: 1.5rem;

 background-color: ${({theme}) => theme.COLORS.GRAY_500};
 border: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

 & + & {
  margin-top: 0.75rem;
 }

 > label {
  display: flex;
  padding: 3px;
  align-items: center;
  gap: 0.75rem;
 }

 label input[type='checkbox'] {
  display: none;
 }

 .checkbox {
  border-radius: 50%;
  height: 1rem;
  width: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  margin-right: 0.75rem;
 }

 .checkbox-checked {
  background-color: ${({ theme }) => theme.COLORS.PURPLE};
  border: 2px solid ${({ theme }) => theme.COLORS.PURPLE};
 }
 
 .checkbox-unchecked {
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.COLORS.BLUE};
 }

 .paragraph {
  font-size: 0.875rem;
  user-select: none;
  line-height: 140%;
  transition: 0.2s all;
 }
  
 .paragraph-checked {
  text-decoration: line-through;
  color: ${({theme}) => theme.COLORS.GRAY_300}
 }

 > button {
  border: none;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
   color: #808080;
   transition: color 0.2s;
   } 
  }

  > button svg:hover {
   color: ${({ theme }) => theme.COLORS.DANGER};
  }
`