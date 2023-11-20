import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-terminos-condiciones-screen',
  templateUrl: './terminos-condiciones-screen.component.html',
  styleUrls: ['./terminos-condiciones-screen.component.scss']
})
export class TerminosCondicionesScreenComponent implements OnInit {
  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
      
  }
}
