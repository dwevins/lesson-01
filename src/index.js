export default function (app) {
  return;

  const later = fetch('https://swapi.co/api/people/1');
  const evenLater = later.then((res) => res.json());
  evenLater.then((data) => {
    elements.charInfo.innerHTML = `
    <h2>${data.name}</h2>
    `;
  });
