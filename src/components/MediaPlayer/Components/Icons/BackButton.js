import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

export default function BookmarkIcon(props) {
  return (
    <IconButton>
      <SvgIcon {...props} viewBox="0 0 21 19">
        <path d="M1.5 10.75L13 1.25V8.75L22.5 1.25V19.75L13 12.25V19.75L1.5 10.75Z" />
      </SvgIcon>
    </IconButton>
  );
}
