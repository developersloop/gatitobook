import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiunMessageComponent } from './premiun-message.component';

describe('PremiunMessageComponent', () => {
  let component: PremiunMessageComponent;
  let fixture: ComponentFixture<PremiunMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiunMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiunMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
