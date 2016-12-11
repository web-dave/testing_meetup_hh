/* tslint:disable:no-unused-variable */

import { HttpModule, XHRBackend } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { TestingService } from './testing.service';

describe('TestingService', () => {
  let service, mock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        TestingService,
        {
          provide: XHRBackend,
          useClass: MockBackend
        }
      ]
    });
  });


  beforeEach(inject([TestingService, XHRBackend], (s, x) => {
    service = s;
    mock = x;
  }));

  it('should ...', () => {
    expect(service).toBeTruthy();
  });

  describe('gestPosts', () => {

    it('should return number of posts', async(() => {
      service.gestPosts().subscribe(x => {
        expect(x.length).toBeGreaterThan(0);
      });
    }));

  });
});
