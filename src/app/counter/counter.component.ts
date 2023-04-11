import {Component} from "@angular/core"

@Component({
    selector: "app-contador",
    templateUrl: "./counter.component.html",
    styleUrls: ["./counter.component.css"]
})
export class counterComponent{
    contador:number = 23;

    handleCount(value: number){
        console.log(value);
        this.contador=value
    }
}