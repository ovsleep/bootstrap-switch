import { ElementRef, EventEmitter, OnChanges, SimpleChange, Renderer, AfterViewInit } from '@angular/core';
export declare class SwitchComponent implements OnChanges, AfterViewInit {
    private el;
    private renderer;
    constructor(el: ElementRef, renderer: Renderer);
    _onSpan: ElementRef;
    _offSpan: ElementRef;
    _midSpan: ElementRef;
    _container: ElementRef;
    _main: ElementRef;
    private _statusStr;
    private _onColor;
    private _offColor;
    private _minWidth;
    private _sizeClass;
    private _disabledClass;
    status: boolean;
    statusChange: EventEmitter<boolean>;
    onText: string;
    offText: string;
    onColor: string;
    offColor: string;
    size: string;
    disabled: boolean;
    toggleStatus(): void;
    private _setDisabled(disabled);
    private _setColor(switchLabel, value);
    private _calculateWidth();
    private _calculateSize();
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    ngAfterViewInit(): void;
}
