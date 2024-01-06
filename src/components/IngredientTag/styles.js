import styled from 'styled-components'

export const Container = styled.span`
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    background-color: ${({ theme }) => theme.COLORS.LIGHT_700};

    font-size:1.4rem;
    
    padding: .4rem .8rem;
    border-radius: 4px;
    margin-right: 2.4rem;
`