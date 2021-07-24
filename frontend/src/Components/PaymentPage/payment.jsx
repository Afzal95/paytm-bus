// import {Link} from "react-router-dom";
import styles from "./Payment.module.css";

function Payment(){

    return <div>
    <div className={styles.iconDiv}>
    <img src="https://staticpg.paytm.in/pgp/web/assets/logo.png" width="100%" height="50%" alt="icon" />
    </div>
    <div className={styles.firstDiv}>
        <div className={styles.goBack}>
            {/* <Link>Go back</Link> */}
            Go back
        </div>
        <hr style={{borderBottom:".4px light grey"}} />
        <div style={{display:"flex",marginLeft:"20px",justifyContent:"space-between",marginRight:"20px"}}>
        <div>
        <h3 style={{fontSize:"18px",marginBottom:"-10px"}}>Paytm Bus tickets Order</h3>
        <p>Transaction ID: 14461199498</p>
        </div>
        <div>
        <p style={{marginBottom:"-10px"}}>Amount to be paid</p>
        <h3>Rs799</h3>
        </div>
        </div>
    </div>
    <div className={styles.firstDiv}>
        <div className={styles.goBack}>
            {/* <Link>Go back</Link> */}
            Go back
        </div>
        <hr style={{borderBottom:".4px light grey"}} />
        <div style={{display:"flex",marginLeft:"20px",justifyContent:"space-between",marginRight:"20px"}}>
        <div>
        <h3 style={{fontSize:"18px",marginBottom:"-10px"}}>Paytm Bus tickets Order</h3>
        <p>Transaction ID: 14461199498</p>
        </div>
        <div>
        <p style={{marginBottom:"-10px"}}>Amount to be paid</p>
        <h3>Rs799</h3>
        </div>
        </div>
    </div>
    </div>
}

export {Payment}