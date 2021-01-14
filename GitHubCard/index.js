import axios from 'axios'

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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
  'bigknell'
];

followersArray.forEach(person => {
  axios.get(`https://api.github.com/users/${person}`)
  .then(response => {
    let received = response.data
    const githubCard = githubCardMaker(received)
    cardDiv.appendChild(githubCard)
  })
  .catch(error => {
    console.log(error)
    debugger;
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
function githubCardMaker(data){

const card = document.createElement('div')
const image = document.createElement('img')
const info = document.createElement('div')
const name = document.createElement('h3')
const username = document.createElement('p')
const location = document.createElement('p')
const profile = document.createElement('p')
const link = document.createElement('a')
const followers = document.createElement('p')
const following = document.createElement('p')
const bio = document.createElement('p')

///////////// APPENDING CHILDREN ///////////
card.appendChild(image)
card.appendChild(info)
info.appendChild(name)
info.appendChild(username)
info.appendChild(location)
info.appendChild(profile)
profile.appendChild(link)
info.appendChild(followers)
info.appendChild(following)
info.appendChild(bio)

/////////// ADDING CLASSES ///////////

card.classList.add('card')
info.classList.add('info')
name.classList.add('name')
username.classList.add('username')

      ////////// TEXT CONTENT ////////////

image.src = data.avatar_url
name.textContent = data.name
username.textContent = data.login
location.textContent = data.location
link.textContent = data.html_url
followers.textContent = `Followers: ${data.followers}`
following.textContent = `Following: ${data.following}`
bio.textContent = `Bio: ${data.bio}`


return card
}

const cardDiv = document.querySelector('.cards')

axios.get('https://api.github.com/users/justinalize')
.then(response => {
  let received = response.data
  const newCard = githubCardMaker(received)
  cardDiv.appendChild(newCard)
  
})
.catch(error => {
  console.log(error)
  debugger
})
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
