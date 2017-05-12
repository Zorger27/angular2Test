webpackJsonp([1,4],{

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__notes__ = __webpack_require__(506);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesService = (function () {
    function NotesService() {
    }
    // constructor() { }
    NotesService.prototype.getNotes = function () {
        return __WEBPACK_IMPORTED_MODULE_1__notes__["a" /* NOTES */];
    };
    NotesService.prototype.addNote = function (note) {
        __WEBPACK_IMPORTED_MODULE_1__notes__["a" /* NOTES */].push(note);
    };
    NotesService.prototype.rmNote = function (i) {
        __WEBPACK_IMPORTED_MODULE_1__notes__["a" /* NOTES */].splice(i, 1);
    };
    NotesService.prototype.changeColor = function (i, color) {
        __WEBPACK_IMPORTED_MODULE_1__notes__["a" /* NOTES */][i].color = color;
    };
    NotesService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [])
    ], NotesService);
    return NotesService;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/notes.service.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
    }
    UsersService.prototype.getUsers = function (id) {
        if (id) {
            return this.http.get('https://jsonplaceholder.typicode.com/users/' + id);
        }
        else {
            return this.http.get('https://jsonplaceholder.typicode.com/users');
        }
    };
    UsersService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], UsersService);
    return UsersService;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/users.service.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 388;


/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(509);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/main.js.map

/***/ }),

/***/ 506:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NOTES; });
var NOTES = [
    { text: 'Some note 1', color: 'red' },
    { text: 'Some note 2', color: 'green' },
    { text: 'Some note 3', color: 'white' },
    { text: 'Some note 4', color: 'white' }
];
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/notes.js.map

/***/ }),

/***/ 507:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(202);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostsService = (function () {
    function PostsService(http) {
        this.http = http;
    }
    PostsService.prototype.getPosts = function (id) {
        if (id) {
            return this.http.get('https://jsonplaceholder.typicode.com/posts?userId=' + id);
        }
        else {
            return this.http.get('https://jsonplaceholder.typicode.com/posts');
        }
    };
    PostsService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PostsService);
    return PostsService;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/posts.service.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(687),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/app.component.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__note_editor_note_editor_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_header_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__notes_list_notes_list_component__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__note_note_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__color_editor_color_editor_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notes_notes_component__ = __webpack_require__(516);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__start_start_component__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__users_users_component__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_details_user_details_component__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__posts_posts_component__ = __webpack_require__(517);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__note_editor_note_editor_component__["a" /* NoteEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__notes_list_notes_list_component__["a" /* NotesListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__note_note_component__["a" /* NoteComponent */],
                __WEBPACK_IMPORTED_MODULE_10__color_editor_color_editor_component__["a" /* ColorEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_11__notes_notes_component__["a" /* NotesComponent */],
                __WEBPACK_IMPORTED_MODULE_12__start_start_component__["a" /* StartComponent */],
                __WEBPACK_IMPORTED_MODULE_13__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_14__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__user_details_user_details_component__["a" /* UserDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__posts_posts_component__["a" /* PostsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: 'notes',
                        component: __WEBPACK_IMPORTED_MODULE_11__notes_notes_component__["a" /* NotesComponent */]
                    },
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_12__start_start_component__["a" /* StartComponent */]
                    },
                    {
                        path: 'users',
                        component: __WEBPACK_IMPORTED_MODULE_13__users_users_component__["a" /* UsersComponent */]
                    },
                    {
                        path: 'posts/:id',
                        component: __WEBPACK_IMPORTED_MODULE_16__posts_posts_component__["a" /* PostsComponent */]
                    },
                    {
                        path: 'posts',
                        component: __WEBPACK_IMPORTED_MODULE_16__posts_posts_component__["a" /* PostsComponent */]
                    }
                ])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/app.module.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorEditorComponent = (function () {
    function ColorEditorComponent() {
        this.colors = ['white', 'red', 'green', 'blue'];
        this.defaultColor = 'white';
        this.choosingColor = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    ColorEditorComponent.prototype.ngOnInit = function () {
    };
    ColorEditorComponent.prototype.chooseColor = function (c) {
        this.defaultColor = c;
        this.choosingColor.emit(this.defaultColor);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], ColorEditorComponent.prototype, "defaultColor", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], ColorEditorComponent.prototype, "choosingColor", void 0);
    ColorEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'color-editor',
            template: __webpack_require__(688),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [])
    ], ColorEditorComponent);
    return ColorEditorComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/color-editor.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        // str:string = 'String';
        // num:number = 5;
        // bool:boolean = true;
        // arr:number[] = [1,2,3];
        // x = 234;
        this.x = 10;
    }
    HeaderComponent.prototype.getSmth = function () {
        return this.x;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.getSmth();
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'header',
            template: __webpack_require__(689),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/header.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'navbar',
            template: __webpack_require__(690),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/navbar.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteEditorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteEditorComponent = (function () {
    function NoteEditorComponent(ns) {
        this.ns = ns;
        this.color = 'white';
    }
    NoteEditorComponent.prototype.ngOnInit = function () {
    };
    NoteEditorComponent.prototype.addNote = function (noteText) {
        var note = {
            text: noteText.value,
            color: this.color
        };
        this.ns.addNote(note);
        noteText.value = '';
    };
    NoteEditorComponent.prototype.chooseColor = function (c) {
        this.color = c;
    };
    NoteEditorComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'note-editor',
            template: __webpack_require__(691),
            styles: [__webpack_require__(679)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]) === 'function' && _a) || Object])
    ], NoteEditorComponent);
    return NoteEditorComponent;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/note-editor.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NoteComponent = (function () {
    function NoteComponent(ns) {
        this.ns = ns;
        this.onRmNote = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* EventEmitter */]();
    }
    NoteComponent.prototype.ngOnInit = function () {
    };
    NoteComponent.prototype.rmNote = function () {
        this.onRmNote.emit(this.i);
    };
    NoteComponent.prototype.changeColor = function (c) {
        this.ns.changeColor(this.i, c);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "note", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "i", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Output */])(), 
        __metadata('design:type', Object)
    ], NoteComponent.prototype, "onRmNote", void 0);
    NoteComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'note',
            template: __webpack_require__(692),
            styles: [__webpack_require__(680)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]) === 'function' && _a) || Object])
    ], NoteComponent);
    return NoteComponent;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/note.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__ = __webpack_require__(216);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotesListComponent = (function () {
    function NotesListComponent(ns) {
        this.ns = ns;
    }
    NotesListComponent.prototype.ngOnInit = function () {
        this.getNotes();
    };
    NotesListComponent.prototype.getNotes = function () {
        this.notes = this.ns.getNotes();
    };
    NotesListComponent.prototype.rmNote = function (i) {
        this.ns.rmNote(i);
    };
    NotesListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'notes-list',
            template: __webpack_require__(693),
            styles: [__webpack_require__(681)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_notes_service__["a" /* NotesService */]) === 'function' && _a) || Object])
    ], NotesListComponent);
    return NotesListComponent;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/notes-list.component.js.map

/***/ }),

/***/ 516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotesComponent = (function () {
    function NotesComponent() {
    }
    NotesComponent.prototype.ngOnInit = function () {
    };
    NotesComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'notes',
            template: __webpack_require__(694),
            styles: [__webpack_require__(682)]
        }), 
        __metadata('design:paramtypes', [])
    ], NotesComponent);
    return NotesComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/notes.component.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_posts_service__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_users_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PostsComponent = (function () {
    function PostsComponent(ps, us, route) {
        this.ps = ps;
        this.us = us;
        this.route = route;
    }
    PostsComponent.prototype.ngOnInit = function () {
        this.getUserId();
        this.getPosts();
    };
    PostsComponent.prototype.getPosts = function () {
        var _this = this;
        if (!this.userId) {
            this.ps.getPosts().toPromise()
                .then(function (res) {
                _this.posts = res.json();
            });
        }
        else {
            this.ps.getPosts(this.userId).toPromise()
                .then(function (res) {
                _this.posts = res.json();
            });
        }
    };
    PostsComponent.prototype.getUserId = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params["id"];
        });
    };
    PostsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'posts',
            template: __webpack_require__(695),
            styles: [__webpack_require__(683)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_posts_service__["a" /* PostsService */], __WEBPACK_IMPORTED_MODULE_2__shared_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_posts_service__["a" /* PostsService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_posts_service__["a" /* PostsService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__shared_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__shared_users_service__["a" /* UsersService */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === 'function' && _c) || Object])
    ], PostsComponent);
    return PostsComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/posts.component.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StartComponent = (function () {
    function StartComponent() {
    }
    StartComponent.prototype.ngOnInit = function () {
    };
    StartComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'start',
            template: __webpack_require__(696),
            styles: [__webpack_require__(684)]
        }), 
        __metadata('design:paramtypes', [])
    ], StartComponent);
    return StartComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/start.component.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailsComponent = (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnChanges = function () {
        console.log(this.user);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Input */])(), 
        __metadata('design:type', Object)
    ], UserDetailsComponent.prototype, "user", void 0);
    UserDetailsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'user-details',
            template: __webpack_require__(697),
            styles: [__webpack_require__(685)]
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/user-details.component.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_users_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = (function () {
    function UsersComponent(us) {
        this.us = us;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        this.us.getUsers().toPromise()
            .then(function (response) {
            _this.users = response.json();
        });
    };
    UsersComponent.prototype.chooseUser = function (u) {
        this.chosenUser = u;
    };
    UsersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'users',
            template: __webpack_require__(698),
            styles: [__webpack_require__(686)],
            providers: [__WEBPACK_IMPORTED_MODULE_1__shared_users_service__["a" /* UsersService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_users_service__["a" /* UsersService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__shared_users_service__["a" /* UsersService */]) === 'function' && _a) || Object])
    ], UsersComponent);
    return UsersComponent;
    var _a;
}());
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/users.component.js.map

/***/ }),

/***/ 521:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/alexandr/WORK/courses/FrontEnd_PRO/angularAppLesson/src/environment.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ".color_editor__color {\n  display: inline-block;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  border: 2px solid rgba(0, 0, 0, 0.3);\n  cursor: pointer;\n  margin: 0 5px;\n  position: relative; }\n\n.chosen:after {\n  content: '';\n  position: absolute;\n  top: -2px;\n  left: -2px;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: rgba(207, 216, 220, 0.5);\n  border: 2px solid rgba(207, 216, 220, 0.5); }\n"

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ".aside {\n  width: 200px;\n  background-color: #32383E;\n  position: fixed;\n  top: 0;\n  left: 0;\n  height: 100%; }\n  .aside__logo {\n    text-align: center;\n    padding: 20px 0;\n    background-color: #22272A;\n    color: #fff;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin-bottom: 50px; }\n\n.menu__link {\n  display: block;\n  padding: 15px 0 15px 30px;\n  color: #B1B5B9;\n  -webkit-transition: all .3s;\n  transition: all .3s;\n  position: relative; }\n  .menu__link:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 0;\n    height: 100%;\n    background-color: #1895E0;\n    -webkit-transition: all .3s;\n    transition: all .3s; }\n  .menu__link:hover {\n    color: #1895E0; }\n    .menu__link:hover:before {\n      width: 4px; }\n"

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ".note_editor {\n  width: 600px;\n  box-sizing: border-box;\n  padding: 15px;\n  margin: 0 auto;\n  background-color: #fff;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2); }\n  .note_editor__ta {\n    width: 100%;\n    border: none;\n    line-height: 20px;\n    font-size: 14px;\n    padding: 10px;\n    box-sizing: border-box;\n    margin-bottom: 15px; }\n  .note_editor__footer {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .note_editor__add_btn {\n    text-transform: uppercase;\n    display: inline-block;\n    padding: 0;\n    border: none;\n    border-radius: 5px;\n    padding: 10px 30px;\n    font-weight: 700;\n    outline: none;\n    background-color: #FFBB00;\n    cursor: pointer; }\n    .note_editor__add_btn:active {\n      box-shadow: inset 0 0 10px -3px #000; }\n"

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ".note {\n  width: 300px;\n  height: 250px;\n  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\n  margin-bottom: 20px;\n  box-sizing: border-box;\n  padding: 15px;\n  position: relative;\n  font-size: 16px; }\n  .note__close {\n    position: absolute;\n    top: 5px;\n    right: 5px;\n    width: 20px;\n    cursor: pointer; }\n  .note color-editor {\n    position: absolute;\n    bottom: 10px;\n    left: 10px; }\n"

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ".notes {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  margin-top: 50px; }\n"

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = ".post {\n  background-color: #F6F7F9;\n  border-radius: 7px;\n  padding: 20px;\n  margin-bottom: 20px;\n  box-shadow: 0 3px 20px -5px #000; }\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = ".start {\n  height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  position: relative;\n  z-index: 1;\n  padding: 0 5%;\n  background-image: url(\"assets/img/start.jpg\");\n  background-size: cover; }\n  .start:after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: -1; }\n  .start__title {\n    color: #fff;\n    text-transform: uppercase;\n    font-size: 36px;\n    text-align: center; }\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = ".user__mess {\n  font-weight: 700;\n  font-size: 20px; }\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = ".users {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start; }\n  .users_list {\n    border-top: 1px solid #e1e1e1;\n    width: 45%; }\n  .users__row {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    padding: 15px 20px;\n    border-bottom: 1px solid #e1e1e1; }\n\nuser-details {\n  width: 45%; }\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<navbar></navbar>\n<router-outlet></router-outlet>"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"color_editor\">\n  <div\n    *ngFor=\"let c of colors\"\n    class=\"color_editor__color {{c}}\"\n    [class.chosen]=\"defaultColor === c\"\n    (click)=\"chooseColor( c )\"\n  ></div>\n</div>"

/***/ }),

/***/ 689:
/***/ (function(module, exports) {

module.exports = "<h1>hello</h1>"

/***/ }),

/***/ 690:
/***/ (function(module, exports) {

module.exports = "<aside class=\"aside\">\n  <div class=\"aside__logo\">\n    Angular App\n  </div>\n  <nav class=\"menu\">\n    <a class=\"menu__link\" routerLink=\"/\">Start</a>\n    <a class=\"menu__link\" routerLink=\"/notes\">Notes</a>\n    <a class=\"menu__link\" routerLink=\"/users\">Users</a>\n    <a class=\"menu__link\" routerLink=\"/posts\">Posts</a>\n  </nav>\n</aside>"

/***/ }),

/***/ 691:
/***/ (function(module, exports) {

module.exports = "<div class=\"note_editor\">\n  <textarea #newNoteText rows=\"5\" type=\"text\" class=\"note_editor__ta\" placeholder=\"Заметка...\"></textarea>\n  <div class=\"note_editor__footer\">\n    <color-editor (choosingColor)=\"chooseColor($event)\"></color-editor>\n    <button class=\"note_editor__add_btn\" (click)=\"addNote( newNoteText )\" >Add note</button>\n  </div>\n</div>"

/***/ }),

/***/ 692:
/***/ (function(module, exports) {

module.exports = "<div class=\"note {{note.color}}\">\n  {{note.text}} <br>\n  <img class=\"note__close\" src=\"assets/img/close.svg\" (click)=\"rmNote()\" alt=\"\">\n  <color-editor (choosingColor)=\"changeColor( $event )\" [defaultColor]=\"note.color\"></color-editor>\n</div>"

/***/ }),

/***/ 693:
/***/ (function(module, exports) {

module.exports = "<div class=\"notes\">\n  <note\n    *ngFor=\"let note of notes; let i = index\"\n    [note] = \"note\"\n    [i] = \"i\"\n    (onRmNote) = \"rmNote( $event )\"\n  ></note>\n</div>"

/***/ }),

/***/ 694:
/***/ (function(module, exports) {

module.exports = "<div class=\"page page--gray\">\n    <note-editor></note-editor>\n    <notes-list></notes-list>\n</div>"

/***/ }),

/***/ 695:
/***/ (function(module, exports) {

module.exports = "<div class=\"page\">\n  <img src=\"assets/img/loading2.gif\" width=\"100\" *ngIf=\"!posts\" alt=\"\">\n  <div class=\"posts\">\n    <div class=\"post\" *ngFor=\"let p of posts\">\n      <h3 class=\"post__title\">{{p.title}}</h3>\n      <p class=\"post__body\">{{p.body}}</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = "<section class=\"start\">\n  <h1 class=\"start__title\">It's test project for improoving skills in Angular 2</h1>\n</section>"

/***/ }),

/***/ 697:
/***/ (function(module, exports) {

module.exports = "<div class=\"user\">\n  <p class=\"user__mess\" *ngIf=\"!user\">Choose user from the list for more details</p>\n  <div class=\"user_info\" *ngIf=\"user\">\n    <h2>{{user.id}}</h2>\n    <ul>\n      <li>{{user.name}}</li>\n      <li>{{user.username}}</li>\n      <li>{{user.email}}</li>\n      <li>{{user.phone}}</li>\n    </ul>\n    <a routerLink=\"/posts/{{user.id}}\" class=\"btn\">См. посты</a>\n  </div>\n</div>"

/***/ }),

/***/ 698:
/***/ (function(module, exports) {

module.exports = "<div class=\"page users\">\n  <img src=\"assets/img/loading2.gif\" width=\"100\" alt=\"Loading...\" *ngIf=\"!users\">\n  <div class=\"users_list\">\n    <div class=\"users__row\" *ngFor=\"let u of users\">\n      <div class=\"users__data\">{{u.name}}</div>\n      <div>\n        <button class=\"btn\" (click)=\"chooseUser( u )\">More</button>\n      </div>\n    </div>\n  </div>\n\n  <user-details [user]=\"chosenUser\"></user-details>\n</div>"

/***/ }),

/***/ 715:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(389);


/***/ })

},[715]);
//# sourceMappingURL=main.bundle.map