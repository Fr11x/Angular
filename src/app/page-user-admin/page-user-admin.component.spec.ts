import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserAdminComponent } from './page-user-admin.component';

describe('PageUserAdminComponent', () => {
  let component: PageUserAdminComponent;
  let fixture: ComponentFixture<PageUserAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageUserAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageUserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
