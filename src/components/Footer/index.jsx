import { Container } from "./styles"
import footerBranding from '../../assets/footer-branding.svg'

export function Footer() {
    return (
        <Container>
            <img src={footerBranding} alt="food explorer logo" />
            © 2023 - Todos os direitos reservados.
        </Container>
    )
}