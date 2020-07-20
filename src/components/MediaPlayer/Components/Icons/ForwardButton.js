import React from "react";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";

export default function BookmarkIcon(props) {
  return (
    <IconButton>
      <SvgIcon {...props} viewBox="0 0 21 19">
        <path d="M21.5 10.25L10 19.75L10 12.25L0.5 19.75L0.5 1.25L10 8.75V1.25L21.5 10.25Z" />
      </SvgIcon>
    </IconButton>
  );
}
