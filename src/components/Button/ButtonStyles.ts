import styled from "styled-components";

export const Container = styled.button`
 display: flex;
 align-items: center;
 justify-content: center;

 background: ${({theme}) => theme.COLORS.BLUE_DARK};
 color: ${({theme}) => theme.COLORS.GRAY_100};
 
 font-weight: bold;
 font-size: 0.875rem;

 border-radius: 0.65rem;
 padding: 1rem;
 gap: 0.5rem;
 border: 0;

 transition: background 0.2s;

 &:hover {
 background: ${({theme}) => theme.COLORS.BLUE};
 }

 @media (max-width: 768px) {
  height: 3rem; 
  font-size: 0.75rem;

  .icon {
  display: none;
  }
 }
`