const { app, BrowserWindow } = require('electron')
const { nanoid } = require('nanoid');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 250,
    icon: __dirname + '/frontend/assets/images/james.png',
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.removeMenu()
  win.setResizable(false)
  win.loadFile('frontend/index.html')
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})


function vowelChecker(word) {
  var leet = ''
  for (let i = 0; i < word.length; i++) {
    let randNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0
    if (word.charAt(i) == 'a') {
      randNum % 2 ? leet = leet + '@' : leet = leet + 'a'
    } else if (word.charAt(i) == 'e') {
      randNum % 2 ? leet = leet + 'e' : leet = leet + '3'
    }  else if (word.charAt(i) == 'i') {
      randNum % 5 ? leet = leet + 'i' : leet = leet + '1'
    }  else if (word.charAt(i) == 'o') {
      randNum % 2 ? leet = leet + '0' : leet = leet + 'o'
    } else if (word.charAt(i) == 'u') {
      randNum % 3 ? leet = leet + '(_)' : leet = leet + 'u'
    } else if (word.charAt(i) == 's') {
      randNum % 2 ? leet = leet + '$' : leet = leet + 's'
    } else {
      leet = leet + word.charAt(i)
    }
  }  
  return leet;
}
function capChecker(word) {
  let newWord = ''
  for (let i = 0; i < word.length; i++) {
    if (/^[a-zA-Z]*$/.test(word.charAt(i)) == true) {
      if (word.charAt(i) != word.charAt(i).toUpperCase()) {
        let randNum = Math.floor(Math.random() * (100 - 0 + 1)) + 0
        if (randNum % 2) {
          newWord = newWord + word.charAt(i).toUpperCase()
        }else {
          newWord = newWord + word.charAt(i)
        }
      }
    } else {
      newWord = newWord + word.charAt(i)
    }
  } 
  return newWord;
}



const names = ['james', 'haywood']
const insults = ['isdumb', 'eatsbutt', 'isacockshiner', 'isacockmuppet', 'isamouth-breather', 'isayuppie', 'isatwat', 'isaassclown', 'isaasshat', 'isaassmangler', 'isathundercunt', 'istheworstemployee', 'isacumguzzler']
function createPassword(caps, lower, number, special, numCount, specialCount) {
  var passSecOne = names[Math.floor(Math.random() * (names.length - 1 + 1)) + 0]
  var salt = nanoid(3)
  var passSecTwo = insults[Math.floor(Math.random() * (insults.length - 1 + 1)) + 0]
  // run the first word through vowel checker
  var leetOne = vowelChecker(passSecOne);
  var leetSalt = salt
  var leetTwo = vowelChecker(passSecTwo)
  if (caps == true) {
    var reLeetOneOnCapCheck = capChecker(leetOne)
    if (reLeetOneOnCapCheck !== leetOne) {
      leetOne = reLeetOneOnCapCheck
    }
    var reLeetTwoOnCapCheck = capChecker(leetTwo)
    if (reLeetTwoOnCapCheck !== leetOne) {
      leetTwo = reLeetTwoOnCapCheck
    }
  }else if (lower == true) {
    // we need to run some checks
  }else if (number == true) {
    // we need to run some checks 
  }else if (special == true) {
    // we need to run some checks
  }else if (numCount > 1) {
    // we need to do some checks
  }else if (specialCount > 1) {
    // we need to do some checks
  }
  var leeted = leetOne+'.'+leetTwo
  return leeted;
}


module.exports = { createPassword }