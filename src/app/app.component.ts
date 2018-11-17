import { Component } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "project";
  actualView: String = "home";
  safeUrl: String;
  vieoURL: 'https://www.youtube.com/watch?v=1EiSitCwny8'

  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/watch?v=1EiSitCwny8');
  }
}
