import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
};
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 1300px;
margin-inline: auto;
padding-inline: 50px;

@media screen and (max-width: 991px) {
    padding-inline: 30px;
};
`;

export const Button = styled.button`
border-radius: 4px;
background: #4b59f7;
white-space: nowrap;
padding: 10px 20px;
color: #fff;
font-size: 16px;
outline: none;
border: none;

&:hover {
    transition: all 0.3 ease-out;
    background: #fff;
    background: #0467fb;
};

@media screen and (max-width: 960px) {
    width: 100%;
};
`;

export const Form = styled.form`
padding: 30px 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
box-shadow: 1px 1px 9px #fff;
border-radius: 9px;

@media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
};

& > input, select {
    min-width: 300px;
};
`

export const FormInput = styled.input`
padding: 10px 20px;
border-radius: 2px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;

&::placeholder {
    color: #242424;
};

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
};
`;

export const FormSelect = styled.select`
padding: 10px 20px;
border-radius: 2px;
outline: none;
border: none;
font-size: 16px;
border: 1px solid #fff;

&::placeholder {
    color: #242424;
};

@media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
};
`;

export const FormOption = styled.option`
`;