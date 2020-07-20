import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import {makestyles, makeStyles} from '@material-ui/core/styles';
import ButtonBase from "@material-ui/core/ButtonBase";
import {useHistory} from 'react-router-dom';

const useStyle = makeStyles((theme)=>({
  iconButton:{
    height:'35px',
    weight:'35px',
    borderRadius:'4px',
    backgroundColor:"rgb(31, 39, 71,0.1)",
    padding:6,

  }
}))

export default function MenuIcon(props) {

  const classes = useStyle();
const history = useHistory();

  return (
    <IconButton className = {classes.iconButton} onClick = {()=>{history.push('/episodes')}}>
      <SvgIcon {...props} viewBox="0 0 21 16">
        <circle
          cx="3.55556"
          cy="3.55556"
          r="2.55556"
          stroke="#1D2C56"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="3.55556"
          cy="12.4442"
          r="2.55556"
          stroke="#1D2C56"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="8.88867"
          y="2.6665"
          width="11.5556"
          height="1.77778"
          rx="0.888889"
          fill="#1D2C56"
        />
        <rect
          x="8.88867"
          y="11.5557"
          width="11.5556"
          height="1.77778"
          rx="0.888889"
          fill="#1D2C56"
        />
      </SvgIcon>
    </IconButton>
  );
}
