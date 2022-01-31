// Los getters son funciones que devuelven un valor del estado
// que se necesita para la aplicación.

export const getEntriesByTerm = (state) => (term) => {
  if (term.length === 0) return state.entries;

  return state.entries.filter((entry) => {
    return entry.description.toLowerCase().includes(term.toLowerCase());
  });
};
