// new person init
class Person {
  picture: string;
  firstName: string;
  lastName: string;
  city: string;
  state: string;

  constructor() {
    this.picture = "";
    this.firstName = "";
    this.lastName = "";
    this.city = "";
    this.state = "";
  }
  async fetchPerson() {
    await $.get(`https://randomuser.me/api/?format=JSON`).then((person) => {
      const p = person.results[0];
      (this.picture = p.picture.medium),
        (this.firstName = p.name.first),
        (this.lastName = p.name.last),
        (this.city = p.location.city),
        (this.state = p.location.state);
    });
  }
}
class Pokemon {
  sprite: string;
  name: string;
  constructor() {
    this.sprite = "";
    this.name = "";
  }
  async fetchSprite() {
    let num: number = Math.floor(Math.random() * 800) + 1;
    await $.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then((p) => {
      this.name = p.name;
      this.sprite =
        p.sprites.front_default !== null
          ? p.sprites.front_default
          : p.sprites.front_female;
    });
  }
}

class MainPerson extends Person {
  // picture: string
  // firstName: string
  // lastName: string
  // city: string
  // state: string
  kanye: string;
  text: string;

  constructor() {
    super();
    this.kanye = "";
    this.text = "";
  }
  async fetchKanye() {
    await $.get(`https://api.kanye.rest`).then((k) => {
      this.kanye = k.quote;
    });
  }
  async fetchText() {
    await $.get(
      `https://baconipsum.com/api/?type=all-meat&paras=1&format=json`
    ).then((t) => {
      this.text = t[0];
    });
  }
}

interface Menger {
  pokemonSprite: Pokemon;
  mainPerson: MainPerson;
  frinds: object;
}
async function creatAll() {
  const pokemonSprite = new Pokemon();
  await pokemonSprite.fetchSprite().then((x) => {
    // console.log(x);
  });

  const mainPerson = new MainPerson();
  await mainPerson.fetchPerson();
  await mainPerson.fetchKanye();
  await mainPerson.fetchText();

  const frinds: Person[] = [];
  //creat 6 frinds for the main person
  for (let i = 0; i < 6; i++) {
    frinds.push(new Person());
    await frinds[i].fetchPerson();
  }
  //   const frind1 = new Person();
  //   frind1.fetchPerson();

  // console.log(pokemonSprite.);
  return {
    pokemonSprite: pokemonSprite,
    mainPerson: mainPerson,
    frinds: { frinds },
  };
}

// creat the main Pokemon sprite
// const pokemonSprite = new Pokemon()
// pokemonSprite.fetchSprite()

// const x = creatAll();
// const m = x.mainPerson;
// console.log(m);
// setTimeout(() => console.log(x.pokemonSprite.sprite), 3000);
// setTimeout(() => console.log(x.pokemonSprite.sprite), 3000);

// creat the main person
// init whit empty string i dont know how to do it whitout

//check results
// setTimeout(() => console.log(mainPerson), 3000);
//  setTimeout(()=>console.log(x.pokemonSprite), 3000);

//  setTimeout(()=>console.log(frind1), 5000);
//  setTimeout(()=>console.log(frind2), 5000);
//  setTimeout(()=>console.log(frind3), 5000);
//  setTimeout(()=>console.log(frind4), 5000);

// const frind1  = getMainPerson()
// const frind2  = getMainPerson()
// const frind3  = getMainPerson()
// const frind4  = getMainPerson()
// const frind5  = getMainPerson()
// const frind6  = getMainPerson()
// const myTimeout = setTimeout(console.log(frind1.), 7000);

// console.log(frind1);
// console.log(frind2);
// console.log(frind3);
// console.log(frind4);
// console.log(frind5);
// console.log(frind6);

// const fetchPromise = fetch(`https://randomuser.me/api/?format=JSON`)
// console.log(fetchPromise);

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     return (data.results[0].picture.medium);
//   })
//   .catch((error) => {
//     console.error(`Could not get products: ${error}`);
//   });

//   const p1 = fetchPromise.catch()
// console.log(p1);

// const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
// const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
// const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

// Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
//   .then((responses) => {
//     for (const response of responses) {
//       console.log(`${response.url}: ${response.status}`);
//     }
//   })
//   .catch((error) => {
//     console.error(`Failed to fetch: ${error}`)
//   });

//   let getMainPerson = async () => {
//     const person = await $.get('https://randomuser.me/api/?format=JSON')

//     // console.log(person);
//     // console.log(person.results[0].gender);

//     // let fullName = `${person.name} ${person.lastName} `

//     const p =person.results[0]
//     return ({picture: p.picture.medium,
//         firstName: p.name.first,
//         lastName : p.name.last,
//         city: p.location.city,
//         state:p.location.state
//     });
// }

// console.log(mainPerson);
