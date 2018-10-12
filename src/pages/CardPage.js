import {Grid, GridCell} from '@rmwc/grid';

import React from 'react';
import SampleCard from '../components/SampleCard.component';

export default class CardPage extends React.PureComponent {
    render() {
        return (
            <Grid>
                <GridCell span="3"><SampleCard /></GridCell>
                <GridCell span="3"><SampleCard /></GridCell>
                <GridCell span="3"><SampleCard /></GridCell>
                <GridCell span="3"><SampleCard /></GridCell>
                <GridCell span="4"><SampleCard /></GridCell>
                <GridCell span="4"><SampleCard /></GridCell>
                <GridCell span="4"><SampleCard /></GridCell>
            </Grid>
        );
    }
}
