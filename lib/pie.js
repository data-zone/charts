'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n  display: flex;\n  flex-flow: column nowrap;\n  justify-content: center;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 5px;\n'], ['\n  font-size: 14px;\n  color: #fff;\n  margin-bottom: 5px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  font-size: 18px;\n'], ['\n  font-size: 18px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var TotalWrapper = _styledComponents2.default.div(_templateObject2);

var TotalText = _styledComponents2.default.div(_templateObject3);

var TotalValue = _styledComponents2.default.div(_templateObject4);

var Total = function Total(_ref) {
  var label = _ref.label,
      value = _ref.value,
      valueStyle = _ref.valueStyle;
  return _react2.default.createElement(
    TotalWrapper,
    null,
    _react2.default.createElement(
      TotalText,
      null,
      label
    ),
    _react2.default.createElement(
      TotalValue,
      { style: valueStyle },
      value.toLocaleString()
    )
  );
};

var _class = function (_PureComponent) {
  _inherits(_class, _PureComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _getOption = getOption(this.props),
          total = _getOption.total,
          totalText = _getOption.totalText,
          valueStyle = _getOption.valueStyle,
          option = _getOption.option;

      return _react2.default.createElement(
        Wrapper,
        null,
        _react2.default.createElement(Total, { label: totalText, value: total, valueStyle: valueStyle }),
        _react2.default.createElement(_echartsForReact2.default, {
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          },
          option: option
        })
      );
    }
  }]);

  return _class;
}(_react.PureComponent);

exports.default = _class;


function getOption(props) {
  var option = props.option,
      _props$data = props.data,
      data = _props$data === undefined ? [] : _props$data,
      _props$renderFields = props.renderFields,
      renderFields = _props$renderFields === undefined ? [] : _props$renderFields,
      _props$renderSerie = props.renderSerie,
      renderSerie = _props$renderSerie === undefined ? function (d) {
    return d;
  } : _props$renderSerie,
      _props$renderLabel = props.renderLabel,
      renderLabel = _props$renderLabel === undefined ? function (d) {
    return d.label;
  } : _props$renderLabel,
      rest = _objectWithoutProperties(props, ['option', 'data', 'renderFields', 'renderSerie', 'renderLabel']);

  var color = option.color,
      title = option.title,
      legend = option.legend,
      xAxis = option.xAxis,
      yAxis = option.yAxis,
      restOption = _objectWithoutProperties(option, ['color', 'title', 'legend', 'xAxis', 'yAxis']);

  var series = [_extends({}, renderSerie(data))];

  return _extends({
    option: _extends({}, restOption, {
      color: color,
      series: series
    }),
    total: data.reduce(function (last, now) {
      return last + now.value;
    }, 0)
  }, rest);
}