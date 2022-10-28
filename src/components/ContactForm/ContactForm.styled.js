import styled from "styled-components";

export const Container = styled.div`
max-width: 420px;
margin-left: 20px;
margin-top: 20px;
border: 1px solid;
border-color: #000000;
`
export const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: flex-start;
gap: 20px;
`
export const Label = styled.label`
display: flex;
justify-content: space-between;
align-items: center;
margin: 10px 10px 0 10px;
font-weight: normal;
font-size: 24px;
`
export const Input = styled.input`
min-width: 250px;
min-height: 36px;
font-weight: normal;
font-size: 24px;
`
export const Button = styled.button`
margin: 0 0 10px 10px;
max-width: 160px;
padding: 10px;
font-weight: normal;
font-size: 24px;
border-radius: 5%;
&:hover {
    background-color: #63c5da;
    color: #fff;
}
&:focus {
    background-color: #63c5da;
    color: #fff;
}
`