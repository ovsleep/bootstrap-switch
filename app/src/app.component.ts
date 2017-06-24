import { Component } from '@angular/core'

@Component({
    selector: 'home-dashboard',
    templateUrl: "./src/app.component.html",
    styles:[`
  /deep/ .bootstrap-switch .bootstrap-switch-handle-on.bootstrap-switch-success,
  /deep/ .bootstrap-switch .bootstrap-switch-handle-off.bootstrap-switch-success {
    background: #00f;
  }

  /deep/ .bootstrap-switch-container{
    background: #fff ;
  }
  `]
})

export class AppComponent {
    colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
    sizes = ["mini", "small", "normal", "large"];

    onText = "On";
    offText = "Off";
    onColor = "green";
    offColor = "red";
    size = "normal";
    disabled = false;
}