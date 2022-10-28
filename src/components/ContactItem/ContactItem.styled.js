import styled from "styled-components";

export const Text = styled.p`
display: inline-block;
margin-block-start: 10px;
margin-block-end: 0;
font-weight: normal;
font-size: 24px;
`
export const Button = styled.button`
display: inline-block;
margin-left 20px;
font-weight: normal;
font-size: 24px;
border-radius: 8%;
&:hover {
    background-color: #63c5da;
    color: #fff;
}
&:focus {
    background-color: #63c5da;
    color: #fff;
}
`
export const Item = styled.li`
margin-left: 10px;
font-weight: normal;
font-size: 24px;
`