"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Entrypoint for the application/widget
var ChatBot = /*#__PURE__*/function () {
  function ChatBot() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$position = _ref.position,
        position = _ref$position === void 0 ? 'bottom-right' : _ref$position;

    _classCallCheck(this, ChatBot);

    console.log('Chatbot created');
    this.position = this.getPosition(position);
    this.open = false;
    this.initialise();
  }
  /**
   * Get the component's position on page.
   */


  _createClass(ChatBot, [{
    key: "getPosition",
    value: function getPosition(position) {
      var _ref2;

      var _position$split = position.split('-'),
          _position$split2 = _slicedToArray(_position$split, 2),
          vertical = _position$split2[0],
          horizontal = _position$split2[1]; // i.e. return:
      // { bottom: 30px, right: 30px } by default


      return _ref2 = {}, _defineProperty(_ref2, vertical, '30px'), _defineProperty(_ref2, horizontal, '30px'), _ref2;
    }
    /**
     * Create all of the elements on the page.
     */

  }, {
    key: "initialise",
    value: function initialise() {
      var _this = this;

      var container = document.createElement('div'); // No matter where you are on page, ensure the bot is always on bottom-right by default

      container.style.position = 'fixed'; // Set the 

      Object.keys(this.position).forEach(function (k) {
        // Set bottom/top and left/right to be the px value provided
        container.style[k] = _this.position[k];
      });
      container.style.backgroundColor = 'red';
      container.style.width = '100px';
      container.style.height = '100px';
      document.body.appendChild(container);
    }
  }]);

  return ChatBot;
}();

var c = new ChatBot();