import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-pipes-practise',
  templateUrl: './pipes-practise.component.html',
  styleUrls: ['./pipes-practise.component.css'],
})
export class PipesPractiseComponent implements OnInit, OnDestroy {
  products = [
    { id: 1, name: 'Product A', category: 'Electronics', price: 500 },
    { id: 2, name: 'Product B', category: 'Clothing', price: 30 },
    { id: 3, name: 'Product C', category: 'Electronics', price: 800 },
    { id: 4, name: 'Product D', category: 'Furniture', price: 250 },
  ];

  categoryFilter$ = new BehaviorSubject('All');
  priceFilter$ = new BehaviorSubject({ min: 0, max: 1000 });
  

  constructor() {}
  ngOnInit(): void {
    this.getProducts();
  }
  ngOnDestroy(): void {}

  
  getProducts() {
    const filteredProducts$ = combineLatest([
      this.categoryFilter$,
      this.priceFilter$,
    ]).pipe(
      map(([category, priceRange]) => {
        // Apply the filters to the products array
        return this.products.filter((product) => {
          // Check category filter
          if (category !== 'All' && product.category !== category) {
            return false;
          }

          // Check price filter
          if (
            product.price < priceRange.min ||
            product.price > priceRange.max
          ) {
            return false;
          }

          return true;
        });
      })
    );
    filteredProducts$.subscribe((filteredProducts) => {
      console.log('Filtered Products:', filteredProducts);
    });

    this.categoryFilter$.next('Electronics');
    this.priceFilter$.next({ min: 100, max: 700 });
  }
  // Subscribe to filteredProducts$ to get the filtered list
}
