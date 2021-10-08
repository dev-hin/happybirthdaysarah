const sarahs = document.querySelectorAll('.sarah')
// const container = document.querySelector('.sarah-container')
// const songs = ['audio1', 'audio2', 'audio3', 'audio4', 'audio5']
// const images = ['sarah1', 'sarah2', 'sarah3', 'sarah4', 'sarah5']

sarahs.forEach(sarah => {
  sarah.addEventListener('click', () => {
    removeActiveClasses()
    sarah.classList.add('active')
  })
})

function removeActiveClasses() {
  sarahs.forEach(sarah => {
    sarah.classList.remove('active')
  })
}

// for(let i = 0; i < images.length; i++) {
//   const img = document.createElement('div')

//   img.innerHTML = `<img src = "./img/${images[i]}.jpg">`
//   img.classList.add('sarah')
// }

// songs.forEach(song => {
//   const sarah = document.createElement('img')
//   sarah.classList.add('sarah')

//   sarah.innerHTML = `
//     img.src = ${images}.jpg
//   `

//   btn.addEventListener('click', () => {
//     stopSongs()

//     document.getElementById(sound).play()
//   })

//   document.getElementById('buttons').appendChild(btn)
// })


// function stopSongs() {
//   songs.forEach(song => {
//     const tune = document.getElementById(song)

//     tune.pause()
//     tune.currentTime = 0;
//   })
// }