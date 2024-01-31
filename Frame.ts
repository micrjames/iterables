import { Iterator, IteratorResult } from "./iters";
import { Component } from "./Component";

export class Frame implements Iterator<Component> {
   private pointer = 0;

   constructor(public name: string, public components: Component[]) {}

   public next(): IteratorResult<Component> {
	  if(this.pointer < this.components.length) {
		 return {
			done: false,
			value: this.components[this.pointer++]
		 }
	  } else {
		 return {
			done: true,
			value: null
		 }
	  }
   }
}
