import {Card } from '@rmwc/card';

import React from 'react';
import PropTypes from 'prop-types'
import {Typography} from '@rmwc/typography';

import 'chart.js/dist/Chart.min.js'

export default class PolarChart extends React.Component {
    constructor(props){
        super(props)
        this.id = 'pieChartRoot-' + Math.floor(Math.random() * 10000)
    }
    componentDidMount(){
        polarChart(this.id, this.props)
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

PolarChart.propTypes = {
    title: PropTypes.string,
    labels: PropTypes.arrayOf(PropTypes.string || PropTypes.number).isRequired,
    data: PropTypes.arrayOf(PropTypes.shape(
        {
            dataPoints: PropTypes.arrayOf(PropTypes.number).isRequired,
            colors: PropTypes.arrayOf(PropTypes.string).isRequired,
        }
    )),
}

let polarChart = (id, props) => new window.Chart(document.getElementById(id).getContext('2d'), {
    type: 'polarArea',
    data: {
        labels: props.labels,
        datasets: props.data.map(data => 
            ({
                backgroundColor: data.colors,
                data: data.dataPoints,
            }))
    }
});
