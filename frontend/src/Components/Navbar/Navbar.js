import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export const Nav = styled.div`
  height: 92px;
  display: flex;
  justify-content: space-between;
  background: #fff;
  position: fixed;
  width: 100%;
  z-index: 1000;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
`;

export const Img = styled.img`
  width: 84.5px;
  height: 27px;
  margin: 28px;
`;

export const Consumer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;
export const Company = styled.h1`
  margin: 15px;
  font-size: 17px;
  font-weight: 600;
  color:#000;
`;

export const Signin = styled.div`
  background-color: #00baf2;
  display: flex;
  justify-content: space-between;
  height: 25px;
  padding: 5px 5px 5px 10px;
  border-radius: 10px;
  /* margin-top:13px; */
  /* width:6%; */
  color: white;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  margin: 28px;
  &:hover {
    background-color: blue;
  }
`;
export const User = styled(AccountCircleIcon)`
  color: blue;
  &:hover {
    color: white;
  }
`;
export const Wallet = styled.div`
  background-color: #ebebeb;
  padding: 17px;
`;
