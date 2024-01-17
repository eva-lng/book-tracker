const borderColors = ["#EB2E31", "#EF9A00", "#00C779", "#00AABD", "#006DD3", "#BB5DCB", "#ED1455", "#999999", "#E6CF46"]

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * borderColors.length)
  return borderColors[randomIndex]
}

const quotes = document.querySelectorAll(".quotetext span")

quotes.forEach(quote => {
  const randomColor = getRandomColor()
  quote.style.border = `2px solid ${randomColor}`
  quote.style.backgroundColor = randomColor
})