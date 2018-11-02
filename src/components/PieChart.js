import {Card } from '@rmwc/card';

import React from 'react';
import PropTypes from 'prop-types'
import {Typography} from '@rmwc/typography';

import 'chart.js/dist/Chart.min.js'

export default class PieChart extends React.Component {
    constructor(props){
        super(props)
        this.id = 'pieChartRoot-' + Math.floor(Math.random() * 10000)
    }
    componentDidMount(){
        pieChart(this.id, this.props)
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

PieChart.propTypes = {
    title: PropTypes.string,
    xLabels: PropTypes.arrayOf(PropTypes.string || PropTypes.number).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            dataPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
            colors: PropTypes.arrayOf(PropTypes.string).isRequired,
            hoverColors: PropTypes.arrayOf(PropTypes.string),
        }
    )),
    labels: PropTypes.array
}

let pieChart = (id, props) => new window.Chart(document.getElementById(id).getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: props.xLabels,
        datasets: props.data.map(data => 
            ({
                backgroundColor: data.colors,
                hoverBackgroundColor: data.hoverColors || data.colors,
                borderWidth: [1,1,1],
                data: data.dataPoints,
            }))
    }
});
