import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeAccordionComponent } from './poke-accordion.component';

describe('PokeAccordionComponent', () => {
  let component: PokeAccordionComponent;
  let fixture: ComponentFixture<PokeAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeAccordionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
