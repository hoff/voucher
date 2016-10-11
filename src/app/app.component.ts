import {
  Component,
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

      transition('in => out', animate('1000ms ease-in')),
      transition('out => in', animate('1000ms ease-out'))
    ])
  ]
})
export class AppComponent {
  title = 'app works!';



  vouchers = [
    {
      value: 50,
      src: 'https://unsplash.it/300?image=1067',
      state: 'in'
    },
    {
      value: 75,
      src: 'https://unsplash.it/300?image=1068',
      state: 'in'
    },
    {
      value: 100,
      src: 'https://unsplash.it/300?image=1061',
      state: 'in'
    }
    ,
    {
      value: 150,
      src: 'https://unsplash.it/300?image=973',
      state: 'in'
    },
    {
      value: 200,
      src: 'https://unsplash.it/300?image=941',
      state: 'in'
    },
    {
      value: 250,
      src: 'https://unsplash.it/300?image=902',
      state: 'in'
    },
    {
      value: 250,
      src: 'https://unsplash.it/300?image=743',
      state: 'in'
    },
    {
      value: 300,
      src: 'https://unsplash.it/300?image=1083',
      state: 'in'
    },
    {
      value: 400,
      src: 'https://unsplash.it/300?image=1057',
      state: 'in'
    },
    {
      value: 500,
      src: 'https://unsplash.it/300?image=1025',
      state: 'in'
    }
  ]

  currentStepIndex = 2
  currentStepValue = 100

  currentSliderValue = 100

  onSliderChange($event) {
    this.findIndex(+$event)
  }

  findIndex(val) {

    this.vouchers.forEach(voucher => {
      voucher.state = voucher.value <= val ? 'in' : 'out'
      console.log('is voucher smaller', voucher.value, 'than this slider value?', val)
    })
    console.log('-->')
  }


  /**
     * A set of useful easing functions
     * Each takes a decimal value between 0 and 1, 
     * and returns the progress according to the easing function
     * See http://easings.net/ for visualizations
     */

  public EasingFunctions = {
    // no easing, no acceleration
    linear: function (t) { return t },
    // accelerating from zero velocity
    easeInQuad: function (t) { return t * t },
    // decelerating to zero velocity
    easeOutQuad: function (t) { return t * (2 - t) },
    // acceleration until halfway, then deceleration
    easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t },
    // accelerating from zero velocity 
    easeInCubic: function (t) { return t * t * t },
    // decelerating to zero velocity 
    easeOutCubic: function (t) { return (--t) * t * t + 1 },
    // acceleration until halfway, then deceleration 
    easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1 },
    // accelerating from zero velocity 
    easeInQuart: function (t) { return t * t * t * t },
    // decelerating to zero velocity 
    easeOutQuart: function (t) { return 1 - (--t) * t * t * t },
    // acceleration until halfway, then deceleration
    easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
    // accelerating from zero velocity
    easeInQuint: function (t) { return t * t * t * t * t },
    // decelerating to zero velocity
    easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t },
    // acceleration until halfway, then deceleration 
    easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t },
    // bounce
    bounce: function (t) {
      var p = 0.3;
      return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
    }

  }

  /**
   * This function allows you to animate a value over time
   * 
   * In order for this to work with angular change detection, it replaces the value in an object, instead of just updating it. 
   * Therefore you need to pass the object and the key name to it, along with duration, easing, to and from values, and an optional callback function:
   * 
   * @param durationMS   The length of time in milliseconds the animation should run for
   * @param easing       One of the easing functions
   * @param from         The 'from-value' (the value at the start of the animation)
   * @param to           The 'to-value' (the value at the end of the animation)
   * @param obj          The object which holds the value to animate
   * @param key          The key by which the value can be found in the object
   * @param whendone     An optional callback function
   * 
   */
  animateValue(durationMS: number, easing: string, from: number, to: number, obj: Object, key: string, whendone) {
    let start = new Date().getTime()
    let end = start + durationMS

    let step = () => {

      let now = new Date().getTime()
      let progress

      if (now > end) {
        progress = 1
      } else {
        progress = (now - start) / durationMS // percent as decimal
      }

      // now you know how much progress you've made. use this to calculate position
      let func = this.EasingFunctions[easing]
      let easingProgress = func(progress)

      let delta = to - from
      let currentVal = (delta * easingProgress) + from
      obj[key] = currentVal

      // call yourself
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        if (whendone) {
          whendone()
        }
      }
    }
    step()
  }
}
