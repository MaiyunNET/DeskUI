"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.data = exports.computed = exports.props = void 0;
exports.props = {
    "disabled": {
        "default": false
    },
    "focus": {
        "default": false
    },
    "width": {
        "default": undefined
    },
    "height": {
        "default": undefined
    },
    "left": {
        "default": 0
    },
    "top": {
        "default": 0
    },
    "zIndex": {
        "default": 0
    },
    "direction": {
        "default": "h"
    },
    "flex": {
        "default": ""
    },
    "padding": {
        "default": undefined
    },
    "area": {
        "default": "all"
    }
};
exports.computed = {
    "widthPx": function () {
        if (this.width !== undefined) {
            return this.width + "px";
        }
        if (this.flex !== "") {
            var dir = this.$parent.$data._controlName === "select" ? this.$parent.$parent.direction : this.$parent.direction;
            return dir ? (dir === "v" ? undefined : "0") : undefined;
        }
    },
    "heightPx": function () {
        if (this.height !== undefined) {
            return this.height + "px";
        }
        if (this.flex !== "") {
            var dir = this.$parent.$data._controlName === "select" ? this.$parent.$parent.direction : this.$parent.direction;
            return dir.direction ? (dir.direction === "v" ? "0" : undefined) : undefined;
        }
    }
};
exports.data = {
    "popOpen": false
};
exports.methods = {
    showPop: function (event, area) {
        if (this.area === "arrow" && area === "all") {
            console.log(this.area, area);
            this._tap(event);
            return;
        }
        if (this.popOpen) {
            ClickGo.hidePop();
            return;
        }
        var pop = null;
        for (var _i = 0, _a = this.$children; _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.$data._controlName !== "greatselect-pop") {
                continue;
            }
            pop = item;
            break;
        }
        if (pop) {
            pop.widthData = this.$el.offsetWidth;
            ClickGo.showPop(pop, this.$el);
        }
        this._tap(event);
    },
    down: function (e) {
        if (e instanceof MouseEvent && ClickGo.hasTouch) {
            return;
        }
        this.stopPropagation(e);
        this._down();
    }
};
