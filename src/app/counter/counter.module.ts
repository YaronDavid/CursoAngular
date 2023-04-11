import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { counterComponent } from "./counter.component";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ButtonDisComponent } from "./button-dis/button-dis.component";


@NgModule({
    declarations: [ 
        counterComponent, ButtonAddComponent, ButtonDisComponent
    ],
    imports: [CommonModule],
    exports: [counterComponent]
})
export class counterModule{

}