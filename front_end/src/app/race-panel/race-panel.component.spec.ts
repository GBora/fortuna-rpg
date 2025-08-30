import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RacePanelComponent } from './race-panel.component';

describe('RacePanelComponent', () => {
  let component: RacePanelComponent;
  let fixture: ComponentFixture<RacePanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RacePanelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RacePanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
