# Angular 2 Bootstrap Switch


This is a Angular 2 Component to add a switch like input. It's basically an Angular 2 port for this: [Bootstrap-Switch](http://www.bootstrap-switch.org/).

### Installation

```sh
$ npm i angular2-bootstrap-switch
```
Then, add it to your `app.module`
```ts
...
import { AppComponent }   from './app.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';

@NgModule({
  imports:      [ 
    ...
    ],
  declarations: [ 
    AppComponent,
    SwitchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

For styling purposes, you should add the Bootstrap stylesheet to your `index.html`
```html
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
```

#### For Angular 4 

Since the animations package was removed from Angular 4, you'll need an extra step.

Install animations package:
```sh
$ npm install @angular/animations --save
```

Then, add it to your `app.module` imports
```ts
...
import { AppComponent }   from './app.component';
import { SwitchComponent } from 'angular2-bootstrap-switch/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports:      [ 
    ...
	BrowserAnimationsModule
    ],
  declarations: [ 
    AppComponent,
    SwitchComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```


### Usage
In your component template you just need to add the <switch></switch> component with the bindings you want. Like this:
```html
<switch [status]="value" [onText]="onText" [offText]="offText" [onColor]="onColor" [offColor]="offColor" [size]="size"></switch>
```
All the attributes are optional.

`Status`:  The current status of the switch (true|false). This is a two way binding

`onText`:  The text to show on the ON label of the switch

`offText`:  The text to show on the OFF label of the switch

`onColor`:  The color of the ON label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`offColor`:  The color of the OFF label of the switch ("blue"|"default"|"gray"|"green"|"red"|"sky-blue"|"yellow")

`size`: The size of the switch ("mini"|"small"|"normal"|"large")

### Example
To see the component in action, here's a demo page: [Demo](https://bootstrap-switch.herokuapp.com/)


And an example project:

```sh
git clone https://github.com/ovsleep/bootstrap-switch.git
cd bootstrap-switch
cd app
npm install
npm run all
```