import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Typography } from "@material-ui/core";

const addCatMutation = gql`
  mutation {
    createCat(name: "My cat") {
      id
      name
    }
  }
`;

export default function AddCat() {
  return <div></div>;
}
