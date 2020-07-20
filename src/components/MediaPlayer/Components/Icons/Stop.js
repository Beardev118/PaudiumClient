import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

export default function BookmarkIcon(props) {
  return (
      <SvgIcon {...props} viewBox="0 0 60 60" style = {{width:"60px",height:"60px"}}>
        <circle cx="30" cy="30" r="30" fill="#1F2747" />
        <path
          d="M26.5434 20.2012L38.1362 29.7446L26.5434 39.2881V20.2012Z"
          fill="white"
        />
      </SvgIcon>
  );
}
