import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoifComponent } from './botaoif.component';

describe('BotaoifComponent', () => {
  let component: BotaoifComponent;
  let fixture: ComponentFixture<BotaoifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BotaoifComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotaoifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
