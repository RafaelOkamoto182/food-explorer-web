import styled from "styled-components";

export const Container = styled.div`
background-color: ${({ theme }) => theme.COLORS.DARK_600};
color: ${({ theme }) => theme.COLORS.LIGHT_200};

font-size: 1.2rem;

width: 100%;
height: 7.7rem;

padding: 2.4rem 0;

display: flex;
align-items: center;
justify-content:space-around;
gap: .8rem;

>img{
    width: 14.3rem;
    height: auto;
}

`