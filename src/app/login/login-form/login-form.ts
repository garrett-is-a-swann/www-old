import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'login-form',
    templateUrl: './login-form.html',
    styleUrls: ['./login-form.css']
})
export class LoginFormComponent {
    @Input() config: any;
    heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
    addHero(newHero: string) {
        if (newHero) {
            this.heroes.push(newHero);
        }
    }
}
