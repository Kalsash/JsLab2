import {MiniMaple} from "../src/miniMaple";

describe("parse", () => {
   test("parse1", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.parse("-3*x^2","x")
      expect(parse ).toEqual(["-3","x^2"])
   })
   test("parse2", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.parse("-3*x^2","y")
      expect(parse ).toEqual([])
   })
   test("parse3", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.parse("-3*x^2 + 2*x","x")
      expect(parse ).toEqual(["-3","x^2", "+2", "x"])
   })
   test("parse4", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.parse("x","x")
      expect(parse ).toEqual(["+1","x"])
   })
   test("parse5", () => {
      const miniMaple = new MiniMaple()
      const parse = miniMaple.parse("","x")
      expect(parse ).toEqual([])
   })
   
})