import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import { CommonModule } from '@angular/common';

// Shared Modules
import {SharedModule} from "../shared/shared.module";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SharedModule],
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent {

}
