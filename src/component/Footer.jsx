import { Navbar, Container } from "react-bootstrap";

const Footer = () => {
    return (
    <Navbar className="bg-dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">SMK LOREM</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                Copyright Allright Reserved <a href="#login" className="text-decoration-none">2025</a>
            </Navbar.Text>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}

export default Footer;