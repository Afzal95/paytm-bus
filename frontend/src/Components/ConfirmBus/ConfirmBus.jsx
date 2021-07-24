import React from 'react';
import {ReviewItinerary} from './ReviewItinerary/ReviewItinerary';
import {TravellerInformation} from './TravellerInformation/TravellerInformation';
import {FareDetails} from './FareDetails/FareDetails';

export const ConfirmBus=()=>{
    return(
        <div>
            <div>
            <ReviewItinerary/>
            <TravellerInformation/>
            </div>
            <div>
            <FareDetails/>
            </div>
            
            
        </div>
    )
}
