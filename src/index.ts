interface Pet  {
  firsName: string;
  talk:() => void;
}

interface Person  {
  name: string;
  age: number;
  pets:Array<Pet>
}

const Cleiton: Person = {
  name: 'Cleiton',
  age: 30,
  pets: [
    {
    firsName: 'Adora', 
    talk: () => {console.log('Meow')}
    }
]
}

const Gaby: Person = {
  name: 'Gaby',
  age: 30,
  pets: [
    {
      firsName: 'Tick', 
      talk: () => {console.log('Meow')}
    }
]
}
