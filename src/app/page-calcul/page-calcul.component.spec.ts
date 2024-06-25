import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCalculComponent } from './page-calcul.component';

describe('PageCalculComponent', () => {
  let component: PageCalculComponent;
  let fixture: ComponentFixture<PageCalculComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCalculComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCalculComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
