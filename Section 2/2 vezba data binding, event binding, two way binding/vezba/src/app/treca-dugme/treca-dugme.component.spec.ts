import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrecaDugmeComponent } from './treca-dugme.component';

describe('TrecaDugmeComponent', () => {
  let component: TrecaDugmeComponent;
  let fixture: ComponentFixture<TrecaDugmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrecaDugmeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrecaDugmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
