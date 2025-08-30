export const getSpeciesIcon = (speciesName: string): string => {
    switch(speciesName) {
        case "Sylvarian": return "leaf.svg"; break;
        case "Torgann": return "hammer.svg"; break;
        case "Islethar": return "snowflake.svg"; break;
        case "Human": return "helmet.svg"; break;
        default: return "leaf.svg"; break;
    }
}