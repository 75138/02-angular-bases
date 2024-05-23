import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DbzAddCharacterComponent } from './dbz-add-character.component';

describe('DbzAddCharacterComponent', () => {
  let component: DbzAddCharacterComponent;
  let fixture: ComponentFixture<DbzAddCharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DbzAddCharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DbzAddCharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
