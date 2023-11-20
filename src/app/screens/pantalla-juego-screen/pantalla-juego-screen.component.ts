import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pantalla-juego-screen',
  templateUrl: './pantalla-juego-screen.component.html',
  styleUrls: ['./pantalla-juego-screen.component.scss']
})
export class PantallaJuegoScreenComponent implements OnInit {
  constructor (
    public router: Router
  ) { }

  ngOnInit(): void {
      
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

  
}
