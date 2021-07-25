import React from "react";
import { Nav, Img, Consumer, Company, Signin, Wallet, User } from "./Navbar.js";
import CustomizedDialogs from "../Login/Login2";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../Redux/auth/actions";
export function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleMouseOver = () => {
    setMenuOpen(true);
  };
  const handleMouseLeave = () => {
    setMenuOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSignOut = () => {
    dispatch(logout());
  };
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  return (
    <>
      <Nav>
        <Img src="/images/paytm_logo.png" alt="icon" />
        <Consumer>
          <Company>Paytm for Consumer</Company>
          <Company>Paytm for Business</Company>
          <Company>Company</Company>
          <Company>Career</Company>
        </Consumer>
        <Signin
          onClick={!isAuth ? handleClickOpen : handleSignOut}
          onMouseEnter={handleMouseOver}
          onMouseLeave={handleMouseLeave}
        >
          {!isAuth ? (
            <>
              <div>Sign In</div>
              <User />
            </>
          ) : !menuOpen ? (
            <>
              <div>Hi, Ajmal K V</div>
              <User />
            </>
          ) : (
            <div>SignOut</div>
          )}
        </Signin>
      </Nav>
      {!isAuth && <CustomizedDialogs handleClose={handleClose} open={open} />}
      <Wallet>
        <strong>NO Wallet KYC Required </strong> 😊 tp pay using UPI on Paytm.
        <strong> Learn more.</strong>
      </Wallet>
    </>
  );
}
