import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-counter-display',
  templateUrl: './counter-display.component.html',
  styleUrls: ['./counter-display.component.scss']
})
export class CounterDisplayComponent {
  constructor(private store:Store<{counter:{counter:number}}>){}
  counterDisplay:number =0
  ngOnInit(){
    this.store.select('counter').subscribe(data =>{
      this.counterDisplay =data.counter
    })
  }

}
