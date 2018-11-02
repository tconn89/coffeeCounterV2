import React from 'react';
import logo from '../logo.svg';
import { Grid, GridCell } from 'rmwc';
import LineChart from '../components/LineChart';
import BarChart from '../components/BarChart';
import PieChart from '../components/PieChart';
import PolarChart from '../components/PolarChart';
import RadarChart from '../components/RadarChart';

export default class Default extends React.Component {
    render() {
        return (
            <div style={{width: '100%'}}>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </header>
                <Grid  >
                    <GridCell span='6'>
                    <LineChart 
                        title='Google Queries in Q1 - Q2'
                        xLabels={["January", "February", "March", "April", "May", "June", "July"]}
                        data={
                        [
                            {
                                label: "Chrome",
                                color: "rgba(51, 179, 90, 1)",
                                dataPoints: [50, 20, 40, 31, 32, 22, 12],
                            },
                            {
                                label: "FireFox",
                                color: "rgba(75,192,192,1)",
                                dataPoints: [65, 59, 30, 81, 56, 55, 40],
                            }
                        ]
                        } /></GridCell>
                        <GridCell span='6'>
                        <BarChart
                            title='Searches by Month'
                            xLabels={["January", "February", "March", "April", "May", "June", "July"]}
                            data={
                            [
                                {
                                    label: "Chrome",
                                    color: "rgba(51, 187, 90, 1)",
                                    dataPoints: [50, 20, 40, 31, 32, 22, 12],
                                },
                                {
                                    label: "Firefox",
                                    color: "rgba(75,192,192,1)",
                                    dataPoints: [65, 59, 30, 81, 56, 55, 40],
                                },
                            ]
                            }
                        /></GridCell>
                        <GridCell span='6'>
                            <PieChart
                                title='Dougnuts I Ate Today'
                                xLabels={["Chocolate", "Devils Blueberry", "Glazed" ]}
                                data={
                                [
                                    {
                                        dataPoints: [6, 4, 4],
                                        colors: ["#D2691E", "rgba(75, 192, 192, 1)", 'yellow'],
                                        hoverColors: ["#D2691E", "rgba(75, 192, 192, 1)", 'yellow']
                                    }
                                ]
                                }
                            />
                        </GridCell>
                        <GridCell span='6'>
                            <PolarChart
                                title='Burritos I Ate Today'
                                labels={["Vegan", "Chicken", "Beef", 'Pork' ]}
                                data={
                                [
                                    {
                                        dataPoints: [2, 4, 6, 3],
                                        colors: ["rgba(200, 100, 0, 0.5)", "rgba(75, 192, 192, 0.5)", 'rgba(51, 187, 90, 0.5)', 'rgba(0,30, 100, 0.5)'],
                                    }
                                ]
                                }
                            />
                        </GridCell>
                        <GridCell span='6'>
                            <RadarChart 
                                title='DnD Character Comparison'
                                labels={["Strength", "Agility", "Intelligence", "Luck", "Fortitude" ]}
                                data={
                                [
                                    {
                                        label: "Mine",
                                        color: "rgba(51, 179, 90, 1)",
                                        dataPoints: [50, 20, 40, 81, 32, 22],
                                    },
                                    {
                                        label: "Yours",
                                        color: "rgba(75,192,192,1)",
                                        dataPoints: [20, 59, 30, 31, 56, 55],
                                    }
                                ]
                                } />
                        </GridCell>
                </Grid>

            </div>
        );
    }
}