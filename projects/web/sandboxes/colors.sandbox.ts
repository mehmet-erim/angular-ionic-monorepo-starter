import { sandboxOf } from "angular-playground";
import { Component } from "@angular/core";

@Component({
  selector: "app-colors",
  template: `
    app-colors
  `
})
export class ColorsComponent {
  constructor() {}
}

export default sandboxOf(ColorsComponent).add("Colors", {
  template: `<div>Hey</div>`
});
