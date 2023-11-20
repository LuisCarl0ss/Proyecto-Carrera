import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hora-correr-screen',
  templateUrl: './hora-correr-screen.component.html',
  styleUrls: ['./hora-correr-screen.component.scss']
})
export class HoraCorrerScreenComponent implements OnInit {

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

  irJuego(){
    this.router.navigate(["nuevo-look"]);
  }

}
