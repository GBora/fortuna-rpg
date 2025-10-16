export const getSpecialDisplayName = (special: string): string => {
    let result = " ";

    let fragments = special.split('_');

    fragments.forEach((frag: string, index: number) => {
        if (index !== 0) {
            result += " ";
        }
        result += frag;
    })

    return result;
}