import {
  Component, Input, ElementRef, Output, EventEmitter, OnChanges, SimpleChange, ViewChild, Renderer, AfterViewInit,
  trigger,
  state,
  style,
  transition,
  animate,
  ViewEncapsulation
} from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'switch',
  template: `<div #main class="bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate bootstrap-switch-off" [ngClass]="_sizeClass + ' ' + _disabledClass" (click)="toggleStatus()">
	<div #container class="bootstrap-switch-container"  [@statusChange]="_statusStr" >
        <span #on class="bootstrap-switch-handle-on" [ngClass]="_onColor" [ngStyle]="{'min-width': _minWidth +'px'}">{{onText}}</span>
        <span #mid class="bootstrap-switch-label"></span>
        <span #off class="bootstrap-switch-handle-off " [ngClass]="_offColor">{{offText}}</span>
    </div>
</div>
`,
  styles: [`/* ========================================================================
  * bootstrap-switch - v3.3.2
  * http://www.bootstrap-switch.org
  * ========================================================================
  * Copyright 2012-2013 Mattia Larentis
  *
  * ========================================================================
  * Licensed under the Apache License, Version 2.0 (the "License");
  * you may not use this file except in compliance with the License.
  * You may obtain a copy of the License at
  *
  *     http://www.apache.org/licenses/LICENSE-2.0
  *
  * Unless required by applicable law or agreed to in writing, software
  * distributed under the License is distributed on an "AS IS" BASIS,
  * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  * See the License for the specific language governing permissions and
  * limitations under the License.
  * ========================================================================
  */

 .bootstrap-switch {
   display: inline-block;
   direction: ltr;
   cursor: pointer;
   border-radius: 4px;
   border: 1px solid;
   border-color: #cccccc;
   position: relative;
   text-align: left;
   overflow: hidden;
   line-height: 8px;
   z-index: 0;
   -webkit-user-select: none;
   -moz-user-select: none;
   -ms-user-select: none;
   user-select: none;
   vertical-align: middle;
   -webkit-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
   transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
 }
 .bootstrap-switch .bootstrap-switch-container {
   display: inline-block;
   top: 0;
   border-radius: 4px;
   -webkit-transform: translate3d(0, 0, 0);
   transform: translate3d(0, 0, 0);
   background: #fff;
 }
 .bootstrap-switch .bootstrap-switch-handle-on,
 .bootstrap-switch .bootstrap-switch-handle-off,
 .bootstrap-switch .bootstrap-switch-label {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   cursor: pointer;
   display: inline-block !important;
   height: 100%;
   padding: 6px 12px;
   font-size: 14px;
   line-height: 20px;
 }
 .bootstrap-switch .bootstrap-switch-handle-on,
 .bootstrap-switch .bootstrap-switch-handle-off {
   text-align: center;
   z-index: 1;
   white-space: nowrap;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-primary,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-primary {
   color: #fff;
   background: #428bca;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-info,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-info {
   color: #fff;
   background: #5bc0de;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {
   color: #fff;
   background: #5cb85c;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-warning,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-warning {
   background: #f0ad4e;
   color: #fff;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-danger,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-danger {
   color: #fff;
   background: #d9534f;
 }
 .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-default,
 .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-default {
   color: #000;
   background: #eeeeee;
 }
 .bootstrap-switch .bootstrap-switch-label {
   text-align: center;
   margin-top: -1px;
   margin-bottom: -1px;
   z-index: 100;
   color: #333333;
   background: #ffffff;
 }
 .bootstrap-switch .bootstrap-switch-handle-on {
   border-bottom-left-radius: 3px;
   border-top-left-radius: 3px;
 }
 .bootstrap-switch .bootstrap-switch-handle-off {
   border-bottom-right-radius: 3px;
   border-top-right-radius: 3px;
 }
 .bootstrap-switch input[type='radio'],
 .bootstrap-switch input[type='checkbox'] {
   position: absolute !important;
   top: 0;
   left: 0;
   opacity: 0;
   filter: alpha(opacity=0);
   z-index: -1;
 }
 .bootstrap-switch input[type='radio'].form-control,
 .bootstrap-switch input[type='checkbox'].form-control {
   height: auto;
 }
 .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-mini .bootstrap-switch-label {
   padding: 1px 5px;
   font-size: 12px;
   line-height: 1.5;
 }
 .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-small .bootstrap-switch-label {
   padding: 5px 10px;
   font-size: 12px;
   line-height: 1.5;
 }
 .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-large .bootstrap-switch-label {
   padding: 6px 16px;
   font-size: 18px;
   line-height: 1.33;
 }
 .bootstrap-switch.bootstrap-switch-disabled,
 .bootstrap-switch.bootstrap-switch-readonly,
 .bootstrap-switch.bootstrap-switch-indeterminate {
   cursor: default !important;
 }
 .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-on,
 .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-handle-off,
 .bootstrap-switch.bootstrap-switch-disabled .bootstrap-switch-label,
 .bootstrap-switch.bootstrap-switch-readonly .bootstrap-switch-label,
 .bootstrap-switch.bootstrap-switch-indeterminate .bootstrap-switch-label {
   opacity: 0.5;
   filter: alpha(opacity=50);
   cursor: default !important;
 }
 .bootstrap-switch.bootstrap-switch-animate .bootstrap-switch-container {
   -webkit-transition: margin-left 0.5s;
   transition: margin-left 0.5s;
 }
 .bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-on {
   border-bottom-left-radius: 0;
   border-top-left-radius: 0;
   border-bottom-right-radius: 3px;
   border-top-right-radius: 3px;
 }
 .bootstrap-switch.bootstrap-switch-inverse .bootstrap-switch-handle-off {
   border-bottom-right-radius: 0;
   border-top-right-radius: 0;
   border-bottom-left-radius: 3px;
   border-top-left-radius: 3px;
 }
 .bootstrap-switch.bootstrap-switch-focused {
   border-color: #66afe9;
   outline: 0;
   -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
   box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, 0.6);
 }
 .bootstrap-switch.bootstrap-switch-on .bootstrap-switch-label,
 .bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-off .bootstrap-switch-label {
   border-bottom-right-radius: 3px;
   border-top-right-radius: 3px;
 }
 .bootstrap-switch.bootstrap-switch-off .bootstrap-switch-label,
 .bootstrap-switch.bootstrap-switch-inverse.bootstrap-switch-on .bootstrap-switch-label {
   border-bottom-left-radius: 3px;
   border-top-left-radius: 3px;
 }`],
  animations: [
    trigger('statusChange', [
      state('false', style({ transform: 'translateX(-33.333%)' })),
      state('true', style({ transform: 'translateX(0)' })),
      transition('true <=> false', animate('200ms'))
    ])
  ]
})
export class BootstrapSwitchComponent implements OnChanges, AfterViewInit {

  @ViewChild('on') _onSpan: ElementRef;
  @ViewChild('off') _offSpan: ElementRef;
  @ViewChild('mid') _midSpan: ElementRef;
  @ViewChild('container') _container: ElementRef;
  @ViewChild('main') _main: ElementRef;


  // public properties
  @Input() status = false;
  @Output() statusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() onText = 'on';
  @Input() offText = 'off';
  @Input() onColor = 'bootstrap-switch-info';
  @Input() offColor = 'bootstrap-switch-default';
  @Input() size = 'normal';
  @Input() disabled = false;

  _statusStr = 'false';

  // styles properties
  _onColor = 'bootstrap-switch-info';
  _offColor = 'bootstrap-switch-default';
  _minWidth = 60;
  _sizeClass = 'bootstrap-switch-normal';
  _disabledClass = '';

  constructor(private el: ElementRef, private renderer: Renderer) {
    this._calculateSize();
  }



  toggleStatus(): void {
    if (!this.disabled) {
      this.status = !this.status;
      this._statusStr = this.status.toString();
      this.statusChange.emit(this.status);
    }
  }

  private _setDisabled(disabled: boolean): void {
    if (disabled) {
      this._disabledClass = 'bootstrap-switch-disabled'
    } else {
      this._disabledClass = '';
    }
  }

  private _setColor(switchLabel: string, value: string): void {
    let color = '';
    let defaultColor = 'bootstrap-switch-info';

    if (switchLabel === 'off') {
      defaultColor = 'bootstrap-switch-default';
    }

    switch (value) {
      case 'default':
        color = defaultColor;
        break;
      case 'blue':
        color = 'bootstrap-switch-primary';
        break;
      case 'sky-blue':
        color = 'bootstrap-switch-info';
        break;
      case 'red':
        color = 'bootstrap-switch-danger';
        break;
      case 'yellow':
        color = 'bootstrap-switch-warning';
        break;
      case 'green':
        color = 'bootstrap-switch-success';
        break;
      case 'gray':
        color = 'bootstrap-switch-default';
        break;
    }

    if (switchLabel === 'off') {
      this._offColor = color;
    } else {
      this._onColor = color;
    }
  }

  private _calculateWidth(): void {
    if (this._onSpan) {
      this.renderer.setElementStyle(this._onSpan.nativeElement, 'width', '');
      this.renderer.setElementStyle(this._midSpan.nativeElement, 'width', '');
      this.renderer.setElementStyle(this._offSpan.nativeElement, 'width', '');

      const width = Math.max(this._onSpan.nativeElement.clientWidth, this._offSpan.nativeElement.clientWidth, this._minWidth);

      this.renderer.setElementStyle(this._onSpan.nativeElement, 'width', width.toString() + 'px');
      this.renderer.setElementStyle(this._midSpan.nativeElement, 'width', (width - 10).toString() + 'px');
      this.renderer.setElementStyle(this._offSpan.nativeElement, 'width', width.toString() + 'px');
      this.renderer.setElementStyle(this._container.nativeElement, 'width', (width * 3).toString() + 'px');
      this.renderer.setElementStyle(this._main.nativeElement, 'width', (width * 2).toString() + 'px');
    }
  }

  private _calculateSize(): void {
    switch (this.size) {
      case 'mini':
        this._sizeClass = 'bootstrap-switch-mini';
        this._minWidth = 25;
        break;
      case 'small':
        this._sizeClass = 'bootstrap-switch-small';
        this._minWidth = 30;
        break;
      case 'normal':
        this._sizeClass = 'bootstrap-switch-normal';
        this._minWidth = 60;
        break;
      case 'large':
        this._sizeClass = 'bootstrap-switch-large';
        this._minWidth = 80;
        break;
    }

    this._calculateWidth();
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    const log: string[] = [];
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const from = changedProp.previousValue;
        const value = changedProp.currentValue;

        switch (propName) {
          case 'onText':
            this._calculateWidth();
            break;
          case 'offText':
            this._calculateWidth();
            break;
          case 'onColor':
            this._setColor('on', value);
            break;
          case 'offColor':
            this._setColor('off', value);
            break;
          case 'status':
            this._statusStr = value.toString();
            break;
          case 'size':
            this._calculateSize();
            break;
          case 'disabled':
            this._setDisabled(value);
            break;
        }
      }
    }
  }

  ngAfterViewInit() {
    // this._calculateSize('normal');
    // this._calculateWidth();
  }
}
