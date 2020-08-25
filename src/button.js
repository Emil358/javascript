let clickCounter = 0;

export function addButton () {
  let btn = document.createElement('button');
  btn.innerHTML = '<span class="click">0</span> click';
  document.body.appendChild(btn);
  let click = document.querySelector('.click');
  btn.addEventListener('click', function () {
    clickCounter++;
    click.textContent = clickCounter;
  });
}