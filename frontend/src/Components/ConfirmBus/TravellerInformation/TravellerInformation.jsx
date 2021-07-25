import React from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Radio, RadioGroup } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	ageInput: {
		marginLeft:"3%",
		width: "51.56px"
	},
  }));

const TravelInfoCont = styled.div`
	width: 100%;
	margin-top: 3%;
	border: 1px solid rgb(206, 202, 202);
	box-shadow: rgba(32, 33, 36, 0.18) 0px 1px 6px 0px;
	overflow: auto;
`;
const Checkbox = styled.input`
	height: 15px;
	width: 15px;
`;
const Para = styled.p`
	font-size: 15px;
	margin-left: 3%;
	font-family: "" Open Sans ", Arial, Helvetica, sans-serif";
	color: rgb(80, 80, 80);
	font-weight: 600;
	text-size-adjust: 100%;
`;
const Logindetails = styled.div`
	height: 70px;
	width: 95%;
	display: flex;
	margin-left: 3%;
	margin-top: 1%;
	/* display: flex; */
	/* flex-direction: column; */
	/* border: 1px solid rgb(206, 202, 202); */
`;
const Input = styled.input`
	height: 40px;
	width: 250px;
	border: 1px solid rgb(206, 202, 202);
	margin-left: 3%;
	margin-top: 1%;
`;
const InputAge = styled.input`
	height: 33px;
	width: 51.56px;
	background-color:#ffffff;
	padding: 1px 20px 1px 2px;
	margin-left: 3%;
	margin-top: 1%;
	border: 1px solid rgb(206, 202, 202);

`;
const Select = styled.select`
	height: 40px;
	width: 250px;
	border: 1px solid rgb(206, 202, 202);
	margin-left: 3%;
	margin-top: 1%;
	text-size-adjust: 100%;
`;
const ReviewTitleCont = styled.div`
height: 45px;
background-color: #e9edee;
padding: 1px;
`;
const ReviewTitle = styled.div`
color:#4a4a4a;
font-size: 16px;
font-weight: 600;
text-align: left;
margin-top: 10px;
margin-left: 10px;
`;
const RadioButton = styled.input`
 z-index: 1;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
  margin-top: 19px;
`;
const RadioDiv = styled.div`
padding: 0 0.45em;
  font-size: 14px;
  margin-left: 10px;
  margin-top: 19px;
`;
export const TravellerInformation=()=>{
	const classes = useStyles();
	const passangers = [{id:1,seat:'L11'},{id:2,seat:'L12'}];
    return(
        <TravelInfoCont>
            <ReviewTitleCont>
                <ReviewTitle>02 Traveller Information</ReviewTitle>
            </ReviewTitleCont>
			{
				passangers.map((item,index)=>
					<Logindetails key={item.id} >
						<p style={{textAlign:"left"}}>Travller {item.id}</p>
							<div style={{display:"flex",marginTop:"35px",marginLeft:"-70px"}}>
							<RadioButton
                      type="radio"
                      name={"gender" + index}
                      value="Male"
                    />
                    <RadioDiv>Male</RadioDiv>
                    <RadioButton
                      type="radio"
                      name={"gender" + index}
                      value="Female"
                    />
                    <RadioDiv>Female</RadioDiv>
							</div>
						<br />
						<div>
						{/* <div>aaaaa</div> */}
						<div style={{display:"flex",marginTop:"27px",marginLeft:"20px"}}>
						<TextField label="Full Name" required/>
						<TextField label="Age" className={classes.ageInput} required/>
							{/* <Input placeholder="Full Name"></Input> */}
							{/* <InputAge placeholder="Age"/> */}
					
							<p>Seat {item.seat}</p>
							</div>
						</div>
					
				</Logindetails>
					)
			}
				
				<div style={{textAlign:"left"}}>
				<Para>
				Contact Information

				</Para>
				<p style={{marginLeft:"25px"}}>Your ticket and PNR Info will be sent to these.</p>
				<Logindetails style={{marginLeft:"-5px"}}>
					<Input placeholder="Email ID"></Input>
					<Input placeholder="Mobile No."></Input>
				</Logindetails>
			{/* <br /> */}
			
			{/* <br /> */}
				<Para>
					<Checkbox type="checkbox"></Checkbox>
					I agree to all the{" "}
					<a
						href="https://paytm.com/about-us/our-policies/#tandc"
						style={{ color: "#00b9f5", textDecoration: "none" }}
					>
						terms and conditions
					</a>
				</Para>
			<br />
			
			</div>
        </TravelInfoCont>
    )
}