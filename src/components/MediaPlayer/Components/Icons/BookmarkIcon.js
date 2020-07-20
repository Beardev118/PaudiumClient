import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

export default function BookmarkIcon(props) {
  return (
    <IconButton>
      <SvgIcon {...props} viewBox="0 0 13 17">
        <path
          d="M11.2804 1H1.37079C1.16613 1 1 1.16599 1 1.37079V15.2579C0.999711 15.5361 1.15512 15.791 1.40251 15.9182C1.65004 16.0452 1.94783 16.023 2.17364 15.8607L6.3256 12.8844L10.4777 15.8605C10.7037 16.0226 11.0012 16.0446 11.2486 15.9176C11.4958 15.7906 11.6514 15.5358 11.6514 15.2579V1.37079C11.6514 1.16599 11.4852 1 11.2804 1Z"
          stroke="#1D2C56"
          strokeWidth="1"
          fill="none"
        />
      </SvgIcon>
    </IconButton>
  );
}
