import React from 'react';
import Categories from './components/Categories'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Header from './components/Header';
import Grid from '@material-ui/core/Grid';
import Wrapper from './styled-components/Wrapper'

const client = new ApolloClient({
  uri: 'https://0090fny0yc.execute-api.us-east-1.amazonaws.com/dev/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Grid container>
        <Grid item xs={12}>
          <Wrapper>
            <Header />
            <Categories />
          </Wrapper>
        </Grid>
      </Grid>
    </ApolloProvider>
  );
}

export default App;
