import React, { useState } from 'react';
import styled from 'styled-components';

const FareBox = styled.div`
	height: 750px;
	width: 80%;
	border: 1px solid rgb(206, 202, 202);
	padding:8%;
`;
const ProceedButton = styled.button`
width: 218px;
height: 59px;
color:#ffffff;
background-color: #00b9f5;
margin: 20px 0px 0px;
padding: 15px 9px;
font-size: 18px;
font-weight: 600;
border: 1px solid #00b9f5;
border-radius: 10px;
cursor: pointer;
&:hover{
	background-color: #00b9c0;
}
`;
const ApplyButton = styled.button`
width: 20%;
color:#00b8f8;
font:14px;
background-color: #ffffff;
padding: 5px 10px;
border:1px solid #00b8f8;
cursor: pointer;
height: 38px;
margin: 10px;
`;
const PromoInput = styled.input`

width: 60%;
background-color: #f5f8f9;
padding: 6px;
font-size: 16px;
font-weight: 600;
border: 1px solid black;
outline: none;
`;
const LeftTextHeader = styled.p`
text-align: left;
`;
const TextBox = styled.div`
display: flex;
justify-content: space-between;
`;
const LeftText = styled.p`
text-align: left;
line-height: 0px;
`;
const RightText = styled.p`
text-align: right;
line-height: 0px;
`;
export const FareDetails=()=>{
	const [promoCode,setPromoCode] = useState("");
	const noOfTravellers = 2;
	const baseFare = 3852;
	const [discount,setDiscount] = useState(0);
	const operatorGst = (baseFare*(9/100));
	const total = baseFare - discount + operatorGst;
	const promoCodeOnClick = (e) => {
		setPromoCode(e.target.value);
	}
	const applyPromoCode = ()=>{
		if(promoCode === "BUS150"){
			setDiscount(150)
		}
		else if(promoCode === "BUS100"){
			setDiscount(100)
		}
	}
    return(
        <FareBox>
            <p>Fare Details</p>
			<hr />
			<LeftTextHeader>ONWARD FARE</LeftTextHeader>
			<TextBox>
			<LeftText>Base Fare ({noOfTravellers} Travellers)</LeftText>
			<RightText>₹{baseFare.toFixed(2)}</RightText>
			</TextBox>
			<TextBox>
			<LeftText>Discount</LeftText>
			<RightText>₹{discount.toFixed(2)}</RightText>
			</TextBox>
			<TextBox>
			<LeftText>Operator GST</LeftText>
			<RightText>₹{operatorGst.toFixed(2)}</RightText>
			</TextBox>
			<hr />
			<TextBox>
			<LeftText>Total</LeftText>
			<RightText>₹{total.toFixed(2)}</RightText>
			</TextBox>
			{discount!==0&&<p style={{color:"#21C17A",fontSize:"11px"}}>Awesome!! Discount of {promoCode} is applied</p>}
			<div style={{textAlign:"left"}}>
				<p>Promocode</p>
				<PromoInput type="text" placeholder="Enter Promocode" value={promoCode} readOnly/>
				<ApplyButton onClick={applyPromoCode}>Apply</ApplyButton>
				<div style={{border:"1px solid black"}}>
					<input type="radio" id="BUS150" name="radio" value="BUS150" onChange={promoCodeOnClick}/>
					<label>BUS150 <br />
					Use promocode BUS150 on bus ticket bookings and get a 30% off Rapido discount voucher
					</label><br />
					<input type="radio" id="BUS100" name="radio" value="BUS100" onChange={promoCodeOnClick}/>
					<label>BUS100 <br />
					Users get Cashback upto Rs 100 on bus ticket bookings. Minimum order value of Rs 300 for bus ticket booking.
					</label>
					
						{/* </input> */}
				</div>
			</div>
			<ProceedButton>Proceed to pay</ProceedButton>
        </FareBox>
    )
}