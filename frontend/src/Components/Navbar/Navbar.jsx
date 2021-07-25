import React from 'react'
import {Nav,Img,Consumer,Company,Signin,Wallet,User} from './Navbar.js'
import CustomizedDialogs from '../Login/Login2'
import { useSelector,useDispatch } from "react-redux";
export function Navbar() {
    const [open, setOpen] = React.useState(false);
    const [menuOpen,setMenuOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleMouseOver = ()=>{
        setMenuOpen(true);
      }
      const handleMouseLeave = ()=>{
        setMenuOpen(false)
      }
      const handleClose = () => {
        setOpen(false);
      };
      const isAuth = useSelector(
        (state) => state.authReducer.isAuth
      );
      const currentCustomer = useSelector(
        (state) => state.authReducer.token.name
      );
    return (
        <>
        <Nav>
            <Img src="https://images.financialexpress.com/2017/05/paytm.jpg" alt="icon"/>
            <Consumer>
                <Company>PayTM for Consumer</Company>
                <Company>PayTM for Business</Company>
                <Company>Company</Company>
                <Company>Career</Company>
                </Consumer> 
                <Signin onClick={handleClickOpen} onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}>
                    {!isAuth?(<><div>Sign In</div><User/></>):(!menuOpen?<><div>Hi, {currentCustomer}</div><User/></>:<div>SignOut</div>)}
                    </Signin>      
                      
        </Nav>
        <CustomizedDialogs handleClose={handleClose} open={open}/>
        <Wallet><strong>NO Wallet KYC Required </strong> 😊 tp pay using UPI on Paytm.<strong> Learn more.</strong></Wallet>
        </>
    )
}