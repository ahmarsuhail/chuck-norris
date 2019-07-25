import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { Query } from 'react-apollo'
import { GET_CATEGORIES } from '../queries/queries'
import Grid from '@material-ui/core/Grid';
import Joke from './Joke';
import Text from '../styled-components/Text'
import ContentWrapper from '../styled-components/ContentWrapper'
import { updateCategory } from '../actions'


function Chuck() {

    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Query query={GET_CATEGORIES}>
                {({ loading, error, data }) => {

                    if (loading || error) {
                        return (
                            <Grid container direction='row'>
                                <Grid item xs={12}>
                                    <ContentWrapper align="center">
                                        {loading ? <Text size='30'>Loading...</Text> : null}
                                        {error ? <Text size='30'>Something went wrong :(</Text> : null}
                                    </ContentWrapper>
                                </Grid>
                            </Grid>
                        )
                    }

                    const categories = data.categories.map(category => {
                        return <Text type='link' size='25' key={category} value={category} onClick={() => dispatch(updateCategory(category))}>{category}</Text>
                    })

                    return (
                        <Grid container direction='row'>
                            <Grid item xs={4}>
                                <ContentWrapper align="center">
                                    {categories.slice(0, 4)}
                                </ContentWrapper>
                            </Grid>
                            <Grid item xs={4}>
                                <ContentWrapper align="center">
                                    {categories.slice(4, 8)}
                                </ContentWrapper>
                            </Grid>
                            <Grid item xs={4}>
                                <ContentWrapper align="center">
                                    {categories.slice(8, 12)}
                                </ContentWrapper>
                            </Grid>
                            {!category ?
                                (<Grid item xs={12}>
                                    <ContentWrapper align="center">
                                        <Text size='30'>Pick a category.</Text>
                                    </ContentWrapper>
                                </Grid>) : null}
                        </Grid>

                    )
                }
                }
            </Query>
            <Joke />
        </React.Fragment>
    );
}


export default Chuck;
