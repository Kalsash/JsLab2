import {MiniMaple} from "../src/miniMaple";

describe("concat", () => {
   test("concat1", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.concat([],"x")
      expect(parse ).toBe("")
   })
   test("concat2", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.concat(["+9","*x^2"],"x")
      expect(parse ).toBe("9*x^2")
   })
   test("concat3", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.concat(["+1","+x"],"x")
      expect(parse ).toBe("1+x")
   })
   test("concat4", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.concat(["-2","*x^3","+4","*x^2"],"x")
      expect(parse ).toBe("-2*x^3+4*x^2")
   })
})