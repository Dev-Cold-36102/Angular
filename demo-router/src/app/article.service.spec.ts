import { TestBed } from '@angular/core/testing';

import { SearchArticleService } from './search-article.service';

describe('SearchService', () => {
  let service: SearchArticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchArticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
