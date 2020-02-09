import { sandboxOf } from 'angular-playground';
import { Component } from '@angular/core';

@Component({
  selector: 'app-colors',
  template: `
    <div class="box bg-primary">primary</div>
    <div class="box bg-secondary">secondary</div>
    <div class="box bg-success">success</div>
    <div class="box bg-info">info</div>
    <div class="box bg-warning">warn</div>
    <div class="box bg-dark">dark</div>
    <div class="box bg-light text-dark">light</div>
  `,
  styles: [
    `
      .box {
        height: 100px;
        width: 100px;
        margin: 10px;
        text-align: center;
        display: inline-block;
        color: white;
      }
    `,
  ],
})
class ColorsComponent {
  constructor() {}
}

export default sandboxOf(ColorsComponent).add('Colors', {
  template: `<app-colors></app-colors>`,
});
