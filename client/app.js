const createUrl = async (callback = null) => {
  this.preventDefault;
  const response = await fetch('/url/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(
      {
        url: this.url.value,
        slug: this.slug.value,
      },
    ),
  });
  const result = await response.json();
  console.log(result);
  if (callback) {
    callback('response', result);
  }
};

const displayResponse = (elementKey, data) => {
  const { message, body } = data;

  const parentElement = document.getElementById(elementKey);
  parentElement.innerHTML = '';

  const divElement = document.createElement('div');

  const pElement = document.createElement('p');
  pElement.appendChild(document.createTextNode(message));

  const aElement = document.createElement('a');
  if (body.slug) {
    aElement.appendChild(document.createTextNode(`${window.location.href}url/${body.slug}`));
    aElement.href = `${window.location.href}url/${body.slug}`;
  } else {
    aElement.appendChild(document.createTextNode(''));
  }

  divElement.appendChild(pElement);
  divElement.appendChild(aElement);
  parentElement.appendChild(divElement);
};
