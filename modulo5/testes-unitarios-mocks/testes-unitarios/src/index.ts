// Exercício 1
export interface Character {
    name: string
    life: number
    strength: number
    defense: number
}


export const validateCharacter = (input: Character): boolean => {

    if (!input.name || input.life === undefined || input.strength === undefined || input.defense === undefined) {
        return false;
    }

    if (input.life <= 0 || input.strength <= 0 || input.defense <= 0) {
        return false;
    }

    return true;

};

// Exercício 3

export const performAttack = (attacker: Character, defender: Character) => {

    if (!validateCharacter(attacker) || !validateCharacter(defender)) {
      throw new Error("Invalid character");
    }
  
    if (attacker.strength > defender.defense) {
      defender.life -= attacker.strength - defender.defense;
    }
  };

export const performAttackID = (attacker: Character, defender: Character, validator: (input: Character) => boolean) => {
    
    if (!validator(attacker) || !validator(defender)) {
        throw new Error("Invalid character");
    }

    if (attacker.strength > defender.defense) {
        defender.life -= attacker.strength - defender.defense;
    }
};

//Explique, com as suas palavras, as diferenças entre as duas implementações
// na primeira implementação a função performAttack fica dependente da validateCharacter, e na segunda implementação ela vira um parametro performAttack
//