import styled from "styled-components"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const Nav = styled.div`
width: 90%;
height: 92px;
margin: 0 auto;
display: flex;
justify-content: space-between;
`

export const Img=styled.img`
width:10%;
height:90%;`

export const Consumer= styled.div`
display:flex;
justify-content: space-between;
padding:5px;


`
export const Company= styled.div`
margin:15px;`

export const Signin=styled.div`
background-color: #00baf2;
display: flex;
justify-content: space-between;
height:25px;
padding: 5px 5px 5px 10px;
border-radius:10px;
margin-top:13px;
width:6%;
color:white;
font-size:16px;
font-weight:bold;
cursor: pointer;
&:hover{
    background-color: blue;
}
`
export const User= styled(AccountCircleIcon)`
color: blue;
&:hover{
    color: white;
}
`
export const Wallet= styled.div`
background-color: #ebebeb;
padding:17px;`