import { IteratorResult } from "./iters";

export class Fib implements IterableIterator<number> {
   protected fn1 = 0;
   protected fn2 = 1;
   protected it = 0;

   constructor(protected maxValue?: number) {}

   public next(): IteratorResult<number> {
	  let current = this.fn1;
	  this.fn1 = this.fn2;
	  this.fn2 = current + this.fn1;
	  this.it++;
	  if (this.maxValue != null && this.it > this.maxValue) {
		 return {
			done: true,
        	value: null
		 } 
	  } 
	  return {
		 done: false,
      	 value: current
	  }
   }

   [Symbol.iterator](): IterableIterator<number> {
	  return this;
   }
}
