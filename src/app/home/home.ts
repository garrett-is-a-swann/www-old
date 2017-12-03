import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {
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
