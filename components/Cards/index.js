// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function cardMaker(attr) {
    let card = document.createElement('div');
    let cardHeadline = document.createElement('div');
    let cardAuthor = document.createElement('div');
    let cardImgParent = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardAuthorName = document.createElement('span');

    card.classList.add('card');
    cardHeadline.classList.add('headline');
    cardAuthor.classList.add('author');
    cardImgParent.classList.add('img-container');

    cardHeadline.textContent = attr.headline;
    cardImg.src = attr.authorPhoto;
    cardAuthorName.textContent = `By: ${attr.authorName}`;

    card.append(cardHeadline, cardAuthor);
    cardAuthor.append(cardImgParent, cardAuthorName);
    cardImgParent.append(cardImg);

    return card;

}

let cardParent = document.querySelector('.cards-container');

let sample = {
    authorName: 'biskoi',
    authorPhoto: './assets/fido.jpg',
    headline: 'lambda student celebrates 23rd year on earth with sprint'
}

cardParent.append(cardMaker(sample));

axios.get('https://lambda-times-backend.herokuapp.com/articles').then(reply => {
    let entries = Object.entries(reply.data.articles);
    entries.forEach(item => {
        let articles = Object.entries(item);
        console.log(articles);
        articles[1][1].forEach(item => {
            cardParent.append(cardMaker(item))
        });
    })
})

