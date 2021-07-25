

import { useState } from 'react'
import srt from './Sortings.module.css'

const initSort = [false,false,false,false,false]

const Sortings = () => {

    const [ sorting, setSorting ] = useState([true,false,false,false,false])

    const handleSort = (x) => {
        const newSort = [ ...initSort ]
        newSort[x] = true
        setSorting( [...newSort] )
        console.log( x )
    }

    return (
        <div className={srt.cont}> 

            {/* Top Rated */}
            
            <div 
            onClick={ () => { handleSort(0)}}
            className={srt.Ele}
            style={{background: sorting[0] ? '#002E6E' : 'white'}}
            >
                <span
                className={srt.headding}
                style={{color : sorting[0] ? 'white': 'black'}}
                >
                    Top Rated
                </span>
                <span
                className={srt.subHeadding}
                >
                    High to Low
                </span>
                <span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/ecc7ac82.png" alt="Sorting direction" />
                </span>
            </div>

            {/* Departure */}
            <div 
            onClick={ () => { handleSort(1)}}
            className={srt.Ele}
            style={{background: sorting[1] ? '#002E6E' : 'white'}}
            >
                <span
                className={srt.headding}
                style={{color : sorting[1] ? 'white': 'black'}}
                >
                    Departure 
                </span>
                <span
                className={srt.subHeadding}
                >
                    5:00 PM
                </span>
                <span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/ecc7ac82.png" alt="Sorting direction" />
                </span>
            </div>

            {/* Arrival  */}

            <div 
            onClick={ () => { handleSort(2)}}
            className={srt.Ele}
            style={{background: sorting[2] ? '#002E6E' : 'white'}}
            >
                <span
                className={srt.headding}
                style={{color : sorting[2] ? 'white': 'black'}}
                >
                    Arrival
                </span>
                <span
                className={srt.subHeadding}
                >
                    3:45 AM
                </span>
                <span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/ecc7ac82.png" alt="Sorting direction" />
                </span>
            </div>

            {/* Cheapest  */}

            <div 
            onClick={ () => { handleSort(3)}}
            className={srt.Ele}
            style={{background: sorting[3] ? '#002E6E' : 'white'}}
            >
                <span
                className={srt.headding}
                style={{color : sorting[3] ? 'white': 'black'}}
                >
                    Cheapest
                </span>
                <span
                className={srt.subHeadding}
                >
                    700
                </span>
                <span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/ecc7ac82.png" alt="Sorting direction" />
                </span>
            </div>

            {/* Availability  */}

            <div 
            onClick={ () => { handleSort(4)}}
            className={srt.Ele}
            style={{background: sorting[4] ? '#002E6E' : 'white'}}
            >
                <span
                className={srt.headding}
                style={{color : sorting[4] ? 'white': 'black'}}
                >
                    Availability
                </span>
                <span
                className={srt.subHeadding}
                >
                    High to Low
                </span>
                <span>
                    <img src="https://drg5ie3bz46tr.cloudfront.net/travel/rtravel/assets/ecc7ac82.png" alt="Sorting direction" />
                </span>
            </div>
        </div>
    )
}

export { Sortings }