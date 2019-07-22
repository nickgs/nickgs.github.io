import React, { Component } from 'react';
import styled from 'styled-components';

const BigHello = styled.h1`
    font-size: 2em;

    @media only screen and (min-width: 768px) {
        font-size: 4em;
    }
`;

class Hero extends Component {
    render() {
        return (
            <div>
                <BigHello>Hi. I'm Nick.</BigHello>
                <p>My name is Nick Selvaggio. I help companies leverage technology to their benefit, teach developers how to improve, and am in constant persute to learn from those around me.</p>
                <p>The purpose of this site is to share slides from talks I've given, share experiments I may be playing with, and share any other information I may feel compelled to post. </p>
            </div>
        );
    }
}

export default Hero;