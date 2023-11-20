import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-politica-privacidad-screen',
  templateUrl: './politica-privacidad-screen.component.html',
  styleUrls: ['./politica-privacidad-screen.component.scss']
})
export class PoliticaPrivacidadScreenComponent implements OnInit {
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
  
}
