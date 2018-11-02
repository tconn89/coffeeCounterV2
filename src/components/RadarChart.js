import {Card } from '@rmwc/card';

import React from 'react';
import PropTypes from 'prop-types'
import {Typography} from '@rmwc/typography';

import 'chart.js/dist/Chart.min.js'

export default class RadarChart extends React.Component {
    constructor(props){
        super(props)
        this.id = 'radarChartRoot-' + Math.floor(Math.random() * 10000)
    }
    componentDidMount(){
        radarChart(this.id, this.props)
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

RadarChart.propTypes = {
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            dataPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
            label: PropTypes.string,
            color: PropTypes.string,
        }
    )),
}

// TODO background color parsing and validation
const default1 = 'rgba(51, 179, 90, 1)';
const radarChart = (id, props) => new window.Chart(document.getElementById(id).getContext('2d'), {
    type: 'radar',
    data: {
        labels: props.labels,
        datasets: props.data.map(data => 
            ({
                label: data.label || "Data Set One",
                backgroundColor: fillColor(data.color || default1),
                borderColor: data.color || default1,
                borderWidth: 2,
                pointBorderColor: data.color || default1,
                pointBackgroundColor: data.color || default1,
                pointHoverBackgroundColor: data.color || "#222",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointHitRadius: 10,
                data: data.dataPoints,
            }))
    }
});

function fillColor(color){
    const rgb = color.match(/\d+/g).map(Number).slice(0,3)
    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, 0.38)`
}
