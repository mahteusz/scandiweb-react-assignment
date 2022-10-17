export const equals = (obj1, obj2) => {
    return Object.entries(obj1).sort().toString() === Object.entries(obj2).sort().toString()
}