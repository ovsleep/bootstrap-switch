"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SwitchComponent = (function () {
    function SwitchComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this._statusStr = "false";
        this._onColor = "bootstrap-switch-info";
        this._offColor = "bootstrap-switch-default";
        this._minWidth = 60;
        this._sizeClass = "bootstrap-switch-normal";
        this._disabledClass = "";
        this.status = false;
        this.statusChange = new core_1.EventEmitter();
        this.onText = "on";
        this.offText = "off";
        this.onColor = "bootstrap-switch-info";
        this.offColor = "bootstrap-switch-default";
        this.size = "normal";
        this.disabled = false;
        this._calculateSize();
    }
    SwitchComponent.prototype.toggleStatus = function () {
        if (!this.disabled) {
            this.status = !this.status;
            this._statusStr = this.status.toString();
            this.statusChange.emit(this.status);
        }
    };
    SwitchComponent.prototype._setDisabled = function (disabled) {
        if (disabled) {
            this._disabledClass = 'bootstrap-switch-disabled';
        }
        else {
            this._disabledClass = '';
        }
    };
    SwitchComponent.prototype._setColor = function (switchLabel, value) {
        var color = '';
        var defaultColor = "bootstrap-switch-info";
        if (switchLabel == 'off') {
            defaultColor = "bootstrap-switch-default";
        }
        switch (value) {
            case 'default':
                color = defaultColor;
                break;
            case 'blue':
                color = "bootstrap-switch-primary";
                break;
            case 'sky-blue':
                color = "bootstrap-switch-info";
                break;
            case 'red':
                color = "bootstrap-switch-danger";
                break;
            case 'yellow':
                color = "bootstrap-switch-warning";
                break;
            case 'green':
                color = "bootstrap-switch-success";
                break;
            case 'gray':
                color = "bootstrap-switch-default";
                break;
        }
        if (switchLabel == 'off') {
            this._offColor = color;
        }
        else {
            this._onColor = color;
        }
    };
    SwitchComponent.prototype._calculateWidth = function () {
        if (this._onSpan) {
            this.renderer.setElementStyle(this._onSpan.nativeElement, "width", "");
            this.renderer.setElementStyle(this._midSpan.nativeElement, "width", "");
            this.renderer.setElementStyle(this._offSpan.nativeElement, "width", "");
            var width = Math.max(this._onSpan.nativeElement.clientWidth, this._offSpan.nativeElement.clientWidth, this._minWidth);
            this.renderer.setElementStyle(this._onSpan.nativeElement, "width", width.toString() + "px");
            this.renderer.setElementStyle(this._midSpan.nativeElement, "width", (width - 10).toString() + "px");
            this.renderer.setElementStyle(this._offSpan.nativeElement, "width", width.toString() + "px");
            this.renderer.setElementStyle(this._container.nativeElement, "width", (width * 3).toString() + "px");
            this.renderer.setElementStyle(this._main.nativeElement, "width", (width * 2).toString() + "px");
        }
    };
    SwitchComponent.prototype._calculateSize = function () {
        switch (this.size) {
            case "mini":
                this._sizeClass = "bootstrap-switch-mini";
                this._minWidth = 25;
                break;
            case "small":
                this._sizeClass = "bootstrap-switch-small";
                this._minWidth = 30;
                break;
            case "normal":
                this._sizeClass = "bootstrap-switch-normal";
                this._minWidth = 60;
                break;
            case "large":
                this._sizeClass = "bootstrap-switch-large";
                this._minWidth = 80;
                break;
        }
        this._calculateWidth();
    };
    SwitchComponent.prototype.ngOnChanges = function (changes) {
        var log = [];
        for (var propName in changes) {
            var changedProp = changes[propName];
            var from = changedProp.previousValue;
            var value = changedProp.currentValue;
            switch (propName) {
                case "onText":
                    this._calculateWidth();
                    break;
                case "offText":
                    this._calculateWidth();
                    break;
                case "onColor":
                    this._setColor('on', value);
                    break;
                case "offColor":
                    this._setColor('off', value);
                    break;
                case "status":
                    this._statusStr = value.toString();
                    break;
                case "size":
                    this._calculateSize();
                    break;
                case "disabled":
                    this._setDisabled(value);
                    break;
            }
        }
    };
    SwitchComponent.prototype.ngAfterViewInit = function () {
    };
    __decorate([
        core_1.ViewChild('on'), 
        __metadata('design:type', core_1.ElementRef)
    ], SwitchComponent.prototype, "_onSpan", void 0);
    __decorate([
        core_1.ViewChild('off'), 
        __metadata('design:type', core_1.ElementRef)
    ], SwitchComponent.prototype, "_offSpan", void 0);
    __decorate([
        core_1.ViewChild('mid'), 
        __metadata('design:type', core_1.ElementRef)
    ], SwitchComponent.prototype, "_midSpan", void 0);
    __decorate([
        core_1.ViewChild('container'), 
        __metadata('design:type', core_1.ElementRef)
    ], SwitchComponent.prototype, "_container", void 0);
    __decorate([
        core_1.ViewChild('main'), 
        __metadata('design:type', core_1.ElementRef)
    ], SwitchComponent.prototype, "_main", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SwitchComponent.prototype, "status", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], SwitchComponent.prototype, "statusChange", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SwitchComponent.prototype, "onText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SwitchComponent.prototype, "offText", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchComponent.prototype, "onColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchComponent.prototype, "offColor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], SwitchComponent.prototype, "size", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], SwitchComponent.prototype, "disabled", void 0);
    SwitchComponent = __decorate([
        core_1.Component({
            encapsulation: core_1.ViewEncapsulation.None,
            selector: 'switch',
            template: "<div #main class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-off\" [ngClass]=\"_sizeClass + ' ' + _disabledClass\" (click)=\"toggleStatus()\">\n\t<div #container class=\"bootstrap-switch-container\"  [@statusChange]=\"_statusStr\" >\n        <span #on class=\"bootstrap-switch-handle-on\" [ngClass]=\"_onColor\" [ngStyle]=\"{'min-width': _minWidth +'px'}\">{{onText}}</span>\n        <span #mid class=\"bootstrap-switch-label\"></span>\n        <span #off class=\"bootstrap-switch-handle-off \" [ngClass]=\"_offColor\">{{offText}}</span>\n    </div>\n</div>",
            styles: ["/* ========================================================================\n * bootstrap-switch - v3.3.2\n * http://www.bootstrap-switch.org\n * ========================================================================\n * Copyright 2012-2013 Mattia Larentis\n *\n * ========================================================================\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n * ========================================================================\n */\n\n.bootstrap-switch {\n  display: inline-block;\n  direction: ltr;\n  cursor: pointer;\n  border-radius: 4px;\n  border: 1px solid;\n  border-color: #cccccc;\n  position: relative;\n  text-align: left;\n  overflow: hidden;\n  line-height: 8px;\n  z-index: 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.bootstrap-switch .bootstrap-switch-container {\n  display: inline-block;\n  top: 0;\n  border-radius: 4px;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n  background: #fff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off,\n.bootstrap-switch .bootstrap-switch-label {\n  -webkit-box-sizing: border-box;\n  -moz-box-sizing: border-box;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block !important;\n  height: 100%;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 20px;\n}\n.bootstrap-switch .bootstrap-switch-handle-on,\n.bootstrap-switch .bootstrap-switch-handle-off {\n  text-align: center;\n  z-index: 1;\n  white-space: nowrap;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {\n  color: #fff;\n  background: #428bca;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {\n  color: #fff;\n  background: #5bc0de;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {\n  color: #fff;\n  background: #5cb85c;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {\n  background: #f0ad4e;\n  color: #fff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {\n  color: #fff;\n  background: #d9534f;\n}\n.bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,\n.bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {\n  color: #000;\n  background: #eeeeee;\n}\n.bootstrap-switch .bootstrap-switch-label {\n  text-align: center;\n  margin-top: -1px;\n  margin-bottom: -1px;\n  z-index: 100;\n  color: #333333;\n  background: #ffffff;\n}\n.bootstrap-switch .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch input[type='radio'],\n.bootstrap-switch input[type='checkbox'] {\n  position: absolute !important;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  filter: alpha(opacity=0);\n  z-index: -1;\n}\n.bootstrap-switch input[type='radio'].form-control,\n.bootstrap-switch input[type='checkbox'].form-control {\n  height: auto;\n}\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {\n  padding: 6px 16px;\n  font-size: 18px;\n  line-height: 1.33;\n}\n.bootstrap-switch.bootstrap-switch-disabled,\n.bootstrap-switch.bootstrap-switch-readonly,\n.bootstrap-switch.bootstrap-switch-indeterminate {\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,\n.bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {\n  opacity: 0.5;\n  filter: alpha(opacity=50);\n  cursor: default !important;\n}\n.bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {\n  -webkit-transition: margin-left 0.5s;\n  transition: margin-left 0.5s;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {\n  border-bottom-left-radius: 0;\n  border-top-left-radius: 0;\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {\n  border-bottom-right-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-focused {\n  border-color: #66afe9;\n  outline: 0;\n  -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);\n}\n.bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label {\n  border-bottom-right-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label,\n.bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label {\n  border-bottom-left-radius: 3px;\n  border-top-left-radius: 3px;\n}"],
            animations: [
                core_1.trigger('statusChange', [
                    core_1.state('false', core_1.style({ transform: 'translateX(-33.333%)' })),
                    core_1.state('true', core_1.style({ transform: 'translateX(0)' })),
                    core_1.transition('true <=> false', core_1.animate('200ms'))
                ])
            ]
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, core_1.Renderer])
    ], SwitchComponent);
    return SwitchComponent;
}());
exports.SwitchComponent = SwitchComponent;
//# sourceMappingURL=switch.component.js.map