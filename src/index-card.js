import React, { PureComponent } from 'react';
import styled from 'styled-components';

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

const IndexNumber = styled.div`
  color: ${props => props.color || '#30ACFF'};
  font-size: 36px;
  width: 100%;
  height: calc(100% - 32px);
  line-height: 57px;
  text-align: center;
`;

// '123456'.replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');

export default class Index extends PureComponent {
  render() {
    const { name, value = 0, valueColor, ...others } = this.props;

    return (
      <Wrapper {...others}>
        <Title>{name}</Title>
        <IndexNumber color={valueColor}>{value.toLocaleString()}</IndexNumber>
      </Wrapper>
    );
  };
}