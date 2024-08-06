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
