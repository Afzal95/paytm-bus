
import seat from './Seat.module.css'

const Seat = ({selected, num}) => {
    return (
        <div  className={seat.outter}
        style={{backgroundColor : selected ? '#20bf7a' : 'white', borderColor : selected ? '#20bf7a' : '#979797'}}
        >
            <div className={`${seat.inner}`}></div>
        </div>
    )
}

export { Seat }