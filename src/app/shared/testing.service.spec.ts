/* tslint:disable:no-unused-variable */

import { HttpModule, XHRBackend, Response } from '@angular/http';
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

  describe('getPosts', () => {

    it('should return number of posts', async(() => {
      service.getPosts().subscribe(x => {
        expect(x.length).toBeGreaterThan(0);
      });
    }));

  });

  describe('getPost', () => {

    it('should return number a post', async(() => {
      service.getPost(1).subscribe(x => {
        expect(x.length).toBeGreaterThan(0);
        expect(x.userId).toEqual(1);
      });
    }));

  it('should return mocked response (async)', async(() => {
    let post = {
      'userId': 1,
      'id': 1,
      'title': 'Title 1',
      'body': 'Body 1'
    };
    mock.connections.subscribe(connection => {
      connection.mockRespond(new Response({body: JSON.stringify(post)}));
    });
    service.getPost(1).subscribe(x => {
        expect(x.title).toEqual('Title 1');
      });
  }));
})

  });
});
