export class BrewType {
  name;

  constructor(name) {
    this.name = name;
  }
}

export const ALE = new BrewType('Ale'),
  BROWN_ALE = new BrewType('Brown Ale'),
  IPA = new BrewType('IPA'),
  LAGER = new BrewType('Lager'),
  PALE_ALE = new BrewType('Pale Ale'),
  PORTER = new BrewType('Porter'),
  STOUT = new BrewType('Stout'),
  OTHER = new BrewType('Other');


export const brewTypes = [
  ALE,
  BROWN_ALE,
  IPA,
  LAGER,
  PALE_ALE,
  PORTER,
  STOUT,
  OTHER
];