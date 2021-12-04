function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var html2canvas = _interopDefault(require('html2canvas'));
var StackBlur = require('stackblur-canvas');

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;

  _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function debounce(callback, wait, context) {
  if (context === void 0) {
    context = this;
  }

  var timeout = null;
  var callbackArgs = null;

  var later = function later() {
    return callback.apply(context, callbackArgs);
  };

  return function () {
    callbackArgs = arguments;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

var ImgNoise = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAgAElEQVR4Xk3dCdR21RjG8X0kWqbIEBkjc+ZEPhKRDBkyZwgnIpF5zJDMkUjmzBkyf4YMkciQzJkzZCYikUiG9dtr/a3vWetd7/s+zzl73/u+r+u6773PPudZttxyy/Vb3/rWuM51rjPueMc7jkc84hHjO9/5zrjnPe85Pvaxj43LXe5y45rXvOa4ylWuMs4888zx8pe/fFz0ohcdf/rTn8ZLXvKS8YpXvGL8+Mc/Hl/4whfGkUceOf/eYostxnbbbTd+85vfjBe84AXj+c9//mznGte4xthzzz3HhS984bHbbruNG93oRuOGN7zhOOqoo8Zf//rX8cpXvnJ85StfGb/61a/GC1/4wnnMH/7wh3Gve91rPOEJTxgPechD5nHa0f7mm28+vJ75zGeOrbfeen52j3vcYxx66KHzc20961nPGp/5zGfGzW52s/Hf//53XOta15rnfO973xtPe9rTxgc/+MHxr3/9axx99NHT7te+9rVj2223nWPUBvt333338ba3vW0ce+yx4/e///144hOfOG5729vO36effvq4whWuME499dR57FlnnTXufOc7T9s3btw4fvrTn4599913HqO985znPOMvf/nLuO51rzv99fCHP3yO7WUve9l4zWteM5azzjprvfzlLz8H8Y9//GMa86EPfWg65L73ve902kMf+tDx5Cc/eTz3uc8dl7jEJcZb3vKWOahddtllvPvd7x7f+MY3xuc+97lxyCGHjKtf/erjPve5zzTk9re//dh1113HVlttNQO4zz77zAC8733vmwZzzhe/+MVxm9vcZrz3ve8dl7rUpWbw3/zmN48b3OAG8xhOuP71rz8dASQcud9++81BCcKrXvWqcfe7333a/qhHPWo69dGPfvQEwdvf/vZx/vOff7zjHe+YQNHvl770pekMx22zzTbjox/96ASCsQAX5wHoi170ovHZz3522sPRd7jDHea4gemKV7zi2LBhwwym47XtB5DZxQcXuMAFpk0HHHDADNz3v//9sffee4899thjOv8jH/nI7Pvxj3/8uP/97z/9xN/L2Wefvd7vfvcbN7nJTaYRH/jAB8btbne7OXgnb7/99nPQAvbDH/5wfPvb356o+/rXvz4+/vGPTwTvsMMO8/1Pf/rT05EG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';

var Acrylic = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Acrylic, _React$Component);

  function Acrylic(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;

    _this.showHideElement = function () {
      var $$acrylics = document.querySelectorAll('.js-acrylic');

      if ($$acrylics) {
        $$acrylics.forEach(function ($acrylic) {
          $acrylic.style.display = 'none';
          var vv = setTimeout(function () {
            $acrylic.style.display = 'block';
            clearTimeout(vv);
          }, 20);
        });
      }
    };

    _this.contentEl = React.createRef();
    _this.blurEl = React.createRef();
    _this.canvas = null;
    return _this;
  }

  var _proto = Acrylic.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    var self = this;
    this.showHideElement();

    var init = function init(firstTime) {
      html2canvas(document.body).then(function (canvas) {
        var _self$blurEl$current;

        self.canvas = canvas;
        (_self$blurEl$current = self.blurEl.current) === null || _self$blurEl$current === void 0 ? void 0 : _self$blurEl$current.appendChild(self.canvas);
        canvas.style.position = 'absolute';
        var clientRect = canvas.getBoundingClientRect();
        canvas.style.top = -clientRect.top + window.scrollY + "px";
        canvas.style.left = -clientRect.left + window.scrollX + "px";
        self.canvas.style.transform = "translate(-" + window.scrollX + "px, -" + window.scrollY + "px)";

        var blurv;
        self.props.blur ? blurv = self.props.blur : blurv = 30;
        StackBlur.canvasRGB(canvas, 0, 0, canvas.width, canvas.height, blurv);
      });
    };

    init();
    window.addEventListener('scroll', function () {
      if (_this2.props.position === 'fixed') {
        if (self.canvas) {
          self.canvas.style.transform = "translate(-" + window.scrollX + "px, -" + window.scrollY + "px)";
        }
      }
    });
    window.addEventListener('resize', debounce(function () {
      if (_this2.blurEl.current) {
        _this2.blurEl.current.innerHTML = '';
      }

      setTimeout(function () {
        _this2.showHideElement();

        init();
      }, 10);

      if (_this2.canvas) {
        _this2.canvas.width = window.innerWidth;
      }
    }, 100));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        _this$props$position = _this$props.position,
        position = _this$props$position === void 0 ? 'fixed' : _this$props$position,
        _this$props$left = _this$props.left,
        left = _this$props$left === void 0 ? 0 : _this$props$left,
        _this$props$top = _this$props.top,
        top = _this$props$top === void 0 ? 0 : _this$props$top,
        _this$props$width = _this$props.width,
        width = _this$props$width === void 0 ? 0 : _this$props$width,
        _this$props$height = _this$props.height,
        height = _this$props$height === void 0 ? 0 : _this$props$height,
        _this$props$colorOver = _this$props.colorOverlay,
        colorOverlay = _this$props$colorOver === void 0 ? '#fff' : _this$props$colorOver,
        _this$props$opacity = _this$props.opacity,
        opacity = _this$props$opacity === void 0 ? 0.5 : _this$props$opacity,
        _this$props$borderRad = _this$props.borderRadius,
        borderRadius = _this$props$borderRad === void 0 ? 0 : _this$props$borderRad,
        _this$props$boxShadow = _this$props.boxShadow,
        boxShadow = _this$props$boxShadow === void 0 ? '' : _this$props$boxShadow,
        _this$props$className = _this$props.className,
        className = _this$props$className === void 0 ? '' : _this$props$className;
    return React.createElement("span", {
      className: 'js-acrylic ' + className
    }, React.createElement("span", {
      ref: this.contentEl,
      style: {
        position: position,
        left: left,
        top: top,
        height: height,
        width: width,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        zIndex: 2
      }
    }, React.createElement("span", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: borderRadius,
        background: colorOverlay,
        opacity: opacity,
        content: '',
        zIndex: -1
      }
    }), React.createElement("span", {
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        borderRadius: borderRadius,
        background: "url(" + ImgNoise + ")",
        opacity: opacity / 3,
        content: '',
        zIndex: -2
      }
    }), this.props.children), React.createElement("span", {
      style: {
        position: position,
        left: left,
        top: top,
        height: height,
        width: width,
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        zIndex: 1,
        overflow: 'hidden'
      },
      ref: this.blurEl
    }));
  };

  return Acrylic;
}(React.Component);

Acrylic.defaultProps = {
  blur: 20,
  position: 'fixed',
  left: 0,
  top: 0,
  width: 0,
  height: 0,
  colorOverlay: '#fff',
  opacity: 0.5,
  borderRadius: 0,
  boxShadow: '',
  className: ''
};

module.exports = Acrylic;
//# sourceMappingURL=index.js.map
