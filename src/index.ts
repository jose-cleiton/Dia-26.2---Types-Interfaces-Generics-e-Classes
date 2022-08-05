type Pet = {
  name: string;
}

type Person = {
  name: string;
  age: number;
  pets:Array<Pet>
}

const Cleiton: Person = {
  name: 'Cleiton',
  age: 30,
  pets: [{name: 'Adora'}]
}

const Gaby: Person = {
  name: 'Gaby',
  age: 30,
  pets: [{name: 'Tick'}]
}
