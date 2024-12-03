import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavlinkComponent } from './navlink.component';
import { provideRouter } from '@angular/router';

describe('NavlinkComponent', () => {
  let component: NavlinkComponent;
  let fixture: ComponentFixture<NavlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavlinkComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(NavlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
