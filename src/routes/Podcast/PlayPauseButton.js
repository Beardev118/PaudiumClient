import React from "react";
import IconButton from '@material-ui/core/IconButton';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';



export default function PlayPauseButton() {
  return (
    <div>
      <IconButton edge="end" aria-label="play">
        <PlayCircleFilledIcon className={classes.playButton} fontSize="large" />
      </IconButton>
    </div>
  );
}
