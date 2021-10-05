import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
export class WelcomePageComponent implements OnInit {

  public name='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {

    let name=this.route.snapshot.params.name
    this.name=name;
  }

  

}
