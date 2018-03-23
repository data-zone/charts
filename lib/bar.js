'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _echartsForReact = require('echarts-for-react');

var _echartsForReact2 = _interopRequireDefault(_echartsForReact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_PureComponent) {
  _inherits(_class, _PureComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var option = getOption(this.props);

      return _react2.default.createElement(_echartsForReact2.default, {
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%'
        },
        option: option
      });
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

  var _legend = [];
  var labels = [];
  var series = {}; // renderFields.reduce((last, { value: key }) => ({ ...last, [key]: [] }), {});

  renderFields.forEach(function (_ref, i) {
    var label = _ref.label,
        key = _ref.value,
        show = _ref.show;

    if (show !== false) {
      _legend.push({ name: label, color: color[i] });
    }

    series[key] = []; // init
  });

  data.forEach(function (item) {
    labels.push(renderLabel(item));

    renderFields.forEach(function (_ref2) {
      var key = _ref2.value;

      series[key].push(item[key]);
    });
  });

  return _extends({}, restOption, {
    color: color,
    xAxis: _extends({}, xAxis, {
      data: xAxis.type === 'category' ? labels : undefined
    }),
    yAxis: !Array.isArray(yAxis) ? _extends({}, yAxis, {
      data: yAxis.type === 'category' ? labels : undefined
    }) : yAxis.map(function (e) {
      return _extends({}, e, {
        data: yAxis.type === 'category' ? labels : undefined
      });
    }),
    series: renderFields.map(function (_ref3, i) {
      var label = _ref3.label,
          key = _ref3.value;
      return _extends({
        name: label,
        type: renderFields[i].type,
        xAxisIndex: renderFields[i].xAxisIndex || 0,
        yAxisIndex: renderFields[i].yAxisIndex || 0
      }, renderSerie(series[key], i));
    })
  });
}