import React from 'react';
import logo from '../logo.svg';
import { Button, Grid, GridCell } from 'rmwc';
import QuoteCard from '../components/QuoteCard'
import PolarChart from '../components/PolarChart'
import story from '../quotes/hardTimes'

const selection = story.main.map(quote => quote.replace(/\n/g, '<br/>'))

export default class Default extends React.Component {
    update(){
        this.forceUpdate()
    }
    render() {
        return (
            <div style={{background: '#ddd', width: '100%'}}>
                <Grid  >
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='12' span='8'>

                        <PolarChart
                            title='Substance Abuse'
                            labels={["Coffee", "Chicken", "Beef", 'Pork' ]}
                            data={
                            [
                                {
                                    dataPoints: [2, 4, 6, 3],
                                    colors: ["rgba(200, 100, 0, 0.5)", "rgba(75, 192, 192, 0.5)", 'rgba(51, 187, 90, 0.5)', 'rgba(0,30, 100, 0.5)'],
                                }
                            ]
                            }
                        />
                        <QuoteCard title={selection[0]} />
                    </GridCell>
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='0' span='2'>
                    </GridCell>
                </Grid>

            </div>
        );
    }
}