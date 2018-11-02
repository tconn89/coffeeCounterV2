import '../css/article.css';
import '@patternfly/react-core/dist/styles/base.css';
import React from 'react';
import {Typography} from '@rmwc/typography';

import { Badge, Grid} from '@patternfly/react-core'

export default class Article extends React.PureComponent {
    render() {
        return (
            <div className="article">
                <Typography use="headline4">
                    <p>Raleigh Bikers</p>
                </Typography>

                <Grid gutter='small' sm={2} md={1} lg={1}>
                    <Badge> Green </Badge>
                    <Badge> Sustainable </Badge>
                </Grid>
                <Typography use="body1">
                    <p>Is it true that cars are destroying the world?  Maybe, but they're a necessary evil as it stands.</p>
                    <p>Get more butts on bikes!</p>
                </Typography>
            </div>
        );
    }
}
