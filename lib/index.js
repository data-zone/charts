'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #080A20;\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: hidden;\n  padding: 20px 10px;\n  color: #fff;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: #080A20;\n  display: flex;\n  flex-flow: column nowrap;\n  overflow: hidden;\n  padding: 20px 10px;\n  color: #fff;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  // padding-top: ', ';\n  padding-left: 20px; // ', ';\n  height: 32px;\n  color: ', ';\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n'], ['\n  position: relative;\n  // padding-top: ', ';\n  padding-left: 20px; // ', ';\n  height: 32px;\n  color: ', ';\n  font-size: ', ';\n  display: flex;\n  align-items: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  padding-left: 20px;\n  // position: absolute;\n  // top: ', ';\n  // right: ', ';\n  // bottom: ', ';\n  // left: ', ';\n'], ['\n  padding-left: 20px;\n  // position: absolute;\n  // top: ', ';\n  // right: ', ';\n  // bottom: ', ';\n  // left: ', ';\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  float: left;\n  margin-right: 20px;\n'], ['\n  float: left;\n  margin-right: 20px;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ', ';\n  margin-right: 5px;\n'], ['\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: ', ';\n  margin-right: 5px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n  font-size: 12px;\n  color: #ccc;\n'], ['\n  font-size: 12px;\n  color: #ccc;\n']),
    _templateObject7 = _taggedTemplateLiteral(['\n  position: relative;\n  flex: 1;\n'], ['\n  position: relative;\n  flex: 1;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _indexCard = require('./index-card');

var _indexCard2 = _interopRequireDefault(_indexCard);

var _bar = require('./bar');

var _bar2 = _interopRequireDefault(_bar);

var _line = require('./line');

var _line2 = _interopRequireDefault(_line);

var _pie = require('./pie');

var _pie2 = _interopRequireDefault(_pie);

var _table = require('./table');

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.div(_templateObject2, function (props) {
  return props.top;
}, function (props) {
  return props.left;
}, function (props) {
  return props.color;
}, function (props) {
  return props.fontSize;
});

var LegendWrap = _styledComponents2.default.div(_templateObject3, function (props) {
  return props.top;
}, function (props) {
  return props.right;
}, function (props) {
  return props.bottom;
}, function (props) {
  return props.left;
});

var LegendItem = _styledComponents2.default.div(_templateObject4);

var LegendIcon = _styledComponents2.default.span(_templateObject5, function (props) {
  return props.color;
});

var LegendName = _styledComponents2.default.span(_templateObject6);

var Legend = function Legend(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === undefined ? [] : _ref$data,
      legendStyle = _ref.legendStyle;
  return _react2.default.createElement(
    LegendWrap,
    { style: legendStyle },
    data.map(function (_ref2) {
      var name = _ref2.name,
          color = _ref2.color;
      return _react2.default.createElement(
        LegendItem,
        { key: name },
        _react2.default.createElement(LegendIcon, { color: color }),
        _react2.default.createElement(
          LegendName,
          null,
          name
        )
      );
    })
  );
};

var Body = _styledComponents2.default.div(_templateObject7);

var _class = function (_PureComponent) {
  _inherits(_class, _PureComponent);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  _createClass(_class, [{
    key: 'render',
    value: function render() {
      var _props$type = this.props.type,
          type = _props$type === undefined ? 'bar' : _props$type;

      if (type === 'index') {
        return _react2.default.createElement(_indexCard2.default, this.props);
      }

      var _getOption = getOption(this.props),
          title = _getOption.title,
          legend = _getOption.legend,
          option = _getOption.option,
          rest = _objectWithoutProperties(_getOption, ['title', 'legend', 'option']);

      var Chart = getChart(type);

      return _react2.default.createElement(
        Wrapper,
        rest,
        _react2.default.createElement(
          Title,
          title,
          title.text
        ),
        _react2.default.createElement(Legend, legend),
        _react2.default.createElement(
          Body,
          null,
          _react2.default.createElement(Chart, this.props)
        )
      );
    }
  }]);

  return _class;
}(_react.PureComponent);

_class.defaultProps = {
  type: 'bar'
};
exports.default = _class;


function getOption(props) {
  var textTitle = props.title,
      type = props.type,
      _props$option = props.option,
      option = _props$option === undefined ? {} : _props$option,
      _props$data = props.data,
      data = _props$data === undefined ? [] : _props$data,
      _props$renderFields = props.renderFields,
      renderFields = _props$renderFields === undefined ? [] : _props$renderFields,
      legendStyle = props.legendStyle,
      rest = _objectWithoutProperties(props, ['title', 'type', 'option', 'data', 'renderFields', 'legendStyle']);

  var color = option.color,
      title = option.title,
      legend = option.legend;


  var _legend = [];
  // type === 'pie'
  //   ? data.map(({ name }, i) => ({ name, color: color[i] }))
  //   : renderFields.map(({ label }, i) => ({  name: label, color: color[i] }));

  renderFields.forEach(function (_ref3, i) {
    var name = _ref3.name,
        label = _ref3.label,
        key = _ref3.value,
        show = _ref3.show,
        rest = _objectWithoutProperties(_ref3, ['name', 'label', 'value', 'show']);

    if (show === false) {
      return;
    }

    if (type !== 'pie') {
      _legend.push({ name: label, color: color[i] });
    }
  });

  if (type === 'pie') {
    _legend = data.map(function (_ref4, i) {
      var name = _ref4.name;
      return { name: name, color: color[i] };
    });
  }

  return _extends({
    type: type,
    title: _extends({}, title, {
      text: textTitle || title.text
    }),
    legend: _extends({}, legend, {
      legendStyle: ['bar', 'line'].indexOf(type) === -1 ? {} : _extends({
        position: 'absolute',
        top: 20,
        right: 10
      }, legendStyle),
      data: _legend
    })
  }, rest);
}

var CHARTS = {
  bar: _bar2.default,
  line: _line2.default,
  pie: _pie2.default,
  table: _table2.default
};

function getChart(type) {
  return CHARTS[type] || function () {
    return null;
  };
}