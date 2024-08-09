//etc
export const uuid = () => Cypress._.random(0, 1e6)
export const id = uuid()