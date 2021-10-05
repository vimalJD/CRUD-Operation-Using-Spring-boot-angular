import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavafullstackdeveloperComponent } from './javafullstackdeveloper.component';

describe('JavafullstackdeveloperComponent', () => {
  let component: JavafullstackdeveloperComponent;
  let fixture: ComponentFixture<JavafullstackdeveloperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavafullstackdeveloperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JavafullstackdeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
