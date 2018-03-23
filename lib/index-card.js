'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n'], ['\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  color: #EDEDED;\n  font-size: 18px;\n  font-weight: bold;\n\n  width: 100%;\n  height: 32px;\n  line-height: 52px;\n  text-align: center;\n'], ['\n  color: #EDEDED;\n  font-size: 18px;\n  font-weight: bold;\n\n  width: 100%;\n  height: 32px;\n  line-height: 52px;\n  text-align: center;\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  display: block;\n  color: ', ';\n  font-size: 36px;\n  width: 100%;\n  height: calc(100% - 32px);\n  line-height: 57px;\n  text-align: center;\n'], ['\n  display: block;\n  color: ', ';\n  font-size: 36px;\n  width: 100%;\n  height: calc(100% - 32px);\n  line-height: 57px;\n  text-align: center;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _reactCountup = require('react-countup');

var _reactCountup2 = _interopRequireDefault(_reactCountup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject);

var Title = _styledComponents2.default.div(_templateObject2);

var IndexNumber = (0, _styledComponents2.default)(_reactCountup2.default)(_templateObject3, function (props) {
  return props.color || '#30ACFF';
});

// '123456'.replace(/(?=(?!^)(?:\d{3})+(?:\.|$))(\d{3}(\.\d+$)?)/g, ',$1');

var Index = function (_PureComponent) {
  _inherits(Index, _PureComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      start: 0,
      end: _this.props.value
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        this.setState({
          start: this.props.value,
          end: nextProps.value
        });
      }
    }
  }, {
    key: 'getIndexNumber',
    value: function getIndexNumber() {
      var _props = this.props,
          animation = _props.animation,
          decimals = _props.decimals,
          color = _props.color,
          valueColor = _props.valueColor;
      var _state = this.state,
          start = _state.start,
          end = _state.end;


      if (!animation) {
        return _react2.default.createElement(
          IndexNumber,
          { color: valueColor },
          value.toLocaleString()
        );
      }

      return _react2.default.createElement(IndexNumber, {
        color: color || valueColor,
        start: start,
        end: end,
        separator: ',',
        decimals: decimals,
        decimal: '.',
        useEasing: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          name = _props2.name,
          color = _props2.color,
          valueColor = _props2.valueColor,
          decimals = _props2.decimals,
          animation = _props2.animation,
          others = _objectWithoutProperties(_props2, ['name', 'color', 'valueColor', 'decimals', 'animation']);

      return _react2.default.createElement(
        Wrapper,
        others,
        _react2.default.createElement(
          Title,
          null,
          name
        ),
        this.getIndexNumber()
      );
    }
  }]);

  return Index;
}(_react.PureComponent);

Index.defaultProps = {
  decimals: 0,
  animation: true
};
exports.default = Index;