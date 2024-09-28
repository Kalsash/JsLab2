import {MiniMaple} from "../src/miniMaple";

describe("symbolic_diff", () => {
   test("Тест с одним x", () => {
      const polynom = "2*x + 3"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe("2")
   })

   test("Тест с несколькими x", () => {
      const polynom = "2*x^3 - 3*x + 4"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe("6*x^2-3")
   })

   test("Тест с одинаковыми x", () => {
      const polynom = "2*x^3 - x^3 - 3*x + 4"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe("6*x^2-3*x^2-3")
   })

   test("константа", () => {
      const polynom = "3*c"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe("0")
   })

   test("Тест с двумя буквами", () => {
      const polynom = "3 * x^3 + 9 * x * y - 4 * x^2 + 2*y"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe("9*x^2+9y-8*x")
   })
   test("Тест с другой буквой ", () => {
      const polynom = "3 * x^3 + 9 * x- 4 * x^2 + 2*y"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "y")
      expect(diff).toBe("2")
   })

   test("Тест на некорректный ввод", () => {
      const polynom = "3x + @"
      const miniMaple = new MiniMaple()

      const diff = miniMaple.symbolic_diff(polynom, "x")
      expect(diff).toBe(null)
   })

   test("Разные выражения", () => {
    const polynom = "2x + 4x^3-0.5*x^2+2*x-1+x+2*y"
    const miniMaple = new MiniMaple()

    const diff = miniMaple.symbolic_diff(polynom, "x")
    expect(diff).toBe("2+12*x^2-x+2+1")
 })
 test("Пустой полином", () => {
   const polynom = ""
   const miniMaple = new MiniMaple()

   const diff = miniMaple.symbolic_diff(polynom, "x")
   expect(diff).toBe("")
})
test("Неправильный ввод target", () => {
   const polynom = ""
   const miniMaple = new MiniMaple()

   const diff = miniMaple.symbolic_diff(polynom, "xsdad")
   expect(diff).toBe(null)
})
})