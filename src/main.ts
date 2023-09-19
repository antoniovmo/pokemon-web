import {bootstrapApplication} from "@angular/platform-browser";

import {importProvidersFrom} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";

// Components
import {AppComponent} from "./app/app.component";

// Routing
import {provideRouter} from "@angular/router";

// Routing
import {AppRoutes} from "./app/app-routing";

//NgRx
import {provideStore} from "@ngrx/store";
import {provideEffects} from "@ngrx/effects";
import {provideStoreDevtools} from "@ngrx/store-devtools";

import {ROOT_REDUCERS} from "./app/state/app.state";
import {PokemonEffects} from "./app/state/effects/pokemon.effects";



bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(AppRoutes),
    provideEffects([PokemonEffects]),
    importProvidersFrom(HttpClientModule),

    //Ngrx
    provideStore(ROOT_REDUCERS),
    provideStoreDevtools({ maxAge: 25, logOnly: true})
  ]
}).catch(err => console.error(err));
