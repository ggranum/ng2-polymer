/// <reference path="../typings/angular2/angular2.d.ts" />

import {bootstrap, Component, View, Attribute, EventEmitter, NgFor, NgIf} from 'angular2/angular2';

let page = window['page'] || function(x:string, y:Function){}





@Component({
  selector: 'my-ng2poly-component'

})
@View({
  directives: [NgFor],
  template: `
    <div>
      <ul>
        <li *ng-for="var item of items">'{{item}}') Etc etc'</li>
      </ul>
    </div>
  `
})
export class MyNg2PolyComponent {
  items:Array<string>;
  constructor(){
    this.items = ['a','b','c','d','1','2','3']
  }
}


@Component({
  selector: 'my-app'
})
@View({
  templateUrl: 'view/my-app/my-app.html',
  directives: [MyNg2PolyComponent]
})
export class MyAppComponent {
  route:string;
  constructor() {
    page('/', () => {
      this.route = 'home';
    });

    page('/users', () => {
      this.route = 'users';
    });

    page('/users/:name', function (data) {
      this.route = 'user-info';
    });

    page('/contact', () => {
      this.route = 'contact';
    });

    // add #! before urls
    page({
      hashbang: true
    });
  }

}

bootstrap(MyAppComponent)

