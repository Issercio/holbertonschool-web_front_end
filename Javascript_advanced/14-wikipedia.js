function createElement(data) {
  const paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia(callback) {
  const request = new XMLHttpRequest();
  const url =
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*';

  request.open('GET', url);
  request.onreadystatechange = function () {
    if (request.readyState === XMLHttpRequest.DONE && request.status === 200) {
      const response = JSON.parse(request.responseText);
      const pages = response.query.pages;
      const pageId = Object.keys(pages)[0];
      const extract = pages[pageId].extract;
      callback(extract);
    }
  };
  request.send();
}

queryWikipedia(createElement);
