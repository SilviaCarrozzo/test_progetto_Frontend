import { TestBed } from '@angular/core/testing';
import { GetRequest } from 'src/app/core/data-request/get-request.service';
import { PostRequest } from 'src/app/core/data-request/post-request.service';
import { PutRequest } from 'src/app/core/data-request/put-request.service';
import { DeleteRequest } from 'src/app/core/data-request/delete-request.service';
import { StoreService } from './store.service';
import { of, throwError } from 'rxjs';

describe('StoreService', () => {
  let service: StoreService;

  beforeEach(() => {
    const getRequestStub = () => ({ doRequest: (req: any) => ({ pipe: () => ({}) }) });
    const postRequestStub = () => ({
      doRequest: (req: any) => ({ pipe: () => ({}) })
    });
    
    const putRequestStub = () => ({});
    const deleteRequestStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        StoreService,
        { provide: GetRequest, useFactory: getRequestStub },
        { provide: PostRequest, useFactory: postRequestStub },
        { provide: PutRequest, useFactory: putRequestStub },
        { provide: DeleteRequest, useFactory: deleteRequestStub }
      ]
    });
    service = TestBed.inject(StoreService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getSideMenu', () => {
    it('makes expected calls', () => {
      const getRequestStub: GetRequest = TestBed.inject(GetRequest);
      spyOn(getRequestStub, 'doRequest').and.returnValue(of(''));
      var returnValue = service.getSideMenu({ codFamiglia: 'FAM001' });
      returnValue.subscribe((data) => {
        expect(data).toBeDefined();
      })
      expect(getRequestStub.doRequest).toHaveBeenCalled();
    });
  });

  describe('getJewelleryList', () => {
    it('makes expected calls', () => {
      const getRequestStub: GetRequest = TestBed.inject(GetRequest);
      spyOn(getRequestStub, 'doRequest').and.returnValue(of(''));
      var returnValue = service.getJewelleryList();
      returnValue.subscribe(data => {
        expect(data).toBeDefined();
      })
      expect(getRequestStub.doRequest).toHaveBeenCalled();
    });

    it('it should throw error', async () => {
      const getRequestStub: GetRequest = TestBed.inject(GetRequest);
      spyOn(getRequestStub, 'doRequest').and.returnValue(throwError(() => new Error('Test error')));
      var returnValue = service.getJewelleryList();
      returnValue.subscribe(data => {
        expect(data).toEqual('Test error');
      })
    });
  });

});
