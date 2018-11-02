import {Card } from '@rmwc/card';

import React from 'react';
import PropTypes from 'prop-types'
import {Typography} from '@rmwc/typography';

import 'chart.js/dist/Chart.min.js'

export default class BarChart extends React.Component {
    constructor(props){
        super(props)
        this.id = 'barChartRoot-' + Math.floor(Math.random() * 10000)
    }
    componentDidMount(){
        barChart(this.id, this.props)
    }
    render() {
        const props = this.props;
        return (
            <Card style={{width: '100%', padding: '10px'}}>
                <Typography style={{marginBottom: '20px', borderBottom: 'lightgrey 1px solid'}} use='headline6'> {props.title}</Typography>
                <canvas id={this.id}></canvas>
            </Card>
        );
    }
}

BarChart.propTypes = {
    title: PropTypes.string,
    xLabels: PropTypes.arrayOf(PropTypes.string || PropTypes.number).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            dataPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
            label: PropTypes.string,
            color: PropTypes.string,
            fill: PropTypes.bool
        }
    )),
    labels: PropTypes.array
}

// TODO background color parsing and validation
const default1 = 'rgba(51, 179, 90, 1)';
let barChart = (id, props) => new window.Chart(document.getElementById(id).getContext('2d'), {
    type: 'bar',
    data: {
        labels: props.xLabels,
        datasets: props.data.map(data => 
            ({
                label: data.label || "Data Set One",
                backgroundColor: data.dataPoints.map(d => fillColor(data.color || default1)),
                borderColor: data.color || default1,
                borderWidth: 1,
                data: data.dataPoints,
            }))
    }
});

function fillColor(color){
    const rgb = color.match(/\d+/g).map(Number).slice(0,3)
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.38)`
}
