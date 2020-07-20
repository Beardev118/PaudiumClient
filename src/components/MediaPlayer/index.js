import React, { useRef, useContext } from "react";
import { useSpring, a, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import MediaPlayer from "./Player";
import { GlobalContext } from "../../GlobalState/GlobalState";
import { MEDIA } from "../../Const/Consts";
import { ACTION } from "../../Const/Action";
import { PLAYER_SIZE } from "../../Const/PlayerSize";
import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MiniPlayer from "./MiniPlayer";
import MaxPlayer from "./MaxPlayer";

import "./styles.css";

const height = 110;
const useStyles = makeStyles((theme) => ({
  container: {
    zIndex: 1000,
  },
}));
export default function App() {
  const classes = useStyles();
  const draggingRef = useRef(false);
  const [{ y }, set] = useSpring(() => ({ y: height }));
  const [{ currentPlayerSize }, dispatch] = useContext(GlobalContext);

  let myPos = 0;
  const open = ({ canceled }) => {
    set({ y: myPos, config: canceled ? config.wobbly : config.stiff });

    dispatch({ type: ACTION.setPlayerSize, snippet: PLAYER_SIZE.MAXIMIZE });
  };
  const close = (velocity = 0) => {
    set({ y: height, config: { ...config.stiff, velocity } });
    dispatch({ type: ACTION.setPlayerSize, snippet: PLAYER_SIZE.MINIMIZE });
  };
  const bind = useDrag(
    ({ first, last, vxvy: [, vy], movement: [, my], cancel, canceled }) => {
      if (first) draggingRef.current = true;
      else if (last) setTimeout(() => (draggingRef.current = false), 0);

      if (last) my > height * 0.5 || vy > 0.5 ? close(vy) : open(vy);
      else set({ y: my, immediate: false, config: config.stiff });
    },
    {
      initial: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  return (
    <>
      <a.div
        className="sheet"
        {...bind()}
        style={{ display: "block", bottom: `calc(-100vh + ${height}px)`, y }}
      >
        <div className={classes.container}>
          {console.log(currentPlayerSize)}
          {currentPlayerSize === PLAYER_SIZE.MAXIMIZE ? (
            <MaxPlayer />
          ) : (
            <MiniPlayer />
          )}
          <MediaPlayer />
        </div>
      </a.div>
    </>
  );
}
