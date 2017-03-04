export class BrewType {
  name;

  constructor(name) {
    this.name = name;
  }
}

export const brewTypes = [
  new BrewType('Ale'),
  new BrewType('Brown Ale'),
  new BrewType('IPA'),
  new BrewType('Lager'),
  new BrewType('Pale Ale'),
  new BrewType('Porter'),
  new BrewType('Stout'),
  new BrewType('Other')
];