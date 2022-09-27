import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="text-center">
      <hr>
      <p>Copyright 2022 | Arun</p>
    </footer>
  `,
  styles: [
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
