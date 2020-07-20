import React, { useState, useRef, useEffect, useContext } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GlobalContext } from "../../GlobalState/GlobalState";
import { AudioContext } from "../../GlobalState/AudioContext";
import { AuthContext } from "../../GlobalState/AuthContext";
import { ACTION } from "../../Const/Action";
import { MEDIA } from "../../Const/Consts";

let relatedVideosVar;

export default function MediaPlayer({ location, history }) {
  const { data: dataPod, error: errorPod, loading: londingPod } = useQuery(
    GET_PODCAST
  );

  const [
    { currentPodcast, currentPlayStatus, currentPlayerSize },
    dispatch,
  ] = useContext(GlobalContext);

  const auth = useContext(AuthContext);
  const audioRef = useContext(AudioContext);

  const player = audioRef.current;

  const setupMediaSessions = () => {
    if ("mediaSession" in navigator) {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        // title: currentPodcast.title,
        title: currentPodcast.title,
        artist: "unknown",
        artwork: [
          {
            src: currentPodcast.image,
            sizes: "512x512",
            type: "image/png",
          },
        ],
      });
      navigator.mediaSession.setActionHandler("play", () => {
        /* Code excerpted. */
        playAudio();
      });
      navigator.mediaSession.setActionHandler("pause", () => {
        /* Code excerpted. */
        audioRef.current.pause();
      });
      navigator.mediaSession.setActionHandler("previoustrack", () => {
        playPrevious();
      });
      navigator.mediaSession.setActionHandler("nexttrack", () => {
        playNext();
      });
    }
  };
  const playNext = () => {
    // also set this is from playlist
    const currentIndex = relatedVideosVar.findIndex(
      (video) => video.id.videoId === currentPodcast.id
    );
    let video;
    video = relatedVideosVar[currentIndex + 1]; //we will play the next song
  };

  const playPrevious = () => {
    // if the player time is greater than 5 sec we will move the time to 0
    if (player.currentTime > 5) {
      player.currentTime = 0;
    } else {
      const currentIndex = relatedVideosVar.findIndex(
        (video) => video.id.videoId === currentPodcast.id
      );
      let video;
      if (currentIndex !== -1) {
        video = relatedVideosVar[currentIndex - 1]; //we will play the next song
      } else {
        player.currentTime = 0;
      }
    }
  };

  const playAudio = () => {
    audioRef.current
      .play()
      .then((_) => {
        // Automatic playback started!
        // Show playing UI.
        setupMediaSessions();
        console.log("Set up Media seession.");
      })
      .catch((error) => {
        // Auto-play was prevented
        // Show paused UI.
        dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.PAUSE });
      });
  };

  const songEnded = () => {
    playAudio();
  };


  return (
    <div>
      <audio
        // onTimeUpdate={timeUpdate}
        onLoadStart={() => {
          dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.LOADING });
        }}
        id="audio-element"
        // crossOrigin="anonymous"
        onPlay={() =>
          dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.PLAY })
        }
        onPlaying={() =>
          dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.PLAY })
        }
        onPause={() =>
          dispatch({ type: ACTION.setPlayerState, snippet: MEDIA.PAUSE })
        }
        onEnded={songEnded}
        autoPlay
        ref={audioRef}
        src={currentPodcast.audioURL}
      />
    </div>
  );
}

const GET_PODCAST = gql`
  {
    podcasts {
      id
      title
      imageURL
      audioURL
      podTitle
    }
  }
`;
