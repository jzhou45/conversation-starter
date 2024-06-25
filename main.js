const getQuestion = () => document.getElementById('question')

const formStr = (isItPrompt, yesFunc, noFunc) => (
  `<form id="question"> \
  Is it ${isItPrompt}? \
  <button onclick="${yesFunc}()">Yes</button> \
  <button onclick="${noFunc}()">No</button> \
  </form>`
)

const spanStr = (text) => `<span>${text}</span>`

const mondayPrompt = () => {
  getQuestion().innerHTML = spanStr('How was your weekend?')
}

const questionFriday = () => {
  getQuestion().innerHTML = formStr('Friday', 'fridayPrompt', 'questionWeekend')
}

const fridayPrompt = () => {
  getQuestion().innerHTML = spanStr('What are you doing this weekend?')
}

const questionWeekend = () => {
  getQuestion().innerHTML = formStr('the weekends', 'weekendPrompt', 'questionLunch')
}

const weekendPrompt = () => {
  getQuestion().innerHTML = spanStr('How was work?')
}

const questionLunch = () => {
  getQuestion().innerHTML = formStr('before lunch', 'lunchPrompt', 'questionPostLunch')
}

const lunchPrompt = () => {
  getQuestion().innerHTML = spanStr("What's for lunch?")
}

const questionPostLunch = () => {
  getQuestion().innerHTML = formStr('before 5pm', 'postLunchPrompt', 'workPrompt')
}

const postLunchPrompt = () => {
  getQuestion().innerHTML = spanStr('What are you doing after work?')
}

const workPrompt = () => {
  getQuestion().innerHTML = spanStr('How was work?')
}
