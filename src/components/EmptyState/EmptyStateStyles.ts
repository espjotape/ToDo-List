import styled from "styled-components";

export const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 gap: 1rem;
 padding: 4rem 1rem;

 margin-top: 1.5rem;
 border-top: 1px solid ${({theme}) => theme.COLORS.GRAY_400};

 p {
  display: flex;
  flex-direction: column;
  color: ${({theme}) => theme.COLORS.GRAY_300}
 }
`