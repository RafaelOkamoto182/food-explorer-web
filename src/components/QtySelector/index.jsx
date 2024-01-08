import { Container, QuantityButton, QuantityDisplay, StepperContainer } from "./styles"
import { useState } from "react";

import { Button } from "../Button"

export function QtySelector() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prevQuantity) => prevQuantity - 1);
        }
    };

    return (
        <Container>
            <StepperContainer>
                <QuantityButton onClick={handleDecrement}>-</QuantityButton>
                <div>{quantity}</div>
                <QuantityButton onClick={handleIncrement}>+</QuantityButton>
            </StepperContainer>

            <Button title={"Add to cart"} />
        </Container>

    )
}