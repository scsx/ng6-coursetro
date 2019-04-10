import {
    Component,
    OnInit
} from '@angular/core';

@Component({
    selector: 'app-hovertest',
    templateUrl: './hovertest.component.html'
})
export class HovertestComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

    message = "";
    canonicalMessage = "";
    mouseEnter(div: string) {
        this.message = "Entered the " + div + " box.";
    }

    mouseLeave(div: string) {
        this.message = "Left the " + div + " box.";
    }
    canonicalForm() {
        this.canonicalMessage = "This also works";
        console.log("This also works");
    }

}
