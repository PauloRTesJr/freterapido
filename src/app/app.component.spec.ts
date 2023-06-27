import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@freterapido/ui';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, UiModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it(`should render header'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('freterapido-header')).toBeTruthy();
  });
});
