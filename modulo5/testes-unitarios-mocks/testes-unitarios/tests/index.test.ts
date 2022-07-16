import { Character, validateCharacter } from "../src"

// Exercício 2
describe("Testando função 'validateCharacter'", () => {
    test(" Deve returnar falso para nome vazio", () => {
        const character: Character = {
            name: "",
            life: 1500,
            strength: 500,
            defense: 450
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    })
    test(" Deve returnar falso para life igual a 0", () => {
        const character: Character = {
            name: "Diego",
            life: 0,
            strength: 500,
            defense: 450
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    })
    test(" Deve returnar falso para strength igual a 0", () => {
        const character: Character = {
            name: "Diego",
            life: 1500,
            strength: 0,
            defense: 450
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    })
    test(" Deve returnar falso para defense igual a 0", () => {
        const character: Character = {
            name: "Diego",
            life: 1500,
            strength: 500,
            defense: 0
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    })
    test(" Deve returnar falso para o life, strength ou defense negativo", () => {
        const character: Character = {
            name: "Diego",
            life: -1500,
            strength: 500,
            defense: 0
        }
        const result = validateCharacter(character)
        expect(result).toBe(false)
    })
    test(" Deve returnar true para os dados inseridos corretamente", () => {
        const character: Character = {
            name: "Diego",
            life: 1500,
            strength: 500,
            defense: 350
        }
        const result = validateCharacter(character)
        expect(result).toBe(true)
    })


}) 