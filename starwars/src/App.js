import React, { Component } from 'react';
import './App.css';
import Card from './components/CharCard';
import Image1 from './components/CharImage';

const imageUrl1 = [

  {url:"https://www.clipartmax.com/png/small/141-1418199_star-artfx-star-wars-luke-skywalker-princess-leia.png",
   name:"luke-skywalker",
    alt: ""},

  {url:"https://simg.nicepng.com/png/small/151-1511153_threepio-tfa-fathead-star-wars-c3po-png.png",
  name:"c-3po",
  alt: ""},

  {url:"https://images-na.ssl-images-amazon.com/images/I/41IXITCtVwL.jpg",
  name:"rd-d2",
  alt: ""},

  {url:"https://steemitimages.com/DQmQLy4UYgpBihxEFYfvBHyrc254ZiHtedxURkJb3NpTVdX/darth_vader_small.png",
  name:"darth-vadar",
  alt: ""},

  {url:"https://i.pinimg.com/originals/be/92/62/be926222e248ecfd993dffa6e077a30a.png",
  name:"leia-organa",
  alt: ""},

  {url:"https://vignette.wikia.nocookie.net/starwars/images/3/33/Young_owen.jpg/revision/latest/scale-to-width-down/180?cb=20080313203444",
  name:"owen-lars",
  alt: ""},

  {url:"https://vignette.wikia.nocookie.net/jedipedia/images/b/b8/Beru_lars_detail.png/revision/latest/scale-to-width-down/120?cb=20130208132949&path-prefix=de",
  name:"beru-lars",
  alt: ""},

  {url:"https://img.bricklink.com/ItemImage/MN/0/sw0029a.png",
  name:"r5-d4",
  alt: ""},

  {url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa7Azxz-QrQUTtXx2tzdijriWt2P5Fh_gC7KQau-h61ezsHLNc",
  name:"biggs-darklighter",
  alt: ""},

  {url:"http://iconbug.com/data/58/256/32ba2ea5f0d1453b5430e8715e88aafb.png",
  name:"obi-wan",
  alt: ""}


];

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
   
       imageUrl1
    };
  }

 
  

componentDidMount(){
  // var myRequest = new Request ('https://swapi.co/api/people/');
  this.getCharacters('https://swapi.co/api/people/');
  let starwarsChars= [];

}

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results })
      })
      .catch(err => {
        throw new Error(err);
      })
  }




 
render() {
  return (
    <div className="App">
      <h1 className="Header">React Wars!</h1>
      <div className="myList">
      {/* {this.state.imageUrl.map(imgMap => {
        return <Image key={imgMap.name} img={imgMap}/>
      })} */}
      {this.state.starwarsChars.map(charMap => {
      return <Card key={`char-${charMap.created}`} char={charMap}/>})}
  </div>
  </div>
  )
}
}
export default App;


