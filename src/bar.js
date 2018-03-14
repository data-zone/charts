import React, { PureComponent } from 'react';
import Echarts from 'echarts-for-react';

export default class extends PureComponent {
  render() {
    const option = getOption(this.props);

    return (
      <Echarts
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        option={option}
      />
    );
  }
}

function getOption(props) {
  const { option, data = [], renderFields = [], renderSerie = d => d, renderLabel = d => d.label, ...rest } = props;
  const { color, title, legend, xAxis, yAxis, ...restOption } = option;

  const _legend = [];
  let labels = [];
  let series = {}; // renderFields.reduce((last, { value: key }) => ({ ...last, [key]: [] }), {});

  renderFields.forEach(({ label, value: key, show }, i) => {
    if (show !== false) {
      _legend.push({ name: label, color: color[i] });
    }
    
    series[key] = []; // init
  });

  data.forEach(item => {
    labels.push(renderLabel(item));

    renderFields.forEach(({ value: key }) => {
      series[key].push(item[key]);
    });
  });

  return {
    ...restOption,
    color,
    xAxis: {
      ...xAxis,
      data: xAxis.type === 'category' ? labels : undefined,
    },
    yAxis: !Array.isArray(yAxis) ? ({
      ...yAxis,
      data: yAxis.type === 'category' ? labels : undefined,
    }) : yAxis.map(e => ({
      ...e,
      data: yAxis.type === 'category' ? labels : undefined,
    })),
    series: renderFields.map(({ label, value: key }, i) => ({
      name: label,
      type: renderFields[i].type,
      xAxisIndex: renderFields[i].xAxisIndex || 0,
      yAxisIndex: renderFields[i].yAxisIndex || 0,
      ...renderSerie(series[key], i),
    })),
  };
}