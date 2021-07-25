import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import styles from "./leftFilter.module.css";

const useStyles = makeStyles({
    root: {
      width: 250,
    },
  });
  
  function valuetext(value) {
    return `${value}Rs`;
  }

function LeftFilterSection(){

    const useStyles = makeStyles((theme) => ({
        root: {
          width: 250,
        },
        margin: {
          height: theme.spacing(3),
        },
      }));
      
      const marks = [
        {
          value: 300,
          label: '300 Rs',
        },
        {
          value: 750,
          label: '750 Rs',
        },
        {
          value: 1200,
          label: '1200 Rs',
        },
        {
          value: 1650,
          label: '1650 Rs',
        },
        {
          value: 2200,
          label: '2200 Rs',
        },
        {
          value: 2500,
          label: '2500 Rs',
        },
        {
          value: 3000,
          label: '3000 Rs',
        },
      ];

    const classes = useStyles();
    const [value, setValue] = React.useState([300, 3000]);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    }

    return <div>
        <h2 style={{textAlign:"left",marginLeft:"10px",height:"45px"}}>Refine Results</h2>
        <hr/>
        {/* <p style={{textAlign:"left",marginLeft:"10px",height:"45px"}}>Departure</p> */}
        <div className={classes.root}>
      <Typography style={{textAlign:"left",marginLeft:"10px",height:"45px"}} id="range-slider" gutterBottom>
        Price
      </Typography>
      
      <Slider
        track="inverted"
        aria-labelledby="track-inverted-range-slider"
        getAriaValueText={valuetext}
        // defaultValue={[1500, 2200]}
        marks={marks}
        onChange={handleChange}
      >3000</Slider>
    </div>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Bus type</p>
    <div style={{textAlign:"left",marginLeft:"10px",margin:"5px"}} ><input type="checkbox" /><span style={{marginLeft:"20px"}}>Ac</span></div>
    <div style={{textAlign:"left",marginLeft:"10px",margin:"5px"}} ><input type="checkbox" /><span style={{marginLeft:"20px"}}>Non Ac</span></div>
    <div style={{textAlign:"left",marginLeft:"10px",margin:"5px"}} ><input type="checkbox" /><span style={{marginLeft:"20px"}}>Seater</span></div>
    <div style={{textAlign:"left",marginLeft:"10px",margin:"5px"}} ><input type="checkbox" /><span style={{marginLeft:"20px"}}>Semi sleeper</span></div>
    <div style={{textAlign:"left",marginLeft:"10px",margin:"5px"}} ><input type="checkbox" /><span style={{marginLeft:"20px"}}>Sleeper</span></div>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Duration</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Bus ratings</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>cancellation available</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Deals applied</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Social distancing</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Bus operators</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Bus brands</p>
    <hr/>
    <p style={{textAlign:"left",marginLeft:"10px"}}>Amenities</p>
    <hr/>
    </div>
}

export {LeftFilterSection}