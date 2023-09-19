import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPokemonComponent } from './view-pokemon.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ViewPokemonComponent', () => {
  let component: ViewPokemonComponent;
  let fixture: ComponentFixture<ViewPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ViewPokemonComponent, HttpClientTestingModule, RouterModule.forRoot([]) ]
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
