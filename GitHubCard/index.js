import axios from "axios";

const cards = document.querySelector('.cards')
// IMPORTANT , creating a variable and making it equal to the tag with a class of .cards in the html file , this is where we will be appending the cards to later on



/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
// axios.get(`https://api.github.com/users/justinalize`)
// .then(res => {
//   console.log(res);
//   res.data.forEach((info) => {
//     const newGithub = githubCards(info)
//     enter.appendChild(newGithub)
//   })
// })

// .catch((err) => {
//   console.log(err)
// })
axios.get("https://api.github.com/users/justinalize")
// grabbing my github info from the github api
.then(response => {
const received = response.data;
// creating a variable called receive and making it equal the data we got from the fetch
const newCard = githubCards(received);
// creating a variable and then invoking it with the data recieved from the fetch
cards.appendChild(newCard);
// appenind the github card with my info to the div with a class of cards that we made equal to a variable called  card
});
// taking the response from the fetch 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [ 
  'tetondan',
  'dustinmyers',
  'justsml',
  'luishrd',
  'bigknell',
];
// looping thru the array of github usernames , then  fetching their data from the github api using axios



followersArray.forEach(Element => {
  axios.get(`https://api.github.com/users/${Element}`)
  .then(info => {
    cards.appendChild(githubCards(info.data))
  })
  // then taking that info and appending it to the function that makes the cards

  .catch(error => { // saying that if theres an error to log the error
    console.log(error)
    debugger // if theres an error open the debugger
  })
})
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:
    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/
function githubCards(data){
  const card = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const usersName = document.createElement("h3");
  const username = document.createElement("p");
  const location = document.createElement("p");
  const profile = document.createElement("p");
  const githubURL = document.createElement("a");
  const followers = document.createElement("p");
  const following = document.createElement("p");
  const bio = document.createElement("p");
// creating variables and turning those variables into elements on the html page that we will use to attatch our data on to

  card.appendChild(cardInfo)
  card.appendChild(image)
  cardInfo.appendChild(usersName)
  cardInfo.appendChild(username)
  cardInfo.appendChild(location)
  cardInfo.appendChild(profile)
  profile.appendChild(githubURL)
  cardInfo.appendChild(followers)
  cardInfo.appendChild(following)
  cardInfo.appendChild(bio)

// appending all of our data inside of the div that will be visible

  card.classList.add('card')
  cardInfo.classList.add('card-info')
  usersName.classList.add('name')
  username.classList.add('username')
// adding classes that were on the original html file

  // my sources
  image.src = data.avatar_url // making the image srcl equal to avatar_url which is where the  image is stored on the api

  githubURL.href = data.html_url
// making the github url equal to html_url which is where the github url is stored on the api


usersName.textContent = data.name
username.textContent = data.login
location.textContent = data.location
followers.textContent = `followers: ${data.followers}`
following.textContent = `following: ${data.following}`
bio.textContent = `bio: ${data.bio}`
githubURL.textContent = data.html_url
// taking the 
  return card // returning the cards SUPER IMPORTANTTTTT
}

// making the variables we created earlier be equal to the corresponding data that we got from the api fetch so for example for the location , the location is stored under location as well for the api fetch and the reason we put data and then a dot in front of location is because were saying its equal to the datas location (data is the argument we chose to put in the githubCards, this variable can be anything)


/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
