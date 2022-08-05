

export function longestCommon(strs: string[]) {
    if(strs.length === 0) return ""
    
    let commonPrefix = ""
    for(let i = 0; i < strs[0].length; i++) {
        let currentChar = strs[0][i]
        let areAllCharsSame = true
        
        for(let j = 0; j < strs.length; j++) {
            if(strs[j][i] !== currentChar) {
                return commonPrefix
            }
        }
        
        if(currentChar) {
            commonPrefix += currentChar
        }
    }
    
    return commonPrefix
};


const array: string[] = ["flower", "flow", "flight"]

const array2 = ["coracao","cor","corona","coreia"]

console.log(longestCommon(array2))

