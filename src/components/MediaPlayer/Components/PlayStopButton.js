import React, { useContext } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import { GlobalContext } from "../../../GlobalState/GlobalState";
import { MEDIA } from "../../../Const/Consts";

const PlayIconButton = withStyles({
  root: {
    borderRadius: "4px",
    backgroundColor: "#D2D4DA",
  },
})((props) => <IconButton disableRipple {...props} />);

export default function PlayStopButton() {
  const [{ currentPodcast, currentPlayStatus }, dispatch] = useContext(
    GlobalContext
  );

  console.log("Current player status", currentPlayStatus);

  return (
    <div>
      <PlayIconButton>
        {currentPlayStatus === MEDIA.PLAY ? <PlayArrowIcon /> : <PauseIcon />}
      </PlayIconButton>
    </div>
  );
}
