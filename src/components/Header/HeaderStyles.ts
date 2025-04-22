import styled from "styled-components";

export const Container = styled.header`
 display: flex;
 flex: 1;
 align-items: center;
 justify-content: center;
 padding: 4rem 0.625rem;
 background: ${({theme}) => theme.COLORS.GRAY_700}
`