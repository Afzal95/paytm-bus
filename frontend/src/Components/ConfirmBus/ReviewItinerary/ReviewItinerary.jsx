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
					<p style={{width:"100px"}}>Onward <br /> 11h 00m</p>
                    <div style={{width:"200px",lineHeight:"5px",padding:"10px"}}>
                        <div>
                        <p style={{color:"#002e6e",fontSize:"18px",fontWeight:"600",textAlign:"left"}}>02:00 <span style={{fontWeight:"lighter"}}>Bengaluru</span></p>
                        </div>
                        
                        <p style={{fontSize:"11px",color:"#909090",margin:"0px 0px 5px",textAlign:"left"}}>Mon, 26 July</p>
                        <p style={{textAlign:"left",color:"#00b9f5"}}>Change Boarding point</p>
                    </div>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/b303754c.png" alt="arrow" style={{width:"11px",height:"7px",margin:"30px 5px 0px"}} />
                    <div style={{width:"200px",lineHeight:"5px",padding:"10px"}}>
                        <div>
                        <p style={{color:"#002e6e",fontSize:"18px",fontWeight:"600",textAlign:"left"}}>13:00 <span style={{fontWeight:"lighter"}}>Hyderabad</span></p>
                        </div>
                        
                        <p style={{fontSize:"11px",color:"#909090",margin:"0px 0px 5px",textAlign:"left"}}>Mon, 26 July</p>
                        <p style={{textAlign:"left",color:"#00b9f5",fontSize:"13px"}}>Change Boarding point</p>
                    </div>
                    <div style={{width:"200px",lineHeight:"5px",padding:"10px",textAlign:"left"}}>
                        <p style={{color:"#002e6e",fontSize:"16px",fontWeight:"600",textAlign:"left"}}>IntrCity SmartBus W</p>
                        <p>Seats: L11, L12</p>
                        <p style={{textAlign:"left",color:"#00b9f5",fontSize:"13px"}}>Cancellation Policy</p>
                    </div>
                    <div style={{padding:"14px"}}>
                        <p style={{color:"#00b9f5",fontSize:"20px"}}>Modify</p>
                    </div>
				</ReviewDetail>
        </ReviewCont>
    )
}