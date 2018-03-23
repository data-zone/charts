'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  padding: 0 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  border-collapse: collapse;\n  // border-spacing: 0;\n  border: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  font-size: 14px;\n  border-collapse: collapse;\n  // border-spacing: 0;\n  border: 0;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject3 = _taggedTemplateLiteral([''], ['']),
    _templateObject4 = _taggedTemplateLiteral(['\n  height: 32px;\n'], ['\n  height: 32px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  text-align: left;\n  // padding-left: 20px;\n'], ['\n  text-align: left;\n  // padding-left: 20px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n\n'], ['\n\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  background-color: ', ';\n'], ['\n  background-color: ', ';\n']),
    _templateObject8 = _taggedTemplateLiteral(['\n  // padding-left: 20px;\n  color: ', ';\n  border-collapse: collapse;\n  border-spacing: 0;\n'], ['\n  // padding-left: 20px;\n  color: ', ';\n  border-collapse: collapse;\n  border-spacing: 0;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Table = _styledComponents2.default.table(_templateObject2);

var HeaderHead = _styledComponents2.default.thead(_templateObject3);

var HeaderRow = _styledComponents2.default.tr(_templateObject4);

var HeaderRowColumn = _styledComponents2.default.th(_templateObject5);

var Header = function Header(_ref) {
  var _ref$headers = _ref.headers,
      headers = _ref$headers === undefined ? [] : _ref$headers,
      children = _ref.children;
  return _react2.default.createElement(
    HeaderHead,
    null,
    _react2.default.createElement(
      HeaderRow,
      null,
      children
    )
  );
};

var Body = _styledComponents2.default.tbody(_templateObject6);

var _class = function (_PureComponent) {
  _inherits(_class, _PureComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          headerStyle = _props.headerStyle,
          header = _props.header,
          data = _props.data,
          renderHeaderColumn = _props.renderHeaderColumn,
          renderRow = _props.renderRow,
          rest = _objectWithoutProperties(_props, ['headerStyle', 'header', 'data', 'renderHeaderColumn', 'renderRow']);

      return _react2.default.createElement(
        Wrapper,
        _extends({ border: '0', cellpadding: '0', cellspacing: '0' }, rest),
        _react2.default.createElement(
          Table,
          null,
          _react2.default.createElement(
            Header,
            { style: headerStyle },
            header.map(function (item, i) {
              return renderHeaderColumn(item, i);
            })
          ),
          _react2.default.createElement(
            Body,
            null,
            data.map(function (d, i) {
              return renderRow(d, header, i);
            })
          )
        )
      );
    }
  }]);

  return _class;
}(_react.PureComponent);

_class.defaultProps = {
  renderHeaderColumn: defaultRenderHeaderColumn,
  renderRow: defaultRenderRow
};
exports.default = _class;


function defaultRenderHeaderColumn(one, i) {
  return _react2.default.createElement(
    HeaderRowColumn,
    { key: i },
    one.name || one.label
  );
}

var RowWrapper = _styledComponents2.default.tr(_templateObject7, function (props) {
  return props.bgColor;
});

var RowColumn = _styledComponents2.default.td(_templateObject8, function (props) {
  return props.color;
});

function defaultRenderRow() {
  var row = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var header = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var i = arguments[2];

  return _react2.default.createElement(
    RowWrapper,
    { bgColor: i % 2 === 0 ? '#1e212b' : 'transparent', key: i },
    header.map(function (_ref2, ii) {
      var key = _ref2.value;
      return _react2.default.createElement(
        RowColumn,
        { key: i + ':' + ii, color: row[key + 'Color'] },
        row[key]
      );
    })
  );
}