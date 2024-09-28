import {MiniMaple} from "../src/miniMaple";

describe("diff", () => {
   test("diff1", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.diff(["-3","x^2"],"x")
      expect(parse ).toEqual(["-6","*x"])
   })
   test("diff2", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.diff(["+2","y"],"y")
      expect(parse ).toEqual(["+2"])
   })
   test("diff3", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.diff(["-3","x^2","+4","x"],"x")
      expect(parse ).toEqual(["-6","*x", "+4"])
   })
   test("diff4", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.diff([],"x")
      expect(parse ).toEqual([])
   })
   
})