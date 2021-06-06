import * as Stages from './Stages/Stages'

export const createTypes = type => {
    const types = {}

    Object.values(Stages).forEach(el => {
        types[el] = `${type}_${el}`
    })

    return types
}