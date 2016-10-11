import {
  Component,
  OnInit,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('voucherState', [


      state('in', style({
        left: '0%',
      })),

      state('out', style({
        left: '100%',
      })),

      transition('in => out', animate('300ms ease-in')),
      transition('out => in', animate('300ms ease-out'))
    ])
  ]
})
export class AppComponent implements OnInit {
  title = 'app works!';



  vouchers = [
    {
      value: 50,
      src: 'https://unsplash.it/300?image=1067',
      state: 'in',
      index:0
    },
    {
      value: 75,
      src: 'https://unsplash.it/300?image=1068',
      state: 'in',
      index:1
    },
    {
      value: 100,
      src: 'https://unsplash.it/300?image=1061',
      state: 'in',
      index:2
    }
    ,
    {
      value: 150,
      src: 'https://unsplash.it/300?image=973',
      state: 'in',
      index:3
    },
    {
      value: 200,
      src: 'https://unsplash.it/300?image=941',
      state: 'in',
      index:4
    },
    {
      value: 250,
      src: 'https://unsplash.it/300?image=902',
      state: 'in',
      index:5
    },
    {
      value: 250,
      src: 'https://unsplash.it/300?image=743',
      state: 'in',
      index:6
    },
    {
      value: 300,
      src: 'https://unsplash.it/300?image=1083',
      state: 'in',
      index:7
    },
    {
      value: 400,
      src: 'https://unsplash.it/300?image=1057',
      state: 'in',
      index:8
    },
    {
      value: 500,
      src: 'https://unsplash.it/300?image=1025',
      state: 'in',
      index:9
    }
  ]

  
  // if you want to start with a different position, set it here
  currentSliderValue = 2


  checkVouchers(step) {
    this.vouchers.forEach(voucher => {
      let state = voucher.index <= step ? 'in' : 'out'
      voucher.state = state
    })
  }

  ngOnInit() {
    this.checkVouchers(this.currentSliderValue)
  }


 
}
