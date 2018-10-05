import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

    currentUrl: string;

    constructor(private router: Router) {
        // original
        //router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url);

        // fix from youtube comments
        router.events.subscribe(dummyVar => {
            if (dummyVar instanceof NavigationEnd) {
                this.currentUrl = dummyVar.url;
            }
        });

    }

    ngOnInit() {}

}
