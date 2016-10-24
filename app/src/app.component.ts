import { Component } from '@angular/core'

@Component({
    selector: 'home-dashboard',
    templateUrl: "./src/app.component.html",
})

export class AppComponent {
    colors = ["blue", "default", "gray", "green", "red", "sky-blue", "yellow"];
    sizes = ["mini", "small", "normal", "large"];

    onText = "On";
    offText = "Off";
    onColor = "green";
    offColor = "red";
    size = "normal"
}