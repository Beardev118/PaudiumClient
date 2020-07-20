import React, { useReducer, createContext } from "react";
import { MEDIA } from "../Const/Consts";
import { ACTION } from "../Const/Action";
import { PLAYER_SIZE } from "../Const/PlayerSize";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";

export const GlobalContext = createContext();

const initialState = {
  searchState: "home",
  searchResult: [],
  currentPodcast: {},
  currentPlayStatus: false,
  currentPlayerSize: PLAYER_SIZE.MAXIMIZE,
  currentSearchKeyWords:"",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION.setPodcast:
      return {
        ...state,
        currentPodcast: action.snippet,
      };
    case ACTION.setPlayerState:
      return {
        ...state,
        currentPlayStatus: action.snippet,
      };
    case ACTION.setPlayerSize:
      return {
        ...state,
        currentPlayerSize: action.snippet,
      };
      case ACTION.setSearchKeys:
      return {
        ...state,
        currentSearchKeyWords: action.snippet,
      };
  }
};

export const GlobalState = (props) => {
  const globalState = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={globalState}>
      {props.children}
    </GlobalContext.Provider>
  );
};

