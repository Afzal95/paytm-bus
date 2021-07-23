import styled from "styled-components"
export const Container = styled.div`
width: 80%;
margin:20px auto;
border:1px solid gray;

`
export const Heading = styled.div`
font-size:26px;
font-weight:500;
text-align:left;
color:black;
padding:10px 20px;
`
export const Grid = styled.div`
display:grid;
padding:2% 2%;
grid-template-columns: repeat(2,1fr);
gap: 2%;
`
export const CityFlex = styled.div`
display:flex;
justify-content:space-between;
margin: 40px 10px;
`
export const Button = styled.button`
border: 1px solid skyblue;
background-color:white;
color:skyblue;
padding:5px;
cursor: pointer;

`
export const CityName = styled.div`
color:gray;
font-size:20px;
`