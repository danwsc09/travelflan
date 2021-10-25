const idGenerator = () => {
  let id: number;

  const setId = (theId: number) => {
    id = theId + 1;
  };

  const nextId = () => {
    return id++;
  };

  return { setId, nextId };
};

const idGen = idGenerator();

export default idGen;
