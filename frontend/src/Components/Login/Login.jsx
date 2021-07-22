import React from "react";
import {
  Container,
  BenefitsCont,
  LoginCont,
  HeaderText,
  BenefitText,BenefitItem
} from "./Styles";
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

const Login = () => {
  return (
    <Container>
      <BenefitsCont>
        <HeaderText>Benefits of Paytm Account</HeaderText>
        {/* <div> */}
          {benefitsData.map((item) => (
            <BenefitItem key={item.id}>
              <img src={item.image} alt="logo" />
              <BenefitText>{item.title}</BenefitText>
            </BenefitItem>
          ))}
        {/* </div> */}
      </BenefitsCont>
      <LoginCont>
        <HeaderText>Login Using Google</HeaderText>
        <button>Login</button>
      </LoginCont>
    </Container>
  );
};

export default Login;
