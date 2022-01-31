// Las actions son funciones que se ejecutan en el store
// y que modifican el estado de la aplicación.

export const action1 = ({ commit }) => {
  commit('mutation1')
}