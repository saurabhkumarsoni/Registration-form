import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRegistrtaionComponent } from './user-registrtaion.component';

describe('UserRegistrtaionComponent', () => {
  let component: UserRegistrtaionComponent;
  let fixture: ComponentFixture<UserRegistrtaionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRegistrtaionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserRegistrtaionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
