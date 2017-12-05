import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css']
})
export class HomeComponent {
    path:string ='';
    constructor(router: Router) {
        this.path = router.url;
    }
    homeConfig: any = {
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

    linksConfig: any = {
    };

    aboutConfig: any = {
        Sidebar:[
            {type: 'img',
                src: 'assets/images/garrettAngelIsland.png',
                alt: 'Garrett Swann on Angel Island in San Francisco, California.'
            }
        ],
        Content:[
            {type: 'h3',
                content: "About Me"}

        ]
    };

    resumeConfig: any = {
    };
}
