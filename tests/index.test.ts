import { Fib } from "../Fib";
import { Frame } from "../Frame";
import { FrameIt } from "../FrameIt";
import { Component } from "../Component";

describe("A Frame.", () => {
   let frame: Frame;
   beforeAll(() => {
	  frame = new Frame("Door", [
		 new Component("top"),
		 new Component("bottom"),
		 new Component("left"),
		 new Component("right")
	  ]);
   });
   test("Should be defined.", () => {
	  expect(frame).toBeDefined();
   });
   test("Should be 'top'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "top");
   });
   test("Should be 'bottom'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "bottom");
   });
   test("Should be 'left'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "left");
   });
   test("Should be 'right'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "right");
   });
   test("Should be 'null'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeTruthy();
	  expect(nextFrame.value).toBeNull();
   });
});
  
describe("A FrameIt.", () => {
   let frame: FrameIt;
   let frames: string[];
   beforeAll(() => {
	  frame = new FrameIt("Door", [
		 new Component("top"),
		 new Component("bottom"),
		 new Component("left"),
		 new Component("right")
	  ]);
	  frames = ["top", "bottom", "left", "right"];
   });
   test("Should be defined.", () => {
	  expect(frame).toBeDefined();
   });
   test("Should be 'top'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "top");
   });
   test("Should be 'bottom'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "bottom");
   });
   test("Should be 'left'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "left");
   });
   test("Should be 'right'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeFalsy();
	  expect(nextFrame.value).toHaveProperty("name", "right");
   });
   test("Should be 'null'.", () => {
	  const nextFrame = frame.next();
	  expect(nextFrame.done).toBeTruthy();
	  expect(nextFrame.value).toBeNull();
   });
   test("Should be one of frames.", () => {
	  for(const f of frame)
		 expect(frames.includes(f.name)).toBeTruthy();
   });
});
describe("Fibonacci sequence.", () => {
   let fib: Fib;
   let seq: number[];
   beforeAll(() => {
	  fib = new Fib();
	  seq = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];
   });
   test("Should be defined.", () => {
	  expect(fib).toBeDefined();
   });
   test("Should be nth term in sequence.", () => {
	  seq.forEach(num => {
		 const nextFib = fib.next();
		 expect(nextFib.done).toBeFalsy();
		 expect(nextFib.value).toBe(num);
	  });
   });
   test("Should be an array of first 10 Fibonacci sequence.", () => {
	  let fibMax10 = new Fib(45);
	  let fibMax10Arr = Array.from(fibMax10);
	  expect(fibMax10Arr).toEqual(seq);
   });
});
