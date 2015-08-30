/// <reference path="../typings/angular2/angular2.d.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var page = window['page'] || function (x, y) { };
var MyNg2PolyComponent = (function () {
    function MyNg2PolyComponent() {
        this.items = ['a', 'b', 'c', 'd', '1', '2', '3'];
    }
    MyNg2PolyComponent = __decorate([
        angular2_1.Component({
            selector: 'my-ng2poly-component'
        }),
        angular2_1.View({
            directives: [angular2_1.NgFor],
            template: "\n    <div>\n      <ul>\n        <li *ng-for=\"var item of items\">'{{item}}') Etc etc'</li>\n      </ul>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], MyNg2PolyComponent);
    return MyNg2PolyComponent;
})();
exports.MyNg2PolyComponent = MyNg2PolyComponent;
var MyAppComponent = (function () {
    function MyAppComponent() {
        var _this = this;
        page('/', function () {
            _this.route = 'home';
        });
        page('/users', function () {
            _this.route = 'users';
        });
        page('/users/:name', function (data) {
            this.route = 'user-info';
        });
        page('/contact', function () {
            _this.route = 'contact';
        });
        // add #! before urls
        page({
            hashbang: true
        });
    }
    MyAppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app'
        }),
        angular2_1.View({
            templateUrl: 'view/my-app/my-app.html',
            directives: [MyNg2PolyComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MyAppComponent);
    return MyAppComponent;
})();
exports.MyAppComponent = MyAppComponent;
angular2_1.bootstrap(MyAppComponent);
