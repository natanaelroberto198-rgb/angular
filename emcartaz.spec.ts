import { ComponentFixture, TestBed } from '@angular/core/testing';

import { emcartaz } from './emcartaz';

describe('EmCartaz', () => {
  let component: emcartaz;
  let fixture: ComponentFixture<emcartaz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [emcartaz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(emcartaz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

