import {Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

// Services
import {PokemonService} from "../../../services/pokemon.service";
import {debounceTime, Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-search-pokemon',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './search-pokemon.component.html',
  styleUrls: ['./search-pokemon.component.css']
})
export class SearchPokemonComponent implements OnInit, OnDestroy {

  // Service
  pokemon = inject(PokemonService);

  // Form
  formBuilder = inject(FormBuilder);
  group!: FormGroup;

  // Global closer
  global$ = new Subject<boolean>();

  @Output() searchEvent = new EventEmitter<string>();

  ngOnInit(): void {
    this.initForm();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subjects
    this.global$.next(true);
    this.global$.complete();
  }

  createForm() {
    return {
      search: ['', [Validators.minLength(3)]],
    };
  }

  initForm() {
    this.group = this.formBuilder.group(this.createForm());

    this.group.get('search')!.valueChanges.pipe(debounceTime(500), takeUntil(this.global$))
      .subscribe((rSearch) => {
          if (rSearch) {
            if (rSearch.length >= 3)
              this.searchEvent.emit(rSearch);
            else
              this.searchEvent.emit('');
          } else {
            this.searchEvent.emit('');
          }
      });
  }

  checkMinLengthForm( pField: string ) {
    return this.group.controls[pField].errors?.['minlength']
  }
}
