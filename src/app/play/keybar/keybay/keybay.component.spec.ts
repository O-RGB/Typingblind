import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeybayComponent } from './keybay.component';

describe('KeybayComponent', () => {
  let component: KeybayComponent;
  let fixture: ComponentFixture<KeybayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeybayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeybayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
