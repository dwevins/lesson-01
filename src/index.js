import Counter from 'counter';

export default function (element) {
  const component = new Counter(element);
  component.update();
  component.lookupCurrentCharacter();

  return;
}
