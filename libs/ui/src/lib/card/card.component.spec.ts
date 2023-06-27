import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { Currency } from '@freterapido/model';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return price color red when value is less then one', () => {
    component.currency = { value: 0.5 } as Currency;

    expect(component.priceColor()).toBe('red');
  });

  it('should return price color blue when value is bigger then five', () => {
    component.currency = { value: 6 } as Currency;

    expect(component.priceColor()).toBe('blue');
  });

  it('should return price color green when value is between 1 and 5', () => {
    component.currency = { value: 3 } as Currency;

    expect(component.priceColor()).toBe('green');
  });
});
