import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CurrencyCardComponent } from './currency-card.component';
import { CurrencyService } from '../../services/currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Currency, RequestCurrency } from 'src/app/models';
import { of } from 'rxjs';

describe('CurrencyCardComponent', () => {
  let component: CurrencyCardComponent;
  let fixture: ComponentFixture<CurrencyCardComponent>;
  let service: CurrencyService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [CurrencyCardComponent],
      providers: [CurrencyService],
    }).compileComponents();

    fixture = TestBed.createComponent(CurrencyCardComponent);

    service = TestBed.inject(CurrencyService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should try to load  a cache information when init component', () => {
    const spyCache = jest
      .spyOn(service, 'getCacheCurrency')
      .mockReturnValue({ value: 5 } as Currency);
    const spyRequest = jest.spyOn(service, 'loadCurrency');

    component.ngOnInit();

    expect(spyCache).toHaveBeenCalledTimes(1);
    expect(spyRequest).not.toHaveBeenCalled();
    expect(component?.currency?.value).toBe(5);
  });

  it('should load new data if no cached information is available', () => {
    const spyCache = jest
      .spyOn(service, 'getCacheCurrency')
      .mockReturnValue(null);
    const spyRequest = jest
      .spyOn(service, 'loadCurrency')
      .mockReturnValue(of({ CAD: { bid: 5, varBid: 5 } } as RequestCurrency));

    component.currencyCode = 'CAD';

    component.ngOnInit();

    expect(spyCache).toHaveBeenCalledTimes(1);
    expect(spyRequest).toHaveBeenCalledTimes(1);
  });

  it('should load new data when is called a card refresh', () => {
    const spyRequest = jest
      .spyOn(service, 'loadCurrency')
      .mockReturnValue(of({ CAD: { bid: 5, varBid: 5 } } as RequestCurrency));

    component.onRefreshCard();

    expect(spyRequest).toHaveBeenCalledTimes(1);
  });
});
