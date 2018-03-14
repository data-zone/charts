import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Index from './index-card';
import Bar from './bar';
import Line from './line';
import Pie from './pie';
import Table from './table';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #080A20;
  display: flex;
  flex-flow: column nowrap;
  overflow: hidden;
  padding: 20px 10px;
  color: #fff;
`;

const Title = styled.div`
  position: relative;
  // padding-top: ${props => props.top};
  padding-left: 20px; // ${props => props.left};
  height: 32px;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
  display: flex;
  align-items: center;
`;

const LegendWrap = styled.div`
  padding-left: 20px;
  // position: absolute;
  // top: ${props => props.top};
  // right: ${props => props.right};
  // bottom: ${props => props.bottom};
  // left: ${props => props.left};
`;

const LegendItem = styled.div`
  float: left;
  margin-right: 20px;
`;

const LegendIcon = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 5px;
`;

const LegendName = styled.span`
  font-size: 12px;
  color: #ccc;
`;

const Legend = ({ data = [], legendStyle }) => (
  <LegendWrap style={legendStyle}>
    {data.map(({ name, color }) => (
      <LegendItem key={name}>
        <LegendIcon color={color} />
        <LegendName>{name}</LegendName>
      </LegendItem>
    ))}
  </LegendWrap>
);

const Body = styled.div`
  position: relative;
  flex: 1;
`;

export default class extends PureComponent {
  static defaultProps = {
    type: 'bar',
  };

  render() {
    const { type = 'bar' } = this.props;
    if (type === 'index') {
      return <Index {...this.props} />;
    }

    const { title, legend, option, ...rest } = getOption(this.props);
    const Chart = getChart(type);

    return (
      <Wrapper {...rest}>
        <Title {...title}>{title.text}</Title>
        <Legend {...legend} />
        <Body>
          <Chart {...this.props} />
        </Body>
      </Wrapper>
    );
  }
}

function getOption(props) {
  const { title: textTitle, type, option = {}, data = [], renderFields = [], legendStyle, ...rest } = props;
  const { color, title, legend } = option;

  let _legend = [];
  // type === 'pie'
  //   ? data.map(({ name }, i) => ({ name, color: color[i] }))
  //   : renderFields.map(({ label }, i) => ({  name: label, color: color[i] }));
  
  renderFields.forEach(({ name, label, value: key, show, ...rest }, i) => {
    if (show === false) {
      return ;
    }
    
    if (type !== 'pie') {
      _legend.push({ name: label, color: color[i] });
    }
  });

  if (type === 'pie') {
    _legend = data.map(({ name }, i) => ({ name, color: color[i] }));
  }

  return {
    type,
    title: {
      ...title,
      text: textTitle || title.text,
    },
    legend: {
      ...legend,
      legendStyle: ['bar', 'line'].indexOf(type) === -1 ? {} : {
        position: 'absolute',
        top: 20,
        right: 10,
        ...legendStyle,
      },
      data: _legend,
    },
    ...rest,
  };
}

const CHARTS = {
  bar: Bar,
  line: Line,
  pie: Pie,
  table: Table,
};

function getChart(type) {
  return CHARTS[type] || (() => null);
}