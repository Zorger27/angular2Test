webpackJsonp([1,4],{216:function(t,e,o){"use strict";var n=o(0),r=o(506);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(){}return t.prototype.getNotes=function(){return r.a},t.prototype.addNote=function(t){r.a.push(t)},t.prototype.rmNote=function(t){r.a.splice(t,1)},t.prototype.changeColor=function(t,e){r.a[t].color=e},t=i([o.i(n.B)(),s("design:paramtypes",[])],t)}()},331:function(t,e,o){"use strict";var n=o(0),r=o(202);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t}return t.prototype.getUsers=function(t){return t?this.http.get("https://jsonplaceholder.typicode.com/users/"+t):this.http.get("https://jsonplaceholder.typicode.com/users")},t=i([o.i(n.B)(),s("design:paramtypes",["function"==typeof(e=void 0!==r.b&&r.b)&&e||Object])],t);var e}()},388:function(t,e){function o(t){throw new Error("Cannot find module '"+t+"'.")}o.keys=function(){return[]},o.resolve=o,t.exports=o,o.id=388},389:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(476),r=o(0),i=o(521),s=o(509);i.a.production&&o.i(r.a)(),o.i(n.a)().bootstrapModule(s.a)},506:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n=[{text:"Some note 1",color:"red"},{text:"Some note 2",color:"green"},{text:"Some note 3",color:"white"},{text:"Some note 4",color:"white"}]},507:function(t,e,o){"use strict";var n=o(0),r=o(202);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.http=t}return t.prototype.getPosts=function(t){return t?this.http.get("https://jsonplaceholder.typicode.com/posts?userId="+t):this.http.get("https://jsonplaceholder.typicode.com/posts")},t=i([o.i(n.B)(),s("design:paramtypes",["function"==typeof(e=void 0!==r.b&&r.b)&&e||Object])],t);var e}()},508:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.title="app works!"}return t=r([o.i(n._5)({selector:"app-root",template:o(685),styles:[o(673)]}),i("design:paramtypes",[])],t)}()},509:function(t,e,o){"use strict";var n=o(147),r=o(0),i=o(467),s=o(202),c=o(325),a=o(508),f=o(513),p=o(511),l=o(515),u=o(514),d=o(510),h=o(516),y=o(518),g=o(520),b=o(512),m=o(519),_=o(517);o.d(e,"a",function(){return R});var v=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},x=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},R=function(){function t(){}return t=v([o.i(r.b)({declarations:[a.a,f.a,p.a,l.a,u.a,d.a,h.a,y.a,g.a,b.a,m.a,_.a],imports:[n.a,i.a,s.a,c.a.forRoot([{path:"notes",component:h.a},{path:"",component:y.a},{path:"users",component:g.a},{path:"posts/:id",component:_.a},{path:"posts",component:_.a}])],providers:[],bootstrap:[a.a]}),x("design:paramtypes",[])],t)}()},510:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.colors=["white","red","green","blue"],this.defaultColor="white",this.choosingColor=new n.Q}return t.prototype.ngOnInit=function(){},t.prototype.chooseColor=function(t){this.defaultColor=t,this.choosingColor.emit(this.defaultColor)},r([o.i(n.G)(),i("design:type",Object)],t.prototype,"defaultColor",void 0),r([o.i(n._2)(),i("design:type",Object)],t.prototype,"choosingColor",void 0),t=r([o.i(n._5)({selector:"color-editor",template:o(686),styles:[o(674)]}),i("design:paramtypes",[])],t)}()},511:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){this.x=10}return t.prototype.getSmth=function(){return this.x},t.prototype.ngOnInit=function(){this.getSmth()},t=r([o.i(n._5)({selector:"header",template:o(687),styles:[o(675)]}),i("design:paramtypes",[])],t)}()},512:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([o.i(n._5)({selector:"navbar",template:o(688),styles:[o(676)]}),i("design:paramtypes",[])],t)}()},513:function(t,e,o){"use strict";var n=o(0),r=o(216);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.ns=t,this.color="white"}return t.prototype.ngOnInit=function(){},t.prototype.addNote=function(t){var e={text:t.value,color:this.color};this.ns.addNote(e),t.value=""},t.prototype.chooseColor=function(t){this.color=t},t=i([o.i(n._5)({selector:"note-editor",template:o(689),styles:[o(677)],providers:[r.a]}),s("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},514:function(t,e,o){"use strict";var n=o(0),r=o(216);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.ns=t,this.onRmNote=new n.Q}return t.prototype.ngOnInit=function(){},t.prototype.rmNote=function(){this.onRmNote.emit(this.i)},t.prototype.changeColor=function(t){this.ns.changeColor(this.i,t)},i([o.i(n.G)(),s("design:type",Object)],t.prototype,"note",void 0),i([o.i(n.G)(),s("design:type",Object)],t.prototype,"i",void 0),i([o.i(n._2)(),s("design:type",Object)],t.prototype,"onRmNote",void 0),t=i([o.i(n._5)({selector:"note",template:o(690),styles:[o(678)],providers:[r.a]}),s("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},515:function(t,e,o){"use strict";var n=o(0),r=o(216);o.d(e,"a",function(){return c});var i=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},s=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t){this.ns=t}return t.prototype.ngOnInit=function(){this.getNotes()},t.prototype.getNotes=function(){this.notes=this.ns.getNotes()},t.prototype.rmNote=function(t){this.ns.rmNote(t)},t=i([o.i(n._5)({selector:"notes-list",template:o(691),styles:[o(679)],providers:[r.a]}),s("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},516:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([o.i(n._5)({selector:"notes",template:o(692),styles:[o(680)]}),i("design:paramtypes",[])],t)}()},517:function(t,e,o){"use strict";var n=o(0),r=o(507),i=o(331),s=o(325),c=o(370);o.n(c);o.d(e,"a",function(){return p});var a=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,o){this.ps=t,this.us=e,this.route=o}return t.prototype.ngOnInit=function(){this.getUserId(),this.getPosts()},t.prototype.getPosts=function(){var t=this;this.userId?this.ps.getPosts(this.userId).toPromise().then(function(e){t.posts=e.json()}):this.ps.getPosts().toPromise().then(function(e){t.posts=e.json()})},t.prototype.getUserId=function(){var t=this;this.route.params.subscribe(function(e){t.userId=e.id})},t=a([o.i(n._5)({selector:"posts",template:o(693),styles:[o(681)],providers:[r.a,i.a]}),f("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object,"function"==typeof(c=void 0!==i.a&&i.a)&&c||Object,"function"==typeof(p=void 0!==s.b&&s.b)&&p||Object])],t);var e,c,p}()},518:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnInit=function(){},t=r([o.i(n._5)({selector:"start",template:o(694),styles:[o(682)]}),i("design:paramtypes",[])],t)}()},519:function(t,e,o){"use strict";var n=o(0);o.d(e,"a",function(){return s});var r=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(){}return t.prototype.ngOnChanges=function(){console.log(this.user)},r([o.i(n.G)(),i("design:type",Object)],t.prototype,"user",void 0),t=r([o.i(n._5)({selector:"user-details",template:o(695),styles:[o(683)]}),i("design:paramtypes",[])],t)}()},520:function(t,e,o){"use strict";var n=o(0),r=o(331),i=o(370);o.n(i);o.d(e,"a",function(){return a});var s=this&&this.__decorate||function(t,e,o,n){var r,i=arguments.length,s=i<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,o,n);else for(var c=t.length-1;c>=0;c--)(r=t[c])&&(s=(i<3?r(s):i>3?r(e,o,s):r(e,o))||s);return i>3&&s&&Object.defineProperty(e,o,s),s},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},a=function(){function t(t){this.us=t}return t.prototype.ngOnInit=function(){this.getUsers()},t.prototype.getUsers=function(){var t=this;this.us.getUsers().toPromise().then(function(e){t.users=e.json()})},t.prototype.chooseUser=function(t){this.chosenUser=t},t=s([o.i(n._5)({selector:"users",template:o(696),styles:[o(684)],providers:[r.a]}),c("design:paramtypes",["function"==typeof(e=void 0!==r.a&&r.a)&&e||Object])],t);var e}()},521:function(t,e,o){"use strict";o.d(e,"a",function(){return n});var n={production:!0}},673:function(t,e){t.exports=""},674:function(t,e){t.exports='.color_editor__color{display:inline-block;width:25px;height:25px;border-radius:50%;border:2px solid rgba(0,0,0,.3);cursor:pointer;margin:0 5px;position:relative}.chosen:after{content:"";position:absolute;top:-2px;left:-2px;width:100%;height:100%;border-radius:50%;background-color:rgba(207,216,220,.5);border:2px solid rgba(207,216,220,.5)}'},675:function(t,e){t.exports=""},676:function(t,e){t.exports='.aside{width:200px;background-color:#32383e;position:fixed;top:0;left:0;height:100%}.aside__logo{text-align:center;padding:20px 0;background-color:#22272a;color:#fff;font-weight:700;text-transform:uppercase;margin-bottom:50px}.menu__link{display:block;padding:15px 0 15px 30px;color:#b1b5b9;position:relative}.menu__link,.menu__link:before{-webkit-transition:all .3s;transition:all .3s}.menu__link:before{content:"";position:absolute;top:0;left:0;width:0;height:100%;background-color:#1895e0}.menu__link:hover{color:#1895e0}.menu__link:hover:before{width:4px}'},677:function(t,e){t.exports=".note_editor{width:600px;box-sizing:border-box;padding:15px;margin:0 auto;background-color:#fff;box-shadow:0 3px 5px rgba(0,0,0,.2)}.note_editor__ta{width:100%;border:none;line-height:20px;font-size:14px;padding:10px;box-sizing:border-box;margin-bottom:15px}.note_editor__footer{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.note_editor__add_btn{text-transform:uppercase;display:inline-block;padding:0;border:none;border-radius:5px;padding:10px 30px;font-weight:700;outline:none;background-color:#fb0;cursor:pointer}.note_editor__add_btn:active{box-shadow:inset 0 0 10px -3px #000}"},678:function(t,e){t.exports=".note{width:300px;height:250px;box-shadow:0 3px 5px rgba(0,0,0,.2);margin-bottom:20px;box-sizing:border-box;padding:15px;position:relative;font-size:16px}.note__close{position:absolute;top:5px;right:5px;width:20px;cursor:pointer}.note color-editor{position:absolute;bottom:10px;left:10px}"},679:function(t,e){t.exports=".notes{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-pack:distribute;justify-content:space-around;margin-top:50px}"},680:function(t,e){t.exports=""},681:function(t,e){t.exports=".post{background-color:#f6f7f9;border-radius:7px;padding:20px;margin-bottom:20px;box-shadow:0 3px 20px -5px #000}"},682:function(t,e){t.exports='.start{height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:relative;z-index:1;padding:0 5%;background-image:url(assets/img/start.jpg);background-size:cover}.start:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgba(0,0,0,.5);z-index:-1}.start__title{color:#fff;text-transform:uppercase;font-size:36px;text-align:center}'},683:function(t,e){t.exports=".user__mess{font-weight:700;font-size:20px}"},684:function(t,e){t.exports=".users{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start}.users_list{border-top:1px solid #e1e1e1;width:45%}.users__row{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:15px 20px;border-bottom:1px solid #e1e1e1}user-details{width:45%}"},685:function(t,e){t.exports="<navbar></navbar>\n<router-outlet></router-outlet>"},686:function(t,e){t.exports='<div class="color_editor">\n  <div\n    *ngFor="let c of colors"\n    class="color_editor__color {{c}}"\n    [class.chosen]="defaultColor === c"\n    (click)="chooseColor( c )"\n  ></div>\n</div>'},687:function(t,e){t.exports="<h1>hello</h1>"},688:function(t,e){t.exports='<aside class="aside">\n  <div class="aside__logo">\n    Angular App\n  </div>\n  <nav class="menu">\n    <a class="menu__link" routerLink="/">Start</a>\n    <a class="menu__link" routerLink="/notes">Notes</a>\n    <a class="menu__link" routerLink="/users">Users</a>\n    <a class="menu__link" routerLink="/posts">Posts</a>\n  </nav>\n</aside>'},689:function(t,e){t.exports='<div class="note_editor">\n  <textarea #newNoteText rows="5" type="text" class="note_editor__ta" placeholder="Заметка..."></textarea>\n  <div class="note_editor__footer">\n    <color-editor (choosingColor)="chooseColor($event)"></color-editor>\n    <button class="note_editor__add_btn" (click)="addNote( newNoteText )" >Add note</button>\n  </div>\n</div>'},690:function(t,e){t.exports='<div class="note {{note.color}}">\n  {{note.text}} <br>\n  <img class="note__close" src="assets/img/close.svg" (click)="rmNote()" alt="">\n  <color-editor (choosingColor)="changeColor( $event )" [defaultColor]="note.color"></color-editor>\n</div>'},691:function(t,e){t.exports='<div class="notes">\n  <note\n    *ngFor="let note of notes; let i = index"\n    [note] = "note"\n    [i] = "i"\n    (onRmNote) = "rmNote( $event )"\n  ></note>\n</div>'},692:function(t,e){t.exports='<div class="page page--gray">\n    <note-editor></note-editor>\n    <notes-list></notes-list>\n</div>'},693:function(t,e){t.exports='<div class="page">\n  <img src="assets/img/loading2.gif" width="100" *ngIf="!posts" alt="">\n  <div class="posts">\n    <div class="post" *ngFor="let p of posts">\n      <h3 class="post__title">{{p.title}}</h3>\n      <p class="post__body">{{p.body}}</p>\n    </div>\n  </div>\n</div>'},694:function(t,e){t.exports='<section class="start">\n  <h1 class="start__title">It\'s test project for improoving skills in Angular 2</h1>\n</section>'},695:function(t,e){t.exports='<div class="user">\n  <p class="user__mess" *ngIf="!user">Choose user from the list for more details</p>\n  <div class="user_info" *ngIf="user">\n    <h2>{{user.id}}</h2>\n    <ul>\n      <li>{{user.name}}</li>\n      <li>{{user.username}}</li>\n      <li>{{user.email}}</li>\n      <li>{{user.phone}}</li>\n    </ul>\n    <a routerLink="/posts/{{user.id}}" class="btn">См. посты</a>\n  </div>\n</div>'},696:function(t,e){t.exports='<div class="page users">\n  <img src="assets/img/loading2.gif" width="100" alt="Loading..." *ngIf="!users">\n  <div class="users_list">\n    <div class="users__row" *ngFor="let u of users">\n      <div class="users__data">{{u.name}}</div>\n      <div>\n        <button class="btn" (click)="chooseUser( u )">More</button>\n      </div>\n    </div>\n  </div>\n\n  <user-details [user]="chosenUser"></user-details>\n</div>'},712:function(t,e,o){t.exports=o(389)}},[712]);