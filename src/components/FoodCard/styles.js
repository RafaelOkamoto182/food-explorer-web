import styled from "styled-components";
import { Heart } from '@phosphor-icons/react';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakPoints'

export const Container = styled.div`
  width: 21rem;
  padding: 2.4rem;
  overflow: hidden;
  position: relative;
  text-align: center;

  border: 1px solid white;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 30rem;
        height: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;

export const FoodImage = styled.img`
  width: 8.8rem;
  object-fit: cover;
  margin-bottom: 1.2rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 18rem;
    object-fit: cover;
        margin-bottom: 1.5rem;
    }
  
`;

export const FoodContent = styled.div`
  padding: 0;
`;

export const FoodName = styled.h3`
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
  margin: 0;
  text-align: center;
  margin-bottom: 1.2rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 1.5rem;
    }
`;

export const FoodDescription = styled.p`
    display: none;

    @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        display: block;

        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        font-family: 'Roboto', sans-serif;
        
        margin-bottom: 1.5rem;

        height: 8.5rem;

        overflow-x: hidden;
        text-overflow: ellipsis;

    }

`

export const FoodPrice = styled.p`
  color: ${({ theme }) => theme.COLORS.CAKE_200};
  text-align: center;
  margin-bottom: 1.2rem;

  @media(min-width: ${DEVICE_BREAKPOINTS.MD}){
        margin-bottom: 1.5rem;
    }
`;

export const FavoriteIcon = styled(Heart)`
  cursor: pointer;
  color: ${({ theme, isfavorite }) => isfavorite === 'true' ? theme.COLORS.TOMATO_200 : theme.COLORS.LIGHT_100};
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
`;
