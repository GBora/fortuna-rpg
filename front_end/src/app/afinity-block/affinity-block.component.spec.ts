import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffinityBlockComponent } from './affinity-block.component';

describe('AfinityBlockComponent', () => {
  let component: AffinityBlockComponent;
  let fixture: ComponentFixture<AffinityBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AffinityBlockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffinityBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
