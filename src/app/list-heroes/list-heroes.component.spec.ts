import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHeroesComponent } from './list-heroes.component';
import { HeroesService } from '../heroes.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { By } from '@angular/platform-browser';
import { Hero } from '../hero';

describe('ListHeroesComponent', () => {
  let component: ListHeroesComponent;
  let fixture: ComponentFixture<ListHeroesComponent>;

  beforeEach(async(() => {
    //Avant chaque test, on crée un genre de NgModule,
    //avec ses propres declarations de components,
    //ses imports de Module et ses providers de service
    TestBed.configureTestingModule({
      declarations: [ ListHeroesComponent ],
      imports: [HttpClientModule],
      providers: [HeroesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHeroesComponent);
    component = fixture.componentInstance;

    let service = fixture.debugElement.injector.get(HeroesService);

    spyOn(service, 'getAllHeroes').and
    .returnValue(Observable.of([new Hero('test', 1), new Hero('test 2', 2), new Hero('test 3', 3)]));

    fixture.detectChanges();
  });

  it('should create with 3 li\'s', () => {
    expect(component).toBeTruthy();
    let lis = fixture.debugElement
    .queryAll(By.css('li'));

    expect(lis.length).toBe(3);
  });
});
