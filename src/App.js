import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { GlobalState } from "./GlobalState/GlobalState";
import { AudioControl } from "./GlobalState/AudioContext";
import Episode from "./routes/Episode/Chapters";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { AuthProvider } from "./GlobalState/AuthContext";
import CurrentSection from "./routes/CurrnentSection";

const client = new ApolloClient({
  uri: "http://localhost:4500/",
  // uri: "https://obscure-earth-08296.herokuapp.com",
});

function App() {
  return (
    <AuthProvider>
      <ApolloProvider client={client}>
        <GlobalState>
          <AudioControl>
            <Router>
              <CurrentSection />
            </Router>
          </AudioControl>
        </GlobalState>
      </ApolloProvider>
    </AuthProvider>
  );
}

export default App;
