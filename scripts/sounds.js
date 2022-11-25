const soundFiles = 43
const allsounds = []
const sounds_00 = [ 'sounds/00_nr_panned.mp3', 'sounds/00_panned.mp3' ]
allsounds.push(sounds_00)
const sounds_01 = [ 'sounds/01_panned.mp3' ]
allsounds.push(sounds_01)
const sounds_02 = [ 'sounds/02_nr_panned.mp3', 'sounds/02_panned.mp3' ]
allsounds.push(sounds_02)
const sounds_03 = [ 'sounds/03_nr_panned.mp3', 'sounds/03_panned.mp3' ]
allsounds.push(sounds_03)
const sounds_04 = [ 'sounds/04_nr_panned.mp3', 'sounds/04_panned.mp3', 'sounds/04_st_panned.mp3' ]
allsounds.push(sounds_04)
const sounds_05 = [ 'sounds/05_nr_panned.mp3', 'sounds/05_panned.mp3', 'sounds/05_st_panned.mp3' ]
allsounds.push(sounds_05)
const sounds_06 = [ 'sounds/06_panned.mp3' ]
allsounds.push(sounds_06)
const sounds_07 = [ 'sounds/07_panned.mp3' ]
allsounds.push(sounds_07)
const sounds_08 = [ 'sounds/08_panned.mp3' ]
allsounds.push(sounds_08)
const sounds_09 = [ 'sounds/09_panned.mp3', 'sounds/09_st_panned.mp3' ]
allsounds.push(sounds_09)
const sounds_10 = [ 'sounds/10_panned.mp3' ]
allsounds.push(sounds_10)
const sounds_11 = [ 'sounds/11_panned.mp3' ]
allsounds.push(sounds_11)
const sounds_12 = [ 'sounds/12_panned.mp3' ]
allsounds.push(sounds_12)
const sounds_13 = [ 'sounds/13_panned.mp3' ]
allsounds.push(sounds_13)
const sounds_14 = [ 'sounds/14_panned.mp3' ]
allsounds.push(sounds_14)
const sounds_15 = [ 'sounds/15_panned.mp3' ]
allsounds.push(sounds_15)
const sounds_16 = [ 'sounds/16_panned.mp3' ]
allsounds.push(sounds_16)
const sounds_17 = [ 'sounds/17_nr_panned.mp3', 'sounds/17_panned.mp3' ]
allsounds.push(sounds_17)
const sounds_18 = [ 'sounds/18_panned.mp3' ]
allsounds.push(sounds_18)
const sounds_19 = [ 'sounds/19_panned.mp3' ]
allsounds.push(sounds_19)
const sounds_20 = [ 'sounds/20_panned.mp3' ]
allsounds.push(sounds_20)
const sounds_21 = [ 'sounds/21_nr_panned.mp3', 'sounds/21_panned.mp3' ]
allsounds.push(sounds_21)
const sounds_22 = [ 'sounds/22_panned.mp3' ]
allsounds.push(sounds_22)
const sounds_23 = [ 'sounds/23_nr_panned.mp3', 'sounds/23_panned.mp3' ]
allsounds.push(sounds_23)
const sounds_24 = [ 'sounds/24_nr_panned.mp3', 'sounds/24_panned.mp3' ]
allsounds.push(sounds_24)
const sounds_25 = [ 'sounds/25_panned.mp3' ]
allsounds.push(sounds_25)
const sounds_26 = [ 'sounds/26_nr_panned.mp3', 'sounds/26_panned.mp3' ]
allsounds.push(sounds_26)
const sounds_27 = [ 'sounds/27_nr_panned.mp3', 'sounds/27_panned.mp3' ]
allsounds.push(sounds_27)
const sounds_28 = [ 'sounds/28_panned.mp3' ]
allsounds.push(sounds_28)
const sounds_29 = [ 'sounds/29_panned.mp3' ]
allsounds.push(sounds_29)
const sounds_30 = [ 'sounds/30_nr_panned.mp3', 'sounds/30_panned.mp3' ]
allsounds.push(sounds_30)
const sounds_31 = [ 'sounds/31_nr_panned.mp3', 'sounds/31_panned.mp3' ]
allsounds.push(sounds_31)
const sounds_32 = [ 'sounds/32_panned.mp3' ]
allsounds.push(sounds_32)
const sounds_33 = [ 'sounds/33_panned.mp3' ]
allsounds.push(sounds_33)
const sounds_34 = [ 'sounds/34_panned.mp3' ]
allsounds.push(sounds_34)
const sounds_35 = [ 'sounds/35_nr_panned.mp3', 'sounds/35_panned.mp3' ]
allsounds.push(sounds_35)
const sounds_36 = [ 'sounds/36_panned.mp3' ]
allsounds.push(sounds_36)
const sounds_37 = [ 'sounds/37_nr_panned.mp3', 'sounds/37_panned.mp3' ]
allsounds.push(sounds_37)
const sounds_38 = [ 'sounds/38_nr_panned.mp3', 'sounds/38_panned.mp3' ]
allsounds.push(sounds_38)
const sounds_39 = [ 'sounds/39_panned.mp3' ]
allsounds.push(sounds_39)
const sounds_40 = [ 'sounds/40_nr_panned.mp3', 'sounds/40_panned.mp3' ]
allsounds.push(sounds_40)
const sounds_41 = [ 'sounds/41_panned.mp3' ]
allsounds.push(sounds_41)
const sounds_42 = [ 'sounds/42_nr_panned.mp3', 'sounds/42_panned.mp3' ]
allsounds.push(sounds_42)
//This file will not run on it's own, to make the runnable version use
//bash utilities/createSoundArrays.bash > scripts/sounds.js

const urlString = window.location.href
const url = new URL(urlString)

const water = document.getElementById('watersound');
const narration = document.getElementById('narration');
const startButton = document.getElementById('startbutton');
water.volume = 0.90;
narration.volume = 0.30;

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}

function startplay(){
  console.log('Pressed the button');
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.style.visibility = 'hidden';
      const delay_ms = (Math.round(Math.random() * 10)/2 + 5) * 1000
      console.log('going to wait for ', delay_ms, 'ms') 
      delay(delay_ms).then(() => narration.play());
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}


let playAttempt = setInterval(() => {
  water.play()
    .then(() => {
      clearInterval(playAttempt);
      startButton.style.visibility = 'hidden';
      const delay_ms = (Math.round(Math.random() * 10)/2 + 5) * 1000
      console.log('going to wait for ', delay_ms, 'ms') 
      delay(delay_ms).then(() => narration.play());
    })
    .catch(error => {
      console.log('Unable to play the sound, User has not interacted yet.');
    });
}, 2000);


let x = 0
$("#narration").bind("ended", function(){
  x = x + 1

  const nohumans = url.searchParams.get('nohumans')
  let pick_one = 0
  if ( nohumans == null ) {
    pick_one = Math.round(Math.random() * (allsounds[x%soundFiles].length-1))
  }

  const file = allsounds[x%soundFiles][pick_one]
  console.log("Looking for ", file)
  narration.src = file
  narration.pause()
  //should also wait for a random number of seconds
  narration.load()
  const delay_ms = (Math.round(Math.random() * 6)/2 + 1) * 1000
  console.log('going to wait for ', delay_ms, 'ms') 
  delay(delay_ms).then(() => narration.play());
});


