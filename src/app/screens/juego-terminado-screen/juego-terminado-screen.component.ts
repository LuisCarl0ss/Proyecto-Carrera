import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-terminado-screen',
  templateUrl: './juego-terminado-screen.component.html',
  styleUrls: ['./juego-terminado-screen.component.scss']
})
export class JuegoTerminadoScreenComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
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

  public irHome(){
    this.router.navigate(["home"]);
  }
}
