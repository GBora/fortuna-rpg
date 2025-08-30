import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavesMenuComponent } from './saves-menu.component';

describe('SavesMenuComponent', () => {
  let component: SavesMenuComponent;
  let fixture: ComponentFixture<SavesMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SavesMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SavesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
