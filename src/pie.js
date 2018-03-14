import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Echarts from 'echarts-for-react';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const TotalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const TotalText = styled.div`
  font-size: 14px;
  color: #fff;
  margin-bottom: 5px;
`;

const TotalValue = styled.div`
  font-size: 18px;
`;

const Total = ({ label, value, valueStyle }) => (
  <TotalWrapper>
    <TotalText>{label}</TotalText>
    <TotalValue style={valueStyle}>{value.toLocaleString()}</TotalValue>
  </TotalWrapper>
);

export default class extends PureComponent {
  render() {
    const { total, totalText, valueStyle, option } = getOption(this.props);

    return (
      <Wrapper>
         <Total label={totalText} value={total} valueStyle={valueStyle} />
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
      </Wrapper>
    );
  }
}

function getOption(props) {
  const { option, data = [], renderFields = [], renderSerie = d => d, renderLabel = d => d.label, ...rest } = props;
  const { color, title, legend, xAxis, yAxis, ...restOption } = option;

  const series = [{
    // name: title,
    ...renderSerie(data),
  }];

  return {
    option: {
      ...restOption,
      color,
      series,
    },
    total: data.reduce((last, now) => last + now.value, 0),
    ...rest,
  };
}