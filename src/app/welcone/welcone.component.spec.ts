import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelconeComponent } from './welcone.component';

describe('WelconeComponent', () => {
  let component: WelconeComponent;
  let fixture: ComponentFixture<WelconeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WelconeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelconeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
