import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompteurComponent } from './compteur.component';
import { By } from '@angular/platform-browser';

describe('CompteurComponent', () => {
  let component: CompteurComponent;
  let fixture: ComponentFixture<CompteurComponent>;
  let spanEl:HTMLSpanElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //On capture un élément html du template dont on 
    //veut tester la valeur
    spanEl = fixture.debugElement
    .query(By.css('span'))
    .nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increment counter', () => {
    //On déclenche la méthode increment du component
    component.increment();
    //On vérifie que le compte s'est bien incrémenté
    expect(component.compte).toBe(1);
    //On déclenche la détection de changement pour que 
    //les modification du component se retranscrivent
    //dans le template
    fixture.detectChanges();

    //On test la valeur de notre élément html
    expect(spanEl.textContent).toBe("1");

  });

  it('should decrement counter', () => {
    let btnDecrement = 
    fixture.debugElement.queryAll(By.css('button'))[1]
    .nativeElement;

    btnDecrement.click();
    //component.decrement();
    
    expect(component.compte).toBe(-1);
    
    fixture.detectChanges();

    expect(spanEl.textContent).toBe("-1");

  });

  it('should reset counter', () => {
    component.reset();
    
    expect(component.compte).toBe(0);
    
    fixture.detectChanges();

    expect(spanEl.textContent).toBe("0");

  });
});
