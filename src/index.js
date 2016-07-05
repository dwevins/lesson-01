export default function (app) {
  const upBtn = app.querySelector('.btn--up');
  const dnBtn = app.querySelector('.btn--down');

  function upClick() {
    console.log('upClick');
  }

  function dnClick() {
    console.log('dnClick');
  }

  upBtn.addEventListener('click', upClick);
  dnBtn.addEventListener('click', dnClick);
}
