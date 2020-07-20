import React, { useContext } from "react";
import SearchBar from "./Component/SearchBar";
import { AppBar } from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import SearchItemList from "./Component/SearchListItem";
import { makeStyles } from "@material-ui/core/styles";
import gql from "graphql-tag";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { GlobalContext } from "../../GlobalState/GlobalState";

const useStyles = makeStyles((theme) => ({
  listContainer: {
    marginTop: 50,
  },
}));

export default function Search() {
  const [{ currentSearchKeyWords }] = useContext(GlobalContext);
  const classes = useStyles();
  const {
    loading: loadingSearchItem,
    error: errorSearch,
    data: SearchResult,
  } = useQuery(GET_SEARCH_ITEM, {
    variables: { currentSearchKeyWords },
  });

  return (
    <div>
      <AppBar elevation={1}>
        <Toolbar>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <div className={classes.listContainer}>
        {SearchResult &&
          SearchResult.searchPodTitle.map((item) => (
            <SearchItemList
              id={item.id}
              image={item.podImage}
              title={item.podTitle}
            />
          ))}
      </div>
    </div>
  );
}

const GET_SEARCH_ITEM = gql`
  query($currentSearchKeyWords: String!) {
    searchPodTitle(text: $currentSearchKeyWords) {
      id
      podTitle
      podImage
    }
  }
`;
