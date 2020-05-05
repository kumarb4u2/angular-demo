class Origin {
  name: string;
  url: string;
}

class Character {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  created: string;
  origin: Origin;
  location: Origin;
}

export class Result {
  info: any;
  results: Character[];
}
