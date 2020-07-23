const images = [
    'https://images.pexels.com/photos/4728314/pexels-photo-4728314.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/3848184/pexels-photo-3848184.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/4237312/pexels-photo-4237312.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/1850137/pexels-photo-1850137.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4693153/pexels-photo-4693153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    'https://images.pexels.com/photos/4408468/pexels-photo-4408468.png?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/4850291/pexels-photo-4850291.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/2462042/pexels-photo-2462042.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/2608500/pexels-photo-2608500.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/1962817/pexels-photo-1962817.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/3054868/pexels-photo-3054868.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/4781409/pexels-photo-4781409.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/2853198/pexels-photo-2853198.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/3323208/pexels-photo-3323208.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/2584041/pexels-photo-2584041.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/3328608/pexels-photo-3328608.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    'https://images.pexels.com/photos/4557512/pexels-photo-4557512.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
  ]
  
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  
  window.addEventListener('load', () => {
    const content = document.querySelector('.content')
    let main = null
    
    images.forEach((url, index) => {
      const stickyBound = document.createElement('div')
      stickyBound.className = 'sticky_bound'
      
      const posterContainer = document.createElement('section')
      posterContainer.className= 'poster_container'
      posterContainer.style.zIndex = 100 - index
      posterContainer.style.marginLeft = `${random(-10, 10)}vh`
      posterContainer.style.transform = `rotate(${random(-10, 10)}deg)`
      
      const image = document.createElement('img')
      image.src = url
      
      if(!main) {
        posterContainer.appendChild(image)
        stickyBound.appendChild(posterContainer)
        
        main = stickyBound
      } else {
        posterContainer.appendChild(image)
        stickyBound.appendChild(main)
        stickyBound.appendChild(posterContainer)
        
        main = stickyBound
        
        console.log(main)
      }
    })
    
    content.appendChild(main)
  })