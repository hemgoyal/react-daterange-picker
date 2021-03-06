Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bemCx = require('./bemCx');

var _bemCx2 = _interopRequireDefault(_bemCx);

var BemMixin = {
  propTypes: {
    bemNamespace: _react2['default'].PropTypes.string,
    bemBlock: _react2['default'].PropTypes.string
  },

  contextTypes: {
    bemNamespace: _react2['default'].PropTypes.string,
    bemBlock: _react2['default'].PropTypes.string
  },

  childContextTypes: {
    bemNamespace: _react2['default'].PropTypes.string,
    bemBlock: _react2['default'].PropTypes.string
  },

  getChildContext: function getChildContext() {
    return {
      bemNamespace: this.getBemNamespace(),
      bemBlock: this.getBemBlock()
    };
  },

  getBemNamespace: function getBemNamespace() {
    if (this.props.bemNamespace) {
      return this.props.bemNamespace;
    }
    if (this.context.bemNamespace) {
      return this.context.bemNamespace;
    }
    return null;
  },

  getBemBlock: function getBemBlock() {
    if (this.props.bemBlock) {
      return this.props.bemBlock;
    }
    if (this.context.bemBlock) {
      return this.context.bemBlock;
    }
    return null;
  },

  cx: function cx() {
    var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var opts = {
      namespace: this.getBemNamespace(),
      element: this.constructor.displayName,
      block: this.getBemBlock()
    };

    _extends(opts, options);
    return (0, _bemCx2['default'])(opts);
  }
};

exports['default'] = BemMixin;
module.exports = exports['default'];