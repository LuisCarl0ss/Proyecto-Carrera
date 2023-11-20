import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-look-screen',
  templateUrl: './nuevo-look-screen.component.html',
  styleUrls: ['./nuevo-look-screen.component.scss']
})
export class NuevoLookScreenComponent implements OnInit {

  public isLoading: boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
      
  }

  public irJuego(){
    this.router.navigate(["pantalla-juego"]);
  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
