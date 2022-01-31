// El state es el estado de la aplicación, es decir, el estado de la aplicación
// es un objeto que contiene todos los datos que necesita la aplicación para
// funcionar.

const state = {
  journal: [],
  entries: [
    {
      id: new Date().getTime() + Math.floor(Math.random() * 100),
      date: new Date().toString(),
      description:
        "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      id: new Date().getTime() + Math.floor(Math.random() * 200),
      date: new Date().toString(),
      description:
        "survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
    },
    {
      id: new Date().getTime() + Math.floor(Math.random() * 300),
      date: new Date().toString(),
      description:
        "as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
    },
  ],
};

export default state;
