const request = new XMLHttpRequest();
request.open('GET', 'https://netology-fbb-store-api.herokuapp.com/weather');
request.addEventListener('load', event => {
  const response = JSON.parse(request.responseText);
  setData(response);
});
request.send();
