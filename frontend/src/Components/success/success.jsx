import styles from "./success.module.css";

function SuccessPage(){

    return <div>
            <div style={{marginTop:"60px",padding:"8px",justifyContent:"center",width:"80%",margin:"0 auto",backgroundColor:"#fff"}}>
            <h2>Congratulations !</h2> <br/>
            <h3>Booking success.</h3>
            <div style={{display:"flex",justifyContent:"space-around",lineHeight:"1.5",paddingBottom:"40px"}}>
                <div style={{textAlign:"left",marginLeft:"15%"}}>
                    <div>Name- Afzal Ahmad</div>
                    <div>Age - 25</div>
                    <div>Address - sector 61, Koramangla, Bangalore</div>
                    <div>From - Bangalore</div>
                    <div>To - Hyderabad</div>
                    <div>Date - 25/07/2021</div>
                </div>
                <div style={{textAlign:"left",marginRight:"15%"}}>
                    <div>From - Bangalore</div>
                    <div>To - Hyderabad</div>
                    <div>Date - 25/07/2021</div>
                    <div>Transaction ID: 14461199498</div>
                </div>
                {/* <div>Booking Details</div> */}
            </div>
            </div>
            <footer style={{marginTop:"220px"}}>copyright &#169; 2021</footer>
            </div>
}

export {SuccessPage}