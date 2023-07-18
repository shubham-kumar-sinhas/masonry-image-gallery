import React from "react";
import styled from "styled-components";

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

const Credits = () => (
    <Container>
        <p><em>Made by <a href="https://github.com/shubham-kumar-sinhas" rel="noreferrer" target="_blank">Shubham Kumar Sinha</a>.</em></p>
    </Container>
)

export default Credits;