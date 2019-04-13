define(["require", "exports", "deskrt"], function (require, exports, DeskRT) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.data = {
        code: "var trim = function (text) {\n    return text.replace(/^\\s+|\\s+$/g, \"\");\n};"
    };
    exports.watch = {
        code: function () {
            DeskRT.highlight(this.$refs.codeEle, this.$data.code);
        }
    };
});
