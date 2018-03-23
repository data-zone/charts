import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Countup from 'react-countup';

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  color: #EDEDED;
  font-size: 18px;
  font-weight: bold;

  width: 100%;
  height: 32px;
  line-height: 52px;
  text-align: center;
`;

const IndexNumber = styled(Countup)`
  display: block;
  color: ${props => props.color || '#30ACFF'};
  font-size: 36px;
  width: 100%;
  height: calc(100% - 32px);
  line-height: 57px;
  text-align: center;
`;

// '123456'.replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');

export default class Index extends PureComponent {
  static defaultProps = {
    decimals: 0,
    animation: true,
  };

  state = {
    start: 0,
    end: this.props.value,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.value !== nextProps.value) {
      this.setState({
        start: this.props.value,
        end: nextProps.value,
      });
    }
  }

  getIndexNumber() {
    const { animation, decimals, color, valueColor } = this.props;
    const { start, end } = this.state;

    if (!animation) {
      return (<IndexNumber color={valueColor}>{value.toLocaleString()}</IndexNumber>);
    }

    return (
      <IndexNumber
        color={color || valueColor}
        start={start}
        end={end}
        separator=","
        decimals={decimals}
        decimal="."
        useEasing
      />
    );
  }

  render() {
    const { name, color, valueColor, decimals, animation, ...others } = this.props;

    return (
      <Wrapper {...others}>
        <Title>{name}</Title>
        {this.getIndexNumber()}
      </Wrapper>
    );
  };
}