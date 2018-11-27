const countdown = document.querySelector('.countdown');

//Set Lanuch Date (ms)

const lanuchDate  = new Date ('Jan 1, 2019 13:00:00').getTime();


//update Every Second
const intvl = setInterval(() => {
  //Get todays date and time (ms)
  const now = new Date().getTime()
  console.log(now);
  //Distance from now to the lanuch Date
  const distance = lanuchDate - now ;

  // Time Calculations
  const days = Math.floor(distance/ (1000 * 60 * 60 * 24)) ;
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 60) );

  const mins = Math.floor((distance % (1000 * 60 * 60 )) / (1000 * 60 ))
  const seconds = Math.floor ((distance % (1000 * 60)) / 1000 );

  //Display result

  countdown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>hours</span></div>
  <div>${mins}<span>Minutes</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;


  if(distance < 0 ) {
    clearInterval(intvl);
    countdown.style.color = '#17a2b8'
    countdown.innerHTML = 'Lanuched !'
  }




},1000)
