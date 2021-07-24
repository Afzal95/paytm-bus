import React from "react";
import {ReviewItinerary} from './ReviewItinerary/ReviewItinerary';
import { TravellerInformation } from "./TravellerInformation/TravellerInformation";
import {FareDetails} from './FareDetails/FareDetails';

export const ConfirmBus = () => {
	return (
		<div style={{display:"flex",flexDirection:"row"}}>
            <div style={{width:"75%",padding:"2%"}}>
            <ReviewItinerary/>
            
            <TravellerInformation/>
            </div>
            <div  style={{width:"25%",padding:"2%"}}>

            <FareDetails/>
            </div>
		</div>
	);
};