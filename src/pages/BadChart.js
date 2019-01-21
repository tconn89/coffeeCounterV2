import React from 'react';
import fetchJsonp from 'fetch-jsonp'
import logo from '../logo.svg';
import { Button, Grid, GridCell } from 'rmwc';
import QuoteCard from '../components/QuoteCard'
import PolarChart from '../components/PolarChart'
import story from '../quotes/hardTimes'

const selection = story.main.map(quote => quote.replace(/\n/g, '<br/>'))

export default class Default extends React.Component {
    state = { data: {}}
    async componentDidMount(){
        const url = 'http://localhost:3000';
        const response = await fetchJsonp(url);
        const data = await response.json();
        console.log(data)
        this.setState({data: data.consumption[0]})
    }
    render() {
        const keys = Object.keys(this.state.data);
        const values = Object.values(this.state.data).map(value => parseInt(value));
        console.log(keys)
        console.log(values)
        return (
            <div style={{background: '#ddd', width: '100%'}}>
                <Grid  >
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='12' span='8'>

                        { keys.length ? 
                        (<PolarChart
                            title='Substance Abuse'
                            labels={keys}
                            data={
                            [
                                {
                                    dataPoints: values,
                                    colors: ["rgba(200, 100, 0, 0.3)", "rgba(75, 192, 192, 0.3)", 'rgba(51, 187, 90, 0.3)', 'rgba(0,30, 100, 0.3)'],
                                }
                            ]
                            }
                        />) : (<div style={{height: '400px'}} />) }
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