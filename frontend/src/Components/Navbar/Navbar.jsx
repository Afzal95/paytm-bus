import React from 'react'
import {Nav,Img,Consumer,Company,Signin,Wallet,User} from './Navbar.js'
import CustomizedDialogs from '../Login/Login2'

export function Navbar() {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
      };
      const handleClose = () => {
        setOpen(false);
      };
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
                <Signin onClick={handleClickOpen}>
                    <div>Sign In</div>
                    <User/>
                    </Signin>         
        </Nav>
        <CustomizedDialogs handleClose={handleClose} open={open}/>
        <Wallet><strong>NO Wallet KYC Required </strong> 😊 tp pay using UPI on Paytm.<strong> Learn more.</strong></Wallet>
        </>
    )
}
