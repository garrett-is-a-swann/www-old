import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'sidebar-content',
    templateUrl: './sidebar-content.html',
    styleUrls: ['./sidebar-content.css']
})

export class SidebarContent {
    @Input('config') config: any;
    path:string ='';
    constructor(router: Router) {
        this.path = router.url;
    }
}
