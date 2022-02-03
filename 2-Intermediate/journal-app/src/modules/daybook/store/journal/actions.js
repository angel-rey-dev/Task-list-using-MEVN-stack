import journalApi from "../../../../api/journalApi";

export const getEntries = async ({ commit }) => {
  const { data } = await journalApi.get("/entries.json");
  const entries = [];
  for (const id of Object.keys(data)) {
    entries.push({
      id,
      ...data[id],
    });
  }
  commit("setEntries", entries);
};

export const updateEntry = async ({ commit }, entry) => {
  const updatedEntry = {
    id: entry.id,
    date: entry.date,
    description: entry.description,
    picture: entry.picture,
  };
  await journalApi.put(`/entries/${entry.id}.json`, updatedEntry);
  commit("updateEntry", updatedEntry);
};

export const createEntry = async ({ commit }, entry) => {
  const { date, picture, description } = entry;

  const newEntry = {
    date,
    picture,
    description,
  };

  const { data } = await journalApi.post("/entries.json", newEntry);

  newEntry.id = data.name;

  commit("addEntry", newEntry);

  return data.name;
};

export const deleteEntry = async ({ commit }, id) => {
  await journalApi.delete(`/entries/${id}.json`);
  commit("deleteEntry", id);
}