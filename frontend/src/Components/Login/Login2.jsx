import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
// import GoogleButton from 'react-google-button'
import { GoogleLogin } from "react-google-login";
import { useHistory } from 'react-router';
import { loadData, saveData } from "../../Utils/localStorage";
import {
    Container,
    BenefitsCont,
    LoginCont,
    HeaderText,
    BenefitText,BenefitItem,BlueBox,ContainerBox
  } from "./Styles";
  import { useSelector, useDispatch } from "react-redux";
import {
  loginSuccess,
  loginFailure,
  logout,
  addCustomerMongo,
} from "../../Redux/auth/actions";
const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const benefitsData = [
    {
      id: 1,
      title: "Fast & Secure Payments",
      image:
        "https://accounts.paytm.com/pages/themesv2/images/mp-web/leftSectionImg1.svg",
    },
    {
      id: 2,
      title: "Pay Utility Bills or Mobile Recharge & Get Cashbacks",
      image:
        "https://accounts.paytm.com/pages/themesv2/images/mp-web/leftSectionImg1.svg",
    },
    {
      id: 3,
      title: "Pay at over 10 million Paytm merchant network",
      image:
        "https://accounts.paytm.com/pages/themesv2/images/mp-web/leftSectionImg1.svg",
    },
    {
      id: 4,
      title: "Amazing deals on Travel, Movies & Shopping",
      image:
        "https://accounts.paytm.com/pages/themesv2/images/mp-web/leftSectionImg1.svg",
    },
  ];




const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

export default function CustomizedDialogs({handleClose,open}) {
    
    const history = useHistory();
    
    const dispatch = useDispatch();
    // React.useEffect(()=>{
    //   dispatch(logout());
    // },[])
    const currentCustomer = useSelector(
      (state) => state.authReducer.currentCustomer
    );
    const isAuth = useSelector(
      (state) => state.authReducer.isAuth
    );
    const isLoggedIn = useSelector(
      (state) => state.authReducer.isLoggedIn
    );
    
    // console.log()
  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
      
      <Container>
      <BenefitsCont>
        <HeaderText>Benefits of Paytm Account</HeaderText>
          {benefitsData.map((item) => (
            <BenefitItem key={item.id}>
              <img src={item.image} alt="logo" />
              <BenefitText>{item.title}</BenefitText>
            </BenefitItem>
          ))}
      </BenefitsCont>
      <LoginCont>
      <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        </DialogTitle>
        <GoogleLogin
                      clientId="493530183469-naj3i844vuh8ru5usav057k5kuabc3iq.apps.googleusercontent.com"
                      onSuccess={(response) => {
                        
                        dispatch(loginSuccess(response));
                        dispatch(addCustomerMongo(response.profileObj));
                        history.push("/");
                      }}
                      onFailure={(response) => {
                        dispatch(loginFailure(response));
                      }}
                    />
      </LoginCont>
    </Container>
        <DialogActions>
          <BlueBox/>
          <ContainerBox/>
        </DialogActions>
      </Dialog>
    </div>
  );
}