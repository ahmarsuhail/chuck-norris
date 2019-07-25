import React from 'react';
import {useSelector} from 'react-redux'
import { Query } from "react-apollo";
import { GET_JOKE } from '../queries/queries'
import Text from '../styled-components/Text'
import ContentWrapper from '../styled-components/ContentWrapper'
import Grid from '@material-ui/core/Grid';



function Joke() {

  const category = useSelector(state => state.category);

  if (category) {
    return (
      <Query query={GET_JOKE} variables={{ category }}>
        {({ loading, error, data }) => {
          if (loading || error) {
            return (
              <Grid container direction='row'>
                <Grid item xs={12}>
                  <ContentWrapper align="center">
                    {loading ? <Text size='30'>Fetching joke...</Text> : null}
                    {error ? <Text size='30'>Can't load joke :(</Text> : null}
                  </ContentWrapper>
                </Grid>
              </Grid>
            )
          }

          return (
            <Grid container>
              <Grid item xs={12}>
                <ContentWrapper align="center">
                  <Grid item xs={12}>
                    <Text size='30'>{data.joke.categories}</Text>
                  </Grid>
                  <Grid item xs={12}>
                    <Text size='25'>{data.joke.value}</Text>
                  </Grid>
                </ContentWrapper>
              </Grid>
            </Grid>
          );
        }}
      </Query>
    )
  } else {
    return null;
  }
}

export default Joke;