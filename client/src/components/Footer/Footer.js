import React from 'react'
import { Container, Wrapper, Row, Column, Link, Title } from './footerElements'


export function Footer() {
    return (
        <Container>
            <Wrapper>
            <Row>
                <Column>
                <Title>About Us</Title>
                    <Link href="#">Story</Link>
                    <Link href="#">Contact</Link>
                    <Link href="#">Terms & Condition</Link>
                </Column>
                <Column>
                <Title>Title2</Title>
                    <Link href="#">Marketing</Link>
                    <Link href="#">Consulting</Link>
                    <Link href="#">Development</Link>
                    <Link href="#">Design</Link>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <Link href="#">United States</Link>
                    <Link href="#">United Kingdom</Link>
                    <Link href="#">Australia</Link>
                    <Link href="#">Support</Link>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <Link href="#">United States</Link>
                    <Link href="#">United Kingdom</Link>
                    <Link href="#">Australia</Link>
                    <Link href="#">Support</Link>
                </Column>
                <Column>
                <Title>Contact Us</Title>
                    <Link href="#">United States</Link>
                    <Link href="#">United Kingdom</Link>
                    <Link href="#">Australia</Link>
                    <Link href="#">Support</Link>
                </Column>
            </Row>
            </Wrapper>
        </Container>
    )
}