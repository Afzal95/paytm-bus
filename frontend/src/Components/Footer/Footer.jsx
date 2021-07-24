import React from "react";
import { Container,Upper,AppSt,Social,Mid,MidDiv } from "./Footer.styled";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import { Twitter } from "@material-ui/icons";

export function Footer() {
  return (
    <Container>
      <Upper>
        <AppSt>
          <div>Download Paytm App to Pay from anywhere</div>
          <div><img src="https://drg5ie3bz46tr.cloudfront.net/travel/downloadApple.svg"/></div>
          <div><img src="https://drg5ie3bz46tr.cloudfront.net/travel/downloadApple.svg"/></div>
        </AppSt>
        <Social>
          <Twitter style={{color:"	#484848"}}/>
          <InstagramIcon style={{color:"	#484848"}}/>
          <FacebookIcon style={{color:"	#484848"}}/>
        </Social>
      </Upper>
      <Mid>
        <MidDiv><img src="https://drg5ie3bz46tr.cloudfront.net/travel/Help.svg"/><div><strong>24X7 Help</strong> If we fall short of your expectations in any way, let us know.</div></MidDiv>
        <MidDiv><img src="https://drg5ie3bz46tr.cloudfront.net/travel/Assurance.svg"/><div><strong>100% Assurance</strong> If you face any issue, your money is immediately refunded. Sit back shop on.</div></MidDiv>
        <MidDiv><img src="https://drg5ie3bz46tr.cloudfront.net/travel/Trust.svg"/><div><strong>Paytm trust</strong> Your money is yours. All refunds come with no question asked guarantee.</div></MidDiv>
      </Mid>
    </Container>
  );
}
