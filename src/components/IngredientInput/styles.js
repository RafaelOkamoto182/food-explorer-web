import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: center;

    background-color: ${({ theme, isnew }) => isnew === 'true' ? "transparent" : theme.COLORS.LIGHT_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: ${({ theme, isnew }) => isnew === 'true' ? `1px dashed ${theme.COLORS.LIGHT_500}` : "none"};
            
    margin-bottom: 8px;
    border-radius: 10px;
    padding-right: 16px;

    >button{
        border: none;
        background: none;

        color: ${({ theme, isnew }) => isnew === 'true' ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100}
    }

    >input{
        height:56px;
        width: 100%;
        padding: 12px;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: transparent;

        border: none;

        &::placeholder{
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }
`