import { IteratorResult } from "./iters";

export class Fib implements IterableIterator<number> {
   protected fn1 = 0;
   protected fn2 = 1;

   constructor(protected maxValue?: number) {}

   public next(): IteratorResult<number> {
	  var current = this.fn1;
	  this.fn1 = this.fn2;
	  this.fn2 = current + this.fn1;
	  if (this.maxValue != null && current >= this.maxValue) {
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
