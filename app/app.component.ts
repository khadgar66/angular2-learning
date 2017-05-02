import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {FavoriteComponent} from './favorite.component';

@Component({
    selector: 'my-app',
    template: `
        <h1>My First Angular 2 App</h1>

        <img src="{{ imageUrl }}"/>
        
        <courses></courses>
        <authors></authors>`,
    directives:[CoursesComponent, AuthorsComponent, FavoriteComponent]
    
})
export class AppComponent { }