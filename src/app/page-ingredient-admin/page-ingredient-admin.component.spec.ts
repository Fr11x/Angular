import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIngredientAdminComponent } from './page-ingredient-admin.component';

describe('PageIngredientAdminComponent', () => {
  let component: PageIngredientAdminComponent;
  let fixture: ComponentFixture<PageIngredientAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageIngredientAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageIngredientAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
