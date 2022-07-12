import { Character, performAttackID } from "../src";


// Exercício 4
// a) validateCharacter , porque a função performAttack depende do resultado true ou false de validate para ser executada, então para testar performAttack fica 
//mais facil com mock de validateCharacter



test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return true
    });
});


test("Creating Mocks", () => {
    const validatorMock = jest.fn(() => {
        return false
    });
});


describe("Testando função 'performAttackID'", () => {
    test("Should perform attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Scorpion",
            life: 1500,
            defense: 200,
            strength: 600,
        };

        const defender: Character = {
            name: "Kitana",
            life: 1500,
            defense: 400,
            strength: 800,
        };

        performAttackID(attacker, defender, validatorMock as any);

        expect(defender.life).toEqual(1300);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    });
    test("Should return invalid character error", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
          return false;
        });
    
        const attacker: Character = {
          name: "",
          life: 1500,
          defense: 200,
          strength: 600,
        };
    
        const defender: Character = {
          name: "Kitana",
          life: 1500,
          defense: 400,
          strength: 800,
        };
    
        try {
            performAttackID(attacker, defender, validatorMock as any);
        } catch (err) {
          expect(err.message).toBe("Invalid character");
          expect(validatorMock).toHaveBeenCalled();
          expect(validatorMock).toHaveBeenCalledTimes(1);
          expect(validatorMock).toHaveReturnedTimes(1);
        }
      });

})    