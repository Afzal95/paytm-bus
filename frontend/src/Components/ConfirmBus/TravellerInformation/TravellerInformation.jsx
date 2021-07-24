import React from 'react';
import styled from 'styled-components';
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
export const TravellerInformation=()=>{
	const passangers = [{id:1,seat:'A1'},{id:2,seat:'A2'}];
    return(
        <TravelInfoCont>
            <ReviewTitleCont>
                <ReviewTitle>02 Traveller Information</ReviewTitle>
            </ReviewTitleCont>
			{
				passangers.map(item=>
					<Logindetails key={item.id} >
						{/* <div style={{border:"1px solid black"}}> */}
							
							<p>Travller {item.id}</p>
							<Select name="gender">
								<option value="male">Male</option>
								<option value="female">Female</option>
							</Select>
							<p>Seat {item.seat}</p>
						{/* </div> */}
						<br />
						{/* <div>aaaaa</div> */}
						<div style={{display:"flex"}}>
							<Input placeholder="Full Name"></Input>
							<InputAge placeholder="Age"/>
					
							
						</div>
					
				</Logindetails>
					)
			}
				
				<Para>
				Contact Information

				</Para>
				<p>Your ticket and PNR Info will be sent to these.</p>
				<Logindetails>
					<Input placeholder="Email ID"></Input>
					<Input placeholder="Mobile No."></Input>
				</Logindetails>
			<br />
			
			<br />
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
        </TravelInfoCont>
    )
}