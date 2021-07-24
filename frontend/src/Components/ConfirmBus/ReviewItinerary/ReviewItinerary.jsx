import React from 'react';
import styled from 'styled-components';
const ReviewDetail = styled.div`
	/* height: 70px; */
	width: 95%;
	display: flex;
	margin-left: 3%;
	margin-top: 1%;
	/* border: 1px solid rgb(206, 202, 202); */
`;
const Para = styled.p`
	font-size: 15px;
	margin-left: 3%;
	font-family: "" Open Sans ", Arial, Helvetica, sans-serif";
	color: rgb(80, 80, 80);
	font-weight: 600;
	text-size-adjust: 100%;
`;
const ReviewCont = styled.div`
	/* height: 213px; */
	width: 100%;
	/* margin-left: 3%; */
    /* margin-top: 3%; */
	border: 1px solid rgb(206, 202, 202);
	box-shadow: rgba(32, 33, 36, 0.18) 0px 1px 6px 0px;
    overflow: auto;
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
export const ReviewItinerary=()=>{
    return(
        <ReviewCont>
            <ReviewTitleCont>
                <ReviewTitle>01 Review Itinerary</ReviewTitle>
            </ReviewTitleCont>
            				
				<ReviewDetail>
					<p>Onward 12h 50m</p>
                    <div>
                        <p>7:30PM</p>
                        <p>Bengaluru</p>
                        <p>Sun, 25 July</p>
                        <p>Electronic City- After Electronic City Toll Plaza (Bangalore) 7303093510</p>
                        <p>Change Boarding point</p>
                    </div>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/b303754c.png" alt="arrow" />
                    <div>
                        <p>7:30PM</p>
                        <p>Bengaluru</p>
                        <p>Sun, 25 July</p>
                        <p>Electronic City- After Electronic City Toll Plaza (Bangalore) 7303093510</p>
                        <p>Change Boarding point</p>
                    </div>
                    <div>
                        <p>IntrCity SmartBus W</p>
                        <p>2+1(30)AC, SLEEPER WITH WASHROOM, LUXURY</p>
                        <p>Seats: L11, L12, L15</p>
                        <p>Cancellation Policy</p>
                    </div>
                    <div>
                        <p>Modify</p>
                    </div>
				</ReviewDetail>
        </ReviewCont>
    )
}