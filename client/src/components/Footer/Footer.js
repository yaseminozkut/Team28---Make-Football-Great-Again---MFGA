import React from 'react'
import { Container, Wrapper, Row, Column, Link, Title, Title2, Text } from './footerElements'


export function Footer() {
    return (
        <Container>
            <Wrapper>
            <Row>
                <Column>
                <Title>Go To</Title>
                    <Link href="/">Homepage</Link>
                    <Link href="currentstats">Current Statsistics</Link>
                    <Link href="referee">Referees</Link>
                    <Link href="bugreport">Bug Report</Link>
                    <Link href="fixedBugs">Fixed Bugs</Link>
                </Column>
                <Column>
                <Title2>Make Football Great Again</Title2>
                <Text>Welcome to our Make Football Great Again community. 
                Here, you can find useful statistics and news about Turkish Football. 
                If you have any questions or suggestions feel free to contact us.
                </Text>
                </Column>
            </Row>
            </Wrapper>
        </Container>
    )
}