
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`;
export default GlobalStyle;

export const Container = styled.div`
z-index: 1;
width: 100%;
margin-inline: auto;
padding-inline: 50px;
max-width: 1300px;

@media screen and (max-width: 991px) {
    padding-inline: 30px;
}
`;

export const Button = styled.button`
border-radius: 4px;
background: ${ ({ primary }) => (primary ? '#4B59F7' : '#0467FB')};
white-space: nowrap;
padding: ${ ({ big }) => (big ? '12px 64px' : '10px 20px')};
color: #fff;
font-size: ${ ({ fontBig }) => (fontBig ? '20px' : '16px') };
outline: none;
border: none;
cursor: pointer;

&:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${ ({ primary }) => (primary ? '#0467FB' : '#4B59F7')};
};

@media screen and (max-width: 960px) {
    width: 100%;
};
`;

export const InputBox = styled.div`
    padding: 8px;
    margin-inline: auto;
    margin-bottom: 1rem;

    border-top: 2px solid red;
    border-radius: 5px;

    line-height: 19px;
    display: flex;
    flex-wrap: wrap;

    & > * {
        flex-basis: 50%;
        border: 1px solid transparent;
        outline: none;
    }

    & > *:focus-visible {
        outline: none;
    }

    & > input, select {        
        box-shadow: 2px 1px 3px black;
        border-radius: 5px;
        padding: .2rem;
    }

    & > input:focus, select:focus {
        border: 1px solid black;
    }

    & > input:hover, select:hover {
        border: 1px solid red;
        box-shadow: 2px 1px red;
    }

    @media screen and (max-width: 624px) {
        & > * {
            margin-bottom: 5px;
            flex-basis: 100%;
        }
    }
`;
