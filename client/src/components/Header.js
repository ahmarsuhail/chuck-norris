import React from 'react'
import HeaderBar from '../styled-components/HeaderBar'
import Text from '../styled-components/Text'
import Avatar from '../styled-components/Avatar'
import Grid from '@material-ui/core/Grid';

function Header() {
    return (
        <HeaderBar>
            <Grid container direction="row">
                <Grid item xs={8}>
                    <Text size='30'>Chuck Norris Joke Generator</Text>
                </Grid>
                <Grid item xs={4}>
                    <Avatar large src="https://assets.chucknorris.host/img/avatar/chuck-norris.png" />
                </Grid>
            </Grid>
        </HeaderBar>
    )
}


export default Header;