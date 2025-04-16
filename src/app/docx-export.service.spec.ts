import { TestBed } from '@angular/core/testing';

import { DocxExportService } from './docx-export.service';

describe('DocxExportService', () => {
  let service: DocxExportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocxExportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
