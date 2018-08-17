

const changeCaseButton = document.getElementById('button');
const nounInputElement = document.getElementById('russian-noun');
changeCaseButton.addEventListener('click', changeCase);

function changeCase(event)
{
 event.preventDefault();

const rCase = document.querySelector('input[type=radio]:checked').value
if (nouns[nounInputElement.value]) {
  document.getElementById('new-noun').textContent = nouns[nounInputElement.value][rCase]
}
else
{
  document.getElementById('new-noun').textContent = 'Sorry'
};
}
