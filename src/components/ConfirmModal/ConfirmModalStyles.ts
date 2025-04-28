import styled from "styled-components";

export const Container = styled.div`
 position: fixed;
 top: 2rem;
 right: 2rem;
 background: #333;
 color: #fff;
 padding: 1rem 2rem;
 border-radius: 0.5rem;
 box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
 font-size: 0.9rem;

 .btn {
 display: flex;
 align-items: center;
 margin-top: 0.4rem;
 gap: 0.5rem;
 }

 .btn > .btn-confirm ,
 .btn > .btn-cancel {
  font-size: 0.875rem;
  background: transparent;
  border: none;

  padding: 0.57rem;
  display: flex;
  align-items: center;
  
  height: 1.5rem;
  border-radius: 8px;
  background-color: ${({theme}) => theme.COLORS.BLUE_DARK};
  color: ${({theme}) => theme.COLORS.GRAY_100};

  transition: background-color 0.2s, transform 0.2s;

  &:hover {
   transform: scale(1.05);
  }
 }
`