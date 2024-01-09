import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.section`
margin-bottom: 2.4rem;

    >h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.8rem;
        font-family:"Roboto", sans-serif;
        font-weight: 400;
        line-height: 140%;

        margin-bottom: 2.4rem;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 4.8rem;


        >h2{font-size: 3.2rem;}
    }

`