interface Person {
    readonly id?: number
    name: string
    age?: number
}

let xf: Person = {
    name: 'xf'
}


function add(x: number, y: number, z?: number): number {
    if (typeof z === 'number') {
        return x + y + z
    }
    return x + y
}