function fetchSimpsonJSON() {

  const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  axios.get(url)
    .then(function(response) {
      return response.data[0]; 
    })
    .then(function(simpson) {
      console.log('data decoded from JSON:', simpson);

      
      const simpsonHtml = `
        <p><strong>${simpson.character}</strong></p>
        <img src="${simpson.image}" />
        <p>${simpson.quote}</p>
        <button onClick={fetchSimpsonJSON()}>bouton</button>          
      `;
      
      document.querySelector('#simpson').innerHTML = simpsonHtml;
    });
    
}

fetchSimpsonJSON();