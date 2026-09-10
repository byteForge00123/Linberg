import { Injectable } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap, of, Observable, shareReplay } from 'rxjs';
import { SearchResult } from '../models/crm';
import { CrmDataService } from './crm-data.service';

@Injectable({ providedIn: 'root' })
export class SearchService {
  private searchInput = new Subject<string>();

  readonly results$: Observable<SearchResult[]> = this.searchInput.pipe(
    debounceTime(220),
    distinctUntilChanged(),
    switchMap((query) => {
      const trimmed = query.trim();
      if (!trimmed) {
        return of([]);
      }
      return this.crmDataService.searchAll(trimmed);
    }),
    shareReplay(1)
  );

  constructor(private crmDataService: CrmDataService) {}

  search(query: string): void {
    this.searchInput.next(query);
  }
}
