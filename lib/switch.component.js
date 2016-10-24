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
        this.status = false;
        this.statusChange = new core_1.EventEmitter();
        this.onText = "on";
        this.offText = "off";
        this.onColor = "bootstrap-switch-info";
        this.offColor = "bootstrap-switch-default";
        this.size = "normal";
        this._calculateSize();
    }
    SwitchComponent.prototype.toggleStatus = function () {
        this.status = !this.status;
        this._statusStr = this.status.toString();
        this.statusChange.emit(this.status);
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
            }
            log.push(propName + " changed from " + from + " to " + value);
        }
        console.log(log.join(', '));
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
    SwitchComponent = __decorate([
        core_1.Component({
            selector: 'switch',
            moduleId: module.id,
            template: "<div #main class=\"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-off\" [ngClass]=\"_sizeClass\"  (click)=\"toggleStatus()\">\n\t<div #container class=\"bootstrap-switch-container\"  [@statusChange]=\"_statusStr\" >\n        <span #on class=\"bootstrap-switch-handle-on\" [ngClass]=\"_onColor\" [ngStyle]=\"{'min-width': _minWidth +'px'}\">{{onText}}</span>\n        <span #mid class=\"bootstrap-switch-label\"></span>\n        <span #off class=\"bootstrap-switch-handle-off \" [ngClass]=\"_offColor\">{{offText}}</span>\n    </div>\n</div>",
            styleUrls: ['switch.component.css', 'node_modules/bootstrap/dist/css/bootstrap.css'],
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