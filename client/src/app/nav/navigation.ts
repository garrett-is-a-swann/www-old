import { Component } from '@angular/core';
import { Title }     from '@angular/platform-browser';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.html',
    styleUrls: ['./navigation.css']
})
export class NavComponent {
    title = 'app';
    public constructor(private titleService: Title) {
        this.titleService.setTitle('Garrett Swann | Home')
    }

    public setTitle( newTitle: string) {
        this.titleService.setTitle( newTitle );
    }

    config: any = {
        Sidebar:[
            {type: 'img',
                src: 'assets/images/mustachioed_man.png',
                alt: 'Garrett Swann with a curly mustache and beard.'
            }
        ],
        Content:[
            {type: 'p',
                content: "This is the beginning's of my site. "+
                "I plan to host a blog, and other code projects written by me here. "},
            {type: 'p',
                content:"Stay tuned for hopefully cool things!"}
        ]
    };
}
