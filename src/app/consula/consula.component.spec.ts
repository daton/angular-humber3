import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulaComponent } from './consula.component';

describe('ConsulaComponent', () => {
  let component: ConsulaComponent;
  let fixture: ComponentFixture<ConsulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
