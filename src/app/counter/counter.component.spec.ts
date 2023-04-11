import { Component } from "@angular/core";
import { counterComponent } from "./counter.component";
import { ButtonAddComponent } from "./button-add/button-add.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonDisComponent } from "./button-dis/button-dis.component";

describe("counterComponent", ()=>{
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [counterComponent,ButtonAddComponent, ButtonDisComponent],
        }).compileComponents()
    })
   
    it("se debe crear el componente counter", ()=>{
        const fixture = TestBed.createComponent(counterComponent)
        expect(fixture.componentInstance).toBeTruthy()
    });

    it("debe crear el texto Counter: 23", ()=>{
        const fixture = TestBed.createComponent(counterComponent)
        fixture.detectChanges()

        const compiled: HTMLElement = fixture.nativeElement;
        console.log(compiled)

        expect(compiled.querySelector("h1")?.textContent).toEqual("Contador: 23")
    })

    it("valor inicial del contador es 23", () => {
        const counter = new counterComponent();
        expect(counter.contador).toEqual(23)
    });

})

describe("Integration testing", ()=>{

    let fixture: ComponentFixture<counterComponent>;
    let component: counterComponent

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [counterComponent,
            ButtonAddComponent,
            ButtonDisComponent],
        }).compileComponents()
    });
    beforeEach(()=>{
        fixture = TestBed.createComponent(counterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    })

    it("evento click", ()=>{
        const compiled: HTMLElement = fixture.nativeElement;
        const counterValue = compiled.querySelector("h1")!;
        const btnAdd: HTMLElement = fixture.debugElement.nativeElement.querySelector("#add");

        btnAdd.click();

        fixture.detectChanges()

        expect(counterValue?.textContent).toEqual("Contador: 24")

    })

})