import React from 'react';
import logo from '../logo.svg';
import { Button, Grid, GridCell } from 'rmwc';
import QuoteCard from '../components/QuoteCard'
import quotes from '../quotes'

const selection = quotes.main.map(quote => quote.replace(/\n/g, '<br/>'))

export default class Default extends React.Component {
    update(){
        this.forceUpdate()
    }
    randomQuote(){
        const main = selection;
        return main[Math.floor(Math.random()*main.length)]
    }
    render() {
        return (
            <div style={{width: '100%'}}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Grid  >

                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='12' span='8'>
                        <QuoteCard title={this.randomQuote()} />
                    </GridCell>
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='0' span='2'>
                    </GridCell>
                    <GridCell phone='12' span='3'>
                        <Button unelevated style={{fontWeight:'bold', backgroundColor:'green'}} onClick={this.update.bind(this)}>Make Me Feel</Button>
                    </GridCell>
                </Grid>

            </div>
        );
    }
}