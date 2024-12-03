import { Component } from '@angular/core';
import { NavlinkComponent } from './navlink/navlink.component';
import { LegalLinkComponent } from './legal-link/legal-link.component';

@Component({
  selector: 'navbar',
  standalone: true,
  imports: [NavlinkComponent, LegalLinkComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {}
