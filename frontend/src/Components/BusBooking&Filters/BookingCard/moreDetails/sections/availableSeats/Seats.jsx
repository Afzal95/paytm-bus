
import { useState } from 'react'
import { Seat } from './Seat'
import seat from './Seats.module.css'
import { singleSeats, sharedSeats } from './seatsData'

const Seats = ({deck,}) => {

  const [ single, setSingle ] = useState( singleSeats )
  const [ shared, setShared ] = useState( sharedSeats )
  
  const handleSingle = (id, price) => {

    const newSeats = single.map( item => item.num == id ? { ...item, selected : !item.selected} : item )
    setSingle( [...newSeats] )
  }

  const handleShared = (id, price) => {
    const newSeats = shared.map( item => item.num == id ? { ...item, selected : !item.selected} : item )
    setShared( [...newSeats] )
  }

  return (

    <div className={`${seat.seatsCont}`}>
      <div className={seat.driver}>
        <div style={{fontSize:'14px', fontWeight: '600'}}>{deck}</div>
        <div style={{width:'22px'}}>
        <img style={{width:'100%'}} src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/96e1b97c.svg" alt="driver" />
        </div>
      </div>
      <div className={seat.sharedCont}>
        {
          shared.map( (item) => {
            return <div onClick={() => handleShared(item.num, item.price)}><Seat {...item} /></div> 
          })
        }
      </div>
      <div className={`${seat.singleCont}`}>
        {
          single.map( (item) => {
            // return <Seat />
            return <div onClick={() => handleSingle(item.num, item.price)}><Seat {...item} /></div>
          })
        }
      </div>
    </div>

  )
}

export { Seats }