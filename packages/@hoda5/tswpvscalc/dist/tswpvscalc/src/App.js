"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// tslint:disable-next-line:no-debugger
debugger;
var tswpvssoma_1 = require("@hoda5/tswpvssoma");
// import {dobro} from "@hoda5/tswpvdobro"
// console.log( "1+2=", soma(1,2) )
// console.log( "dobre de 3=", dobro(3) )
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", { className: "App" },
            React.createElement("header", { className: "App-header" },
                React.createElement("h1", { className: "App-title" }, "Welcome to React")),
            React.createElement("p", { className: "App-intro" },
                "1 + 2 = ",
                tswpvssoma_1.soma(1, 2))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map