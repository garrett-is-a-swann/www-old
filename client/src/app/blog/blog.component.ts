import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

    constructor(private blogService: BlogService) { };

    posts:any = [];

    monthNames:string[] = ['January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];

    ngOnInit() {
        this.blogService.getContent().subscribe((data:any) => {
            for(var i=0; i<data.length; i++) {
                var date_time = new Date(data[i].created_at);
                this.posts.push({
                    created_at: date_time.getDay()
                                +' '+this.monthNames[date_time.getMonth()]
                                +' '+date_time.getUTCFullYear()
                    ,id: data[i].id
                    ,summary: data[i].summary
                    ,title: data[i].title
                })
            }
        })
    }

    onSelect(data:any) {
        console.log(data);
    }

    showPosts() {

    }
}

export class BlogPost {
    title:string;
    summary: string;
    content: string;
    author: string;
    date_time: string;
}
