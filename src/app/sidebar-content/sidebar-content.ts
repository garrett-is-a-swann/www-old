import { Component, Input } from '@angular/core';

@Component({
    selector: 'sidebar-content',
    templateUrl: './sidebar-content.html',
    styleUrls: ['./sidebar-content.css']
})

export class SidebarContent {
    @Input('config') config: any;
    constructor(){
    }
}
