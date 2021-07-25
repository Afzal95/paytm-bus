
import crd from './BookingCard.module.css'
import Button from '@material-ui/core/Button';
import DotIcon from '@material-ui/icons/FiberManualRecord';
import { useState } from 'react';
import { MoreDetails } from './moreDetails/MoreDetails';

const amenities = [
    {
        name : 'Live Tracking',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/live_tracking.png'
    },
    {
        name : 'Charging Point',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/charging_point.png'
    },
    {
        name : 'Reading Light',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/reading_light.png'
    },
    {
        name : 'Emergency Exit',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/emergency_exit.png'
    },
    {
        name : 'Fire Extinguisher',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/fire_extinguisher.png'
    },
    {
        name : 'First Aid Box',
        image : 'https://d274ft55l0imju.cloudfront.net/bus-api/first_aid_box.png'
    }
]

const BookingCard = ({_id,
    rating,
    operatorName,
    busType,
    departureTime,
    liveTracking,
    reschedulable,
    filledSeats,
    routeDetails,
    departure,arrival,date}) => {
    // console.log(item)

    const [ toggleDetails, setToggleDetails ] = useState( true )

    const handleDetails = (i) => {
        console.log( i )
    }

    const handleClose = () => {
        setToggleDetails( true )
    }

    const handleToggle = () => {
        setToggleDetails( false )
    }
    var busDepartureTime = departureTime;
    var busArrivalTime =
      (Number(departureTime) + Number(routeDetails["duration"])) % 24;
      var seatPrice = 0;
      var busTypeName = "";
      if (busType === 1) {
        seatPrice = 50 * Math.floor(routeDetails["duration"] / 2);
        busTypeName = "Seater";
      } else if (busType === 2) {
        seatPrice = 100 * Math.floor(routeDetails["duration"] / 2);
        busTypeName = "Sleeper";
      } else if (busType === 3) {
        seatPrice = 125 * Math.floor(routeDetails["duration"] / 2);
        busTypeName = "A/C Seater";
      } else {
        seatPrice = 75 * Math.floor(routeDetails["duration"] / 2);
        busTypeName = "Non - A/C";
      }
      return (
        <div  className={crd.card}>
           {/* bus info */}
           <div className={crd.busInfo}>
                <div className={`${crd.textLeft}`}>
                    <h5 className={`${crd.overflow} ${crd.headding}`}>{operatorName}</h5>
                    <h5 className={`${crd.overflow} ${crd.subHeadding}`}>AC Semi-Sleeper 2+2 Single Axle 2+2, Business Class Semi Sleeper, AC, LED</h5>
                </div>
                <div 
                className={`${crd.textCenter}`}
                >
                    <h5 className={`${crd.headding}`}>{busDepartureTime}:00</h5>
                    <h5 className={`${crd.subHeadding}`}>{departure}</h5>
                </div>
                <div>
                    <h5 className={`${crd.headding}`}>
                        <img style={{width:'14px'}} src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/c6138785.png" alt="arrow left" />
                    </h5>
                    <h5 className={`${crd.subHeadding}`}>{routeDetails["duration"]}&nbsp;hrs</h5>
                </div>
                <div>
                    <h5 className={`${crd.headding}`}>{busArrivalTime}:00</h5>
                    <h5 className={`${crd.subHeadding}`}>{arrival}</h5>
                </div>
                <div>
                    <h5 className={`${crd.subHeadding}`}>starting</h5>
                    <h5 style={{fontSize:'18px', fontWeight:'400'}}>₹ {seatPrice}</h5>
                </div>
                <div>
                    <div onClick={handleToggle}>
                    <Button  variant="contained" color="primary">Select Seats</Button>
                    </div>
                    <h5 className={`${crd.noOfSeats}`}>10 Seats Available</h5>
                </div>
           </div>

           {/* aminities  */}

           <div className={`${crd.AmWrapper}`}>
               <div onClick={()=>{handleDetails(1)}} className={`${crd.AmCont}`}>
                    {
                        amenities.map( (item, i) => i <= 4 ? <img style={{width:'20px', height:'20px', marginRight:'18px'}} src={item.image} alt="facilities" /> : null )
                    }
                    { amenities.length > 5 ?  <div style={{color:'#00b8f8', fontSize:'14px', fontWeight:'700'}}>{amenities.length -5}+</div> : null }
               </div>
           </div>

            {/* other details  */}

            <div className={`${crd.odWrapper}`}>
                {
                    toggleDetails?
                    <div className={`${crd.odCont}`}>
                        <span onClick={()=>{handleDetails(0)}}>87 Ratings</span>
                        <DotIcon className={crd.odDot} style={{fontSize: '6px'}}/>
                        <span onClick={()=>{handleDetails(2)}}>Boarding and Dropping Point</span>
                        <DotIcon className={crd.odDot} style={{fontSize: '5px', fontWeight:'600'}}/>
                        <span onClick={()=>{handleDetails(3)}}>Cancellation Policy</span>
                    </div> :
                    <MoreDetails handleClose={handleClose} /> 
                }
            </div> 
       </div>
    )
}

export { BookingCard }