/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalculatorComponent } from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('toBe', () => {
    let foo = 'bar';
    let bar = foo;
    expect(foo).toBe(bar);
  })

  it('toEqual', () => {
    let foo = 'bar';
    let bar = 'bar';
    expect(foo).toEqual(bar);
  })

  describe('method add', () => {

    it('should add two numbers correctly', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.add(1, 2)).toEqual(3);
    });

    it('should throws "invalid" if input is a number and a string', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.add(1, 'abc')).toEqual('invalid');
    });

    it('should throws "invalid" if input is a string and a number', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.add('abc', 2)).toEqual('invalid');
    });

    it('should throws "invalid" if input are two strings', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.add('abc', 'def')).toEqual('invalid');
    });

  });

  describe('method validateInput', () => {

    it('should validate two numbers', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.validateInput(1, 2)).toBeTruthy();
    });

    it('should validate a number and a string', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.validateInput(1, 'b')).not.toBeTruthy();
    });

    it('should validate a string and a number', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.validateInput('a', 1)).not.toBeTruthy();
    });

    it('should validate two strings', () => {
      let app = fixture.debugElement.componentInstance;
      expect(app.validateInput('a', 'b')).not.toBeTruthy();
    });

  });


});
