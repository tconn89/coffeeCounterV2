import {Card } from '@rmwc/card';

import React from 'react';
import {Typography} from '@rmwc/typography';

export default class BarChart extends React.Component {
    render() {
        const props = this.props;
        return (
            <Card style={{width: '100%', padding: '10px'}}>
                <Typography style={{marginBottom: '20px', fontSize: 18, lineHeight: 1.5, borderBottom: 'lightgrey 1px solid', padding: 30}} use='caption' dangerouslySetInnerHTML={{__html:props.title}}/>
                <Typography style={{textAlign: 'right', }} use='overline'> Ty Connors</Typography>
            </Card>
        );
    }
}
