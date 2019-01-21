import React from 'react';
import fetchJsonp from 'fetch-jsonp'
import logo from '../logo.svg';
import { Button, Grid, GridCell } from 'rmwc';
import QuoteCard from '../components/QuoteCard'
import PolarChart from '../components/PolarChart'
import Metric from '../components/Metric'
import story from '../quotes/hardTimes'
import '../css/default.css'

const selection = story.main.map(quote => quote.replace(/\n/g, '<br/>'))

export default class Default extends React.Component {
    state = { data: {}}
    async componentDidMount(){
        const url = 'http://coffeelux.club:4000';
        const response = await fetchJsonp(url);
        const data = await response.json();
        console.log(data)
        this.setState({data: data.consumption[0]})
    }
    render() {
        const keys = Object.keys(this.state.data);
        const values = Object.values(this.state.data).map(value => parseInt(value));
        console.log(values)
        return (
            <div style={{background: '#ddd', width: '100%'}}>
                <Grid  >
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='12' span='8'>
                        <div className='img-container'>
                            <Metric input={values[0]} />
                        </div>
                        <div className='img-container'>
                            <img src='/img/coffeecup.png' alt='Coffee Cup' />
                        </div>
                        <div className='metric-label'>
                            <Metric input='DAILY CUP COUNT' />
                        </div>
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
