import {Card, CardMedia, CardPrimaryAction} from '@rmwc/card';

import React from 'react';
import {Typography} from '@rmwc/typography';

export default class SampleCard extends React.Component {
    render() {
        return (
            <Card style={{width: '100%'}}>
                <CardPrimaryAction>
                    <CardMedia
                        sixteenByNine
                        style={{backgroundImage: 'url(https://via.placeholder.com/800x450)'}}
                    />
                    <div style={{padding: '0 1rem 1rem 1rem'}}>
                        <Typography use="headline6" tag="h2">
                            Card Title
                        </Typography>
                        <Typography
                            use="subtitle2"
                            tag="h3"
                            theme="text-secondary-on-background"
                            style={{marginTop: '-1rem'}}
                        >
                            Subtitle
                        </Typography>
                        <Typography use="body1" tag="div" theme="text-secondary-on-background">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Duis ac ultrices enim.
                            Duis at ex quis libero placerat semper.
                        </Typography>
                    </div>
                </CardPrimaryAction>
            </Card>
        );
    }
}
