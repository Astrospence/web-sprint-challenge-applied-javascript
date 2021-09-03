import axios from "axios";

const Card = (article) => {
  //creating elements
  const card = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const img = document.createElement('img');
  const by = document.createElement('span');

  //adding classes
  card.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');

  //adding content
  headline.textContent = article.headline;
  img.src = article.authorPhoto
  by.textContent = `By ${article.authorName}`;

  //building out the element
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(img);
  author.appendChild(by);

  //adding click event listener
  card.addEventListener('click', event =>{
    console.log(article.headline);
  })

  return card;
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {
  const cardContainer = document.querySelector(selector);

  axios.get('http://localhost:5000/api/articles')
    .then(response => {
        /*for (let i = 0; i < response.data.articles.javascript.length; i++){
          cardContainer.appendChild(Card(response.data.articles.javascript[i]));
        }
        for (let i = 0; i < response.data.articles.bootstrap.length; i++){
          cardContainer.appendChild(Card(response.data.articles.bootstrap[i]));
        }
        for (let i = 0; i < response.data.articles.technology.length; i++){
          cardContainer.appendChild(Card(response.data.articles.technology[i]));
        }
        for (let i = 0; i < response.data.articles.jquery.length; i++){
          cardContainer.appendChild(Card(response.data.articles.jquery[i]));
        }
        for (let i = 0; i < response.data.articles.node.length; i++){
          cardContainer.appendChild(Card(response.data.articles.node[i]));
        }*/

        //The above code functioned but it was static and didn't allow for changes from the API, so I converted it to the below code which should dynamically update with the API:

        const articlesArray = Object.entries(response.data.articles);
        articlesArray.forEach(index => {
          index[1].forEach(item => {
            cardContainer.appendChild(Card(item));
          })
        })
    })
    .catch(err => {
      console.log(err);
    })

    return cardContainer;
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
