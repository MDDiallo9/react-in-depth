function People() {
  const people = [
    { name: "Mohamed", age: 26 },
    { name: "404", age: 404 },
    { name: "T", age: 32 },
  ];
  const result = [];

  for (const person of people) {
    result.push(
      <div>
        <h1>{person.name}</h1>
        <p>{person.age}</p>
      </div>
    );
  }

  console.log(result);
  return result;
}

export default People;
