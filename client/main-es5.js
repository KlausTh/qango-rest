function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _qango__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./qango */
    "./src/app/qango.ts");
    /* harmony import */


    var _qango_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./qango.service */
    "./src/app/qango.service.ts");

    function AppComponent_app_cell_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-cell", 10);
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.colors[i_r1]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", i_r1);
      }
    }

    var _c0 = function _c0() {
      return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(service) {
        _classCallCheck(this, AppComponent);

        this.service = service;
        this.colors = ["red", "red", "yellow", "orange", "red", "red", "red", "yellow", "green", "blue", "orange", "red", "yellow", "green", "green", "blue", "blue", "orange", "orange", "blue", "blue", "green", "green", "yellow", "red", "orange", "blue", "green", "yellow", "red", "red", "red", "orange", "yellow", "red", "red"];
        this.title = 'qango';
        this.status = 0;
        this.game = {
          board: null,
          ailevel: 0,
          players: [_qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Human, _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer]
        };
        this.newgame();
      }

      _createClass(AppComponent, [{
        key: "newgame",
        value: function newgame() {
          var _this = this;

          this.service.start().subscribe(function (nboard) {
            _this.update(nboard);
          }, function (error) {
            console.debug('Fehler', error);
          });
        }
      }, {
        key: "white_computer",
        value: function white_computer() {
          this.game.players[0] = _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer;
        }
      }, {
        key: "white_human",
        value: function white_human() {
          this.game.players[0] = _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Human;
        }
      }, {
        key: "getWhite",
        value: function getWhite() {
          switch (this.game.players[0]) {
            case _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Human:
              {
                return "Human";
              }

            case _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer:
              {
                return "Computer";
              }
          }
        }
      }, {
        key: "getBlack",
        value: function getBlack() {
          switch (this.game.players[1]) {
            case _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Human:
              {
                return "Human";
              }

            case _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer:
              {
                return "Computer";
              }
          }
        }
      }, {
        key: "black_computer",
        value: function black_computer() {
          this.game.players[1] = _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer;
        }
      }, {
        key: "black_human",
        value: function black_human() {
          this.game.players[1] = _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Human;
        }
      }, {
        key: "click",
        value: function click(index) {
          console.log("Mouse clicked on " + index);
          this.turn(index);
        }
      }, {
        key: "update",
        value: function update(nboard) {
          this.game.board = nboard;

          if (nboard.next == _qango__WEBPACK_IMPORTED_MODULE_1__["Side"].White && this.game.players[0] == _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer || nboard.next == _qango__WEBPACK_IMPORTED_MODULE_1__["Side"].Black && this.game.players[1] == _qango__WEBPACK_IMPORTED_MODULE_1__["Player"].Computer) {
            this.aiturn();
          }
        }
      }, {
        key: "turn",
        value: function turn(index) {
          var _this2 = this;

          this.service.turn(this.game.board.id, index).subscribe(function (nboard) {
            _this2.update(nboard);
          }, function (error) {
            console.debug('Fehler', error);
          });
        }
      }, {
        key: "aiturn",
        value: function aiturn() {
          var _this3 = this;

          this.service.aiturn(this.game.board.id).subscribe(function (nboard) {
            _this3.update(nboard);
          }, function (error) {
            console.debug('Fehler', error);
          });
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_qango_service__WEBPACK_IMPORTED_MODULE_2__["QangoService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 25,
      vars: 4,
      consts: [[1, "top"], [1, "square"], [3, "index", "class", 4, "ngFor", "ngForOf"], [1, "bottom"], [1, "item"], [1, "submenu"], [1, "subitem", 3, "click"], [1, "white"], [1, "item", 3, "click"], [1, "black"], [3, "index"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "QANGO");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_cell_3_Template, 1, 4, "app-cell", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() {
            return ctx.white_computer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Computer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_9_listener() {
            return ctx.white_human();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Human");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u25CF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
            return ctx.newgame();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "New Game");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_18_listener() {
            return ctx.black_computer();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Computer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_20_listener() {
            return ctx.black_human();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Human");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u25CF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getWhite(), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getBlack(), "");
        }
      },
      styles: ["app-cell[_ngcontent-%COMP%] {\n  height: 16.66%;\n  width: 16.66%;\n  display: block;\n  float: left;\n  border: 1px solid black;\n}\n.red[_ngcontent-%COMP%] {\n  background-color: #F00;\n}\n.orange[_ngcontent-%COMP%] {\n  background-color: #F80;\n}\n.yellow[_ngcontent-%COMP%] {\n  background-color: #FF0;\n}\n.green[_ngcontent-%COMP%] {\n  background-color: #0C0;\n}\n.blue[_ngcontent-%COMP%] {\n  background-color: #00F;\n}\n.black[_ngcontent-%COMP%] {\n  color: #333;\n}\n.white[_ngcontent-%COMP%] {\n  color: #ddd;\n}\n.top[_ngcontent-%COMP%] {\n  height: 10vmin;\n  width: 100%;\n  text-align: center;\n  display: block;\n  font-family: monospace;\n  font-size: 8vmin;\n}\n.bottom[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 8vmin;\n  border: 1vmin #FFF solid;\n  display: block;\n  text-align: center;\n  float: left;\n}\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #BBB;\n  border: 1px #000 solid;\n  padding: 1vmin;\n  font-family: monospace;\n  font-size: 4vmin;\n  display: inline-block;\n  text-align: center;\n}\n.item[_ngcontent-%COMP%]:active {\n  background-color: #AAA;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: #CCC;\n}\n.submenu[_ngcontent-%COMP%] {\n  background-color: #BBB;\n  border: 1px #000 solid;\n  display: none;\n  position: absolute;\n  bottom: 6vmin;\n  z-index: 1;\n  text-align: left;\n}\n.item[_ngcontent-%COMP%]:hover   .submenu[_ngcontent-%COMP%] {\n  display: block;\n}\n.subitem[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.subitem[_ngcontent-%COMP%]:hover {\n  background-color: #CCC;\n}\n.square[_ngcontent-%COMP%] {\n  background-color: black;\n  border: 1px solid gray;\n  text-align: center;\n  vertical-align: center;\n  width: 80vmin;\n  height: 80vmin;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2VsbCB7XG4gIGhlaWdodDogMTYuNjYlO1xuICB3aWR0aDogMTYuNjYlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZmxvYXQ6IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xufVxuLnJlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMDA7XG59XG4ub3JhbmdlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y4MDtcbn1cbi55ZWxsb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwO1xufVxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzBDMDtcbn1cbi5ibHVlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwRjtcbn1cbi5ibGFjayB7XG4gIGNvbG9yOiAjMzMzO1xufVxuLndoaXRlIHtcbiAgY29sb3I6ICNkZGQ7XG59XG5cbi50b3Age1xuICBoZWlnaHQ6IDEwdm1pbjtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogOHZtaW47XG59XG4uYm90dG9tIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOHZtaW47XG4gIGJvcmRlcjogMXZtaW4gI0ZGRiBzb2xpZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4uaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCQjtcbiAgYm9yZGVyOiAxcHggIzAwMCBzb2xpZDtcbiAgcGFkZGluZzogMXZtaW47XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gIGZvbnQtc2l6ZTogNHZtaW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLml0ZW06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0FBQTtcbn1cbi5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcbn1cbi5zdWJtZW51IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0JCQjtcbiAgYm9yZGVyOiAxcHggIzAwMCBzb2xpZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDZ2bWluO1xuICB6LWluZGV4OiAxO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLml0ZW06aG92ZXIgLnN1Ym1lbnUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5zdWJpdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN1Yml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0NDO1xufVxuLnNxdWFyZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiA4MHZtaW47XG4gIGhlaWdodDogODB2bWluO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _qango_service__WEBPACK_IMPORTED_MODULE_2__["QangoService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cell/cell.component */
    "./src/app/cell/cell.component.ts");
    /* harmony import */


    var _qango_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./qango.service */
    "./src/app/qango.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _qango_service__WEBPACK_IMPORTED_MODULE_5__["QangoService"],
        useClass: _qango_service__WEBPACK_IMPORTED_MODULE_5__["QangoService"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
          providers: [{
            provide: _qango_service__WEBPACK_IMPORTED_MODULE_5__["QangoService"],
            useClass: _qango_service__WEBPACK_IMPORTED_MODULE_5__["QangoService"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetComponentScope"](_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgPluralCase"], _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _cell_cell_component__WEBPACK_IMPORTED_MODULE_4__["CellComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["KeyValuePipe"]]);
    /***/

  },

  /***/
  "./src/app/cell/cell.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cell/cell.component.ts ***!
    \****************************************/

  /*! exports provided: CellComponent */

  /***/
  function srcAppCellCellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CellComponent", function () {
      return CellComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _qango__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../qango */
    "./src/app/qango.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var CellComponent = /*#__PURE__*/function () {
      function CellComponent(app) {
        _classCallCheck(this, CellComponent);

        this.app = app;
      }

      _createClass(CellComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getSide",
        value: function getSide() {
          return this.app.game.board.field[this.index];
        }
      }, {
        key: "getClasses",
        value: function getClasses() {
          var cls = "";

          if (this.getSide() == _qango__WEBPACK_IMPORTED_MODULE_1__["Side"].White) {
            cls += "sphere bwhite";
          }

          if (this.getSide() == _qango__WEBPACK_IMPORTED_MODULE_1__["Side"].Black) {
            cls += "sphere bblack";
          }

          return cls;
        }
      }, {
        key: "getBackClasses",
        value: function getBackClasses() {
          var cls = "full";

          if (this.isWinningField()) {
            cls += " winning";
          }

          return cls;
        }
      }, {
        key: "isWinningField",
        value: function isWinningField() {
          var _this4 = this;

          return this.app.game.board.winning_fields.find(function (i) {
            return i == _this4.index;
          }) != undefined;
        }
      }, {
        key: "activate",
        value: function activate() {
          this.app.click(this.index);
        }
      }]);

      return CellComponent;
    }();

    CellComponent.ɵfac = function CellComponent_Factory(t) {
      return new (t || CellComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]));
    };

    CellComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CellComponent,
      selectors: [["app-cell"]],
      inputs: {
        index: "index"
      },
      decls: 2,
      vars: 6,
      consts: [[3, "click"]],
      template: function CellComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CellComponent_Template_div_click_0_listener() {
            return ctx.activate();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getBackClasses());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.getClasses());
        }
      },
      styles: [".full[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.winning[_ngcontent-%COMP%] {\n  background-color: whitesmoke;\n}\n.sphere[_ngcontent-%COMP%] {\n  height: 80%;\n  width: 80%;\n  border-radius: 50%;\n  position: relative;\n  box-shadow: inset -1vmin -1vmin 1vmin #111, 1vmin 1vmin 2vmin #000, inset 0 0 1vmin #fff;\n  display: inline-block;\n  margin: 5%;\n}\n.bblack[_ngcontent-%COMP%] {\n  background-color: #333;\n}\n.bwhite[_ngcontent-%COMP%] {\n  background-color: #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2VsbC9jZWxsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQix3RkFBd0Y7RUFDeEYscUJBQXFCO0VBQ3JCLFVBQVU7QUFDWjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9jZWxsL2NlbGwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi53aW5uaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLnNwaGVyZSB7XG4gIGhlaWdodDogODAlO1xuICB3aWR0aDogODAlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYm94LXNoYWRvdzogaW5zZXQgLTF2bWluIC0xdm1pbiAxdm1pbiAjMTExLCAxdm1pbiAxdm1pbiAydm1pbiAjMDAwLCBpbnNldCAwIDAgMXZtaW4gI2ZmZjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDUlO1xufVxuLmJibGFjayB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4uYndoaXRlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CellComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cell',
          templateUrl: './cell.component.html',
          styleUrls: ['./cell.component.css']
        }]
      }], function () {
        return [{
          type: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
        }];
      }, {
        index: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/qango.service.ts":
  /*!**********************************!*\
    !*** ./src/app/qango.service.ts ***!
    \**********************************/

  /*! exports provided: QangoService */

  /***/
  function srcAppQangoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "QangoService", function () {
      return QangoService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var QangoService = /*#__PURE__*/function () {
      function QangoService(http) {
        _classCallCheck(this, QangoService);

        this.http = http;
      }

      _createClass(QangoService, [{
        key: "start",
        value: function start() {
          var url = "http://localhost:8080/board/0";
          return this.http.get(url);
        }
      }, {
        key: "turn",
        value: function turn(id, index) {
          var url = "http://localhost:8080/board/" + id + "/turn/" + index;
          return this.http.get(url);
        }
      }, {
        key: "aiturn",
        value: function aiturn(id) {
          var url = "http://localhost:8080/board/" + id + "/aiturn";
          return this.http.get(url);
        }
      }]);

      return QangoService;
    }();

    QangoService.ɵfac = function QangoService_Factory(t) {
      return new (t || QangoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    QangoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: QangoService,
      factory: QangoService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QangoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/qango.ts":
  /*!**************************!*\
    !*** ./src/app/qango.ts ***!
    \**************************/

  /*! exports provided: Side, Player */

  /***/
  function srcAppQangoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Side", function () {
      return Side;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Player", function () {
      return Player;
    }); // qango.ts


    var Side;

    (function (Side) {
      Side["None"] = "none";
      Side["Black"] = "black";
      Side["White"] = "white";
    })(Side || (Side = {}));

    var Player;

    (function (Player) {
      Player["Human"] = "human";
      Player["Computer"] = "computer";
    })(Player || (Player = {}));
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/klaus/angular/qango-web/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map