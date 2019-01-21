import {Card } from '@rmwc/card';

import React from 'react';
import {Typography} from '@rmwc/typography';

export default class BarChart extends React.Component {
    render() {
        return (
            <Typography style={{
                marginBottom: '20px',
                fontFamily: 'montserrat' ,color: 'green',
                textAlign: 'center', fontWeight: 'bold',
                }} use='title'>
                {this.props.input}
            </Typography>
        );
    }
}
