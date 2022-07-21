
export default class CalculatePrice {
    calculate(duração: string, pets: number): number {

        if (duração === "30") {

            return 25 + (pets > 1 ? ((pets - 1) * 15) : 0)
        }
        if (duração === "60") {
            return 35 + (pets > 1 ? ((pets - 1) * 20) : 0)
        }
        else {
            return 25
        }
    }
}