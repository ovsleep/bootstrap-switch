# Angular 2 Bootstrap Switch


This is a Angular 2 Component to add a switch like input. It's basically an Angular 2 port for this: [Bootstrap-Switch](http://www.bootstrap-switch.org/).

### Update 0.2
I'm using a Yeoman generator to create the library now [link](https://github.com/jvandemo/generator-angular2-library). This resolves the "ng build --prod" issue, but you need to change a few things when importing the component if you used a previous version.

### Installation

```sh
$ npm install --save angular2-bootstrap-switch
```
Install animations package:
```sh
$ npm install @angular/animations --save
```

Then, add it to your `app.module`
```ts
...
import { BootstrapSwitchModule } from 'angular2-bootstrap-switch';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [
    ...
    BootstrapSwitchModule.forRoot(),
    BrowserAnimationsModule
    ],
  declarations: [
    ...
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

For styling purposes, you should add the Bootstrap stylesheet to your `index.html`
```html
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

### Usage
In your component template you just need to add the <switch></switch> component with the bindings you want. Like this:
```html
<switch
    [status]="value"
    [onText]="onText"
    [offText]="offText"
    [onColor]="onColor"
    [offColor]="offColor"
    [size]="size"
    [disabled]="disabled"
    (statusChange)="onFlagChange($event)"></switch>
```
All the attributes are optional.

`status`:  The current status of the switch (true|false). This is a two way binding

`onText`:  The text to show on the ON label of the switch

`offText`:  The text to show on the OFF label of the switch

`onColor`:  The color of the ON label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`offColor`:  The color of the OFF label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`size`: The size of the switch ("mini"|"small"|"normal"|"large")

`disabled`: Boolean value to enable/disabled the switch

Events:

`statusChange`: Event fired on status change

### Example
To see the component in action, here's a demo page: [Demo](https://bootstrap-switch.herokuapp.com/)
