export const getSpeciesIcon = (speciesName: string): string => {
    switch(speciesName) {
        case "Sylvarian": return "leaf.svg";
        case "Torgann": return "hammer.svg";
        case "Islethar": return "snowflake.svg";
        case "Human": return "helmet.svg";
        default: return "leaf.svg";    }
}
