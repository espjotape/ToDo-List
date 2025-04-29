import styled from "styled-components";

export const InputField = styled.input`
 width: 100%;
 height: 3.37rem;

 border: 1px solid ${({theme}) => theme.COLORS.GRAY_700};
 border-radius: 8px;
 padding: 1rem;

 background: ${({theme}) => theme.COLORS.GRAY_500};
 color: ${({theme}) => theme.COLORS.GRAY_100};

 ::placeholder {
  color: ${({ theme }) => theme.COLORS.GRAY_300};
 }

  @media (max-width: 768px) {
  height: 3rem; 

  &::placeholder {
   font-size: 0.8rem;
   }
  }
`