
import md from './MoreDetails.module.css'
import CloseIcon from '@material-ui/icons/Close';

const titles = [ 'Reviews', 'Amenities', 'Boarding & Dropping Point', 'Cancellation Policy', 'Available Seats' ]

const MoreDetails = ({handleClose}) => {

    const handleTitle = (i) => {

        console.log( i )
    }

    return (
        <div className={`${md.wrapper}`}>
            <div className={`${md.sections}`}>
                <div className={`${md.titles}`}>
                    {
                        titles.map( ( item, i ) => {
                            return <span className={`${md.title}`} onClick={()=> {handleTitle(i)}} >{item}</span> 
                        })
                    }
                </div>
                <div className={`${md.closeBtn}`}>
                    <CloseIcon onClick={()=>{handleClose()}} style={{fontSize:'18px'}} />
                </div>
                
            </div>
        </div>
    )
}


export { MoreDetails }