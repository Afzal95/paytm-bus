import React from 'react';
import styled from 'styled-components';

const FareBox = styled.div`
	height: 750px;
	width: 100%;
	border: 1px solid rgb(206, 202, 202);
`;

export const FareDetails=()=>{
    return(
        <FareBox>
            <p>Fare Details</p>
			<p>ONWARD FARE</p>
			<p>Base Fare (3 Travellers)₹3852.00</p>
			<p>Instant Discount (-)₹150.00</p>
			<p>Operator GST ₹184.00</p>
			<div>
				<p>Total₹3886.00</p>
			</div>
			<div>
				<p>Promocode</p>
				<input type="text" />
				<button>Apply</button>
			</div>
        </FareBox>
    )
}