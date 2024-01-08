import { QtySelector } from "../QtySelector"
import { FavoriteIcon, Container, FoodContent, FoodImage, FoodName, FoodPrice, FoodDescription } from './styles'
import foodImage from "../../assets/Mask group.png"

export function FoodCard({ foodData }) {
    const { name, price, isfavorite, description } = foodData;

    return (
        <Container >
            <FavoriteIcon
                isfavorite={isfavorite.toString()}
                onClick={() => { }}
                weight={isfavorite ? 'fill' : 'regular'}
            />
            <FoodImage src={foodImage} alt={name} />

            <FoodContent>
                <FoodName>{name}</FoodName>
                <FoodDescription>{description}</FoodDescription>
                <FoodPrice>${price.toFixed(2)}</FoodPrice>
                <QtySelector />
            </FoodContent>
        </Container>
    );
};


