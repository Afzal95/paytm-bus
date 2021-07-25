import { useState } from 'react';
import { Seats } from './Seats';
import seat from './AvailableSeats.module.css'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

// const initDetails = {
//     seats: [],
//     price : 0
// }

const AvailableSeats = () => {
    const history = useHistory()
    const [ boarding, setBoarding ] = useState('Bangalore')
    const [ dropping, setDropping ] = useState('Hyderabad')
    // const [ seatDetails, setSeatDetails ] = (initDetails)

    const handleSeatDetails = () => {

    }

    return (
        <div className={`${seat.cont}`}>
            <div style={{marginLeft: '20px'}}>
                {/* <div>10 Seats Available</div> */}
                <span style={{fontSize:'12px', color: '#9b9b9b'}}>Click on Seat to select/ deselect</span>
            </div>
            <div className={`${seat.seatSelection}`}>
                <div className={`${seat.selectseatCont}`}>
                    <Seats deck={'LOWER'} />
                    <Seats deck={'UPPER'} />
                </div>
                <div className={`${seat.seatFormCont}`}>
                    <div className={`${seat.formCont}`} >
                        <form className={`${seat.seatForm}`}>
                            <TextField style={{marginBottom:'10px'}} value={boarding} id="standard-basic" label="Boarding Point" />
                            <TextField style={{marginBottom:'10px'}} value={dropping} id="standard-basic" label="Dropping Point" />
                            <Button style={{marginTop:'10px'}} variant="contained" color="primary" onClick={()=>history.push("/confirm-bus")}>Continue</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { AvailableSeats }