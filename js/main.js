//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)



function getFetch(){
  // Clear inputs before assaignments
  document.querySelector('#video').src = ""
  document.querySelector('#img').src = ""

  let choiceInp = document.querySelector('input').value
  const url = `https://api.nasa.gov/planetary/apod?api_key=iflPOmCXlDad7NaUviLFtwhhh1XY07eiCzjzq12H&date=${choiceInp}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        if (data.media_type === 'image'){
          document.querySelector('#img').src = data.url
          document.querySelector('#changeURL').addEventListener('click', swapURL)
            function swapURL(){
              if ( (document.querySelector('#img').src === data.url) && (data.media_type === 'image') ){
                document.querySelector('#img').src = data.hdurl
                document.querySelector('#changeURL').innerText = `Low Def URL: ${data.url}`
              }else{
                document.querySelector('#img').src = data.url
                document.querySelector('#changeURL').innerText = `High Def URL: ${data.hdurl}`
              }
            }
        }else if(data.media_type === 'video'){
          document.querySelector('#img').src = ""
          document.querySelector('#video').src = data.url
          document.querySelector('#changeURL').innerText = `YouTube URL: ${data.url}`
        }
        else{
          // This will allow for changes of midia types
          alert("Media type not supported! Contact NASA Immediately")
        }
        document.querySelector('#name').innerText = `Pic Title: ${data.title}`
        document.querySelector('#date').innerText = `Date: ${data.date}`
        
        document.querySelector('#changeURL').innerText = `High Def URL: ${data.url}`
        document.querySelector('#explanation').innerText = `Explanation: ${data.explanation}`
        document.querySelector('#copyright').innerText = `Copyright: ${data.copyright}`
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}





// copyright:         "Mehmet Ergün"
// date:              "2021-05-04"
// explanation:       "That's no sunspot. It's the International Space Station (ISS) caught passing in front of the Sun. Sunspots, individually, have a dark central umbra, a lighter surrounding penumbra, and no Dragon capsules attached.  By contrast, the ISS is a complex and multi-spired mechanism, one of the largest and most complicated spacecraft ever created by humanity.  Also, sunspots circle the Sun, whereas the ISS orbits the Earth.  Transiting the Sun is not very unusual for the ISS, which orbits the Earth about every 90 minutes, but getting one's location, timing and equipment just right for a great image is rare.  The featured picture combined three images all taken from the same location and at nearly the same time. One image -- overexposed -- captured the faint prominences seen across the top of the Sun, a second image -- underexposed -- captured the complex texture of the Sun's chromosphere, while the third image -- the hardest to get -- captured the space station as it shot across the Sun in a fraction of a second.  Close inspection of the space station's silhouette even reveals a docked Dragon Crew capsule."
// hdurl:             "https://apod.nasa.gov/apod/image/2105/IssSun_Ergun_1752.jpg"
// media_type:        "image"
// service_version:   "v1"
// title:             "Space Station, Solar Prominences, Sun"
// url:               "https://apod.nasa.gov/apod/image/2105/IssSun_Ergun_960.jpg"