import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokemonComponent } from './search-pokemon.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('SearchPokemonComponent', () => {
  let component: SearchPokemonComponent;
  let fixture: ComponentFixture<SearchPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ SearchPokemonComponent, HttpClientTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should invalid form',() => {
    const pSearch = component.group.controls['search']
    pSearch.setValue('gg')
    expect(component.group.invalid).toBeTruthy()
  })

  it('should valid form',() => {
    const pSearch = component.group.controls['search']
    pSearch.setValue('ggg')
    expect(component.group.valid).toBeTruthy()
  })
});
