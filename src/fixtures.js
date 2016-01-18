export const initialState = {
  todos: [
    {
      id: 'cf51481f-b40b-4fb4-97d8-741aa7f508fe',
      done: true,
      text: 'Use Redux',
    },
    {
      id: '7487576b-5869-435a-9192-939ce028fed3',
      done: true,
      text: 'Learn to connect it to React',
    },
    {
      id: '324fd24e-8606-4fa1-8d22-77c6cb956b61',
      done: false,
      text: 'Server Side Rendering',
    },
  ],
  filter: 'NONE',
  editing: { id: '', text: '' },
};

export default function fixtures(store) {
  store(initialState);
  return initialState;
}
