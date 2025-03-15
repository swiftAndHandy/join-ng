import { JoinButtonDirective } from './join-button.directive';
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Component } from "@angular/core";
import { By } from '@angular/platform-browser';

@Component({
  template: `<div [joinButton]="{}"></div>`, // nur Template
})
class TestComponent {}

describe("JoinButtonDirective", () => {
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [JoinButtonDirective],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
  });

  it("should create an instance", () => {
    const debugElement = fixture.debugElement.query(By.directive(JoinButtonDirective));
    expect(debugElement).toBeTruthy();
  });
});
