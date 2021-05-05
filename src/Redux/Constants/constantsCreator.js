import * as ActionStages from './Stages/Stages'

export const createTypes = type => {
    const types = {}

    Object.values(ActionStages).forEach(el => {
        types[el] = `${type}_${el}`
    })

    return types
}