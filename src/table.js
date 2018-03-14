import render, { PureComponent } from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0 20px;
`;

const Table = styled.table`
  font-size: 14px;
  border-collapse: collapse;
  // border-spacing: 0;
  border: 0;
  width: 100%;
  height: 100%;
`;

const HeaderHead = styled.thead``;

const HeaderRow = styled.tr`
  height: 32px;
`;

const HeaderRowColumn = styled.th`
  text-align: left;
  // padding-left: 20px;
`;

const Header = ({ headers = [], children }) => (
  <HeaderHead>
    <HeaderRow>{children}</HeaderRow>
  </HeaderHead>
);

const Body = styled.tbody`

`;

export default class extends PureComponent {
  static defaultProps = {
    renderHeaderColumn: defaultRenderHeaderColumn,
    renderRow: defaultRenderRow,
  };

  render() {
    const { headerStyle, header, data, renderHeaderColumn, renderRow, ...rest } = this.props;
    return (
      <Wrapper border="0" cellpadding="0" cellspacing="0" {...rest}>
        <Table>
          <Header style={headerStyle}>{header.map((item, i) => renderHeaderColumn(item, i))}</Header>
          <Body>{data.map((d, i) => renderRow(d, header, i))}</Body>
        </Table>
      </Wrapper>
    );
  }
}

function defaultRenderHeaderColumn(one, i) {
  return (
    <HeaderRowColumn key={i}>{one.name || one.label}</HeaderRowColumn>
  );
}

const RowWrapper = styled.tr`
  background-color: ${props => props.bgColor};
`;

const RowColumn = styled.td`
  // padding-left: 20px;
  color: ${props => props.color};
  border-collapse: collapse;
  border-spacing: 0;
`;

function defaultRenderRow(row = {}, header = [], i) {
  return (
    <RowWrapper bgColor={i % 2 === 0 ? '#1e212b' : 'transparent'} key={i}>
      {header.map(({ value: key }, ii) => (
        <RowColumn key={`${i}:${ii}`} color={row[`${key}Color`]}>{row[key]}</RowColumn>
      ))}
    </RowWrapper>
  );
}