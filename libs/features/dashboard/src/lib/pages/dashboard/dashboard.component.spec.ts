import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { CurrencyCardComponent } from '../../components/currency-card/currency-card.component';
import { CurrencyService } from '../../services/currency.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { UiModule } from '@freterapido/ui';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, UiModule],
      declarations: [DashboardComponent, CurrencyCardComponent],
      providers: [CurrencyService],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
