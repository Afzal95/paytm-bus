import React from 'react'
import {Nav,Img,Consumer,Company,Signin,Wallet} from './Navbar.js'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
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
                    <span>Signin</span>
                    <AccountCircleIcon/>
                    </Signin>         
        </Nav>
        <CustomizedDialogs handleClose={handleClose} open={open}/>
        <Wallet>NO Wallet KYC Required tp pay using UPI on Paytm. Learn more.</Wallet>
        </>
    )
}
