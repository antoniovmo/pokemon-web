import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPokemonComponent } from './view-pokemon.component';
import {RouterModule} from "@angular/router";

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ViewPokemonComponent, RouterModule.forRoot([]) ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ViewPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
