import { Component } from "react"
import "../src/styles/App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      quote: "",
      author: "",
      colChange: [
        "#bcb4cf",
        "#3160cf",
        "#f12487",
        "#a8ef71",
        "#4e82ac",
        "#ffc306",
        "#49b571",
        "#915554",
        "#a5816d",
        "#8255a3",
        "#ebe70e",
        "#b76de2",
        "#d35264",
      ],
    }
    this.newQuote = this.newQuote.bind(this)
  }

  async newQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random")
      const quote = await response.json()
      this.setState({
        quote: `${quote.content}`,
        author: `${quote.author}`,
      })
    } catch (error) {
      console.error(error)
    }
  }
  componentDidMount() {
    this.newQuote()
  }
  render() {
    let color = Math.floor(Math.random() * 13)
    const styles = {
      backgroundColor: this.state.colChange[color],
    }
    const textcolor = {
      color: this.state.colChange[color],
    }

    return (
      <>
        <div className="container" style={styles}>
          <div id="quote-box">
            <div id="text">
              <h2 style={textcolor} className="jacquard-24-regular">
                <i className="fa-solid fa-quote-left"></i>
                {this.state.quote}
              </h2>
            </div>
            <div id="author">
              <h3 style={textcolor} className="jersey-15-regular">
                {this.state.author}
              </h3>
            </div>
            <div id="foot">
              <button
                id="new-quote"
                type="button"
                style={styles}
                onClick={this.newQuote}
              >
                New Quote
              </button>
              <div id="links">
                <a
                  id="tweet-quote"
                  href="https://twitter.com/intent/tweet"
                  target="_blank"
                  style={styles}
                >
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a
                  id="tweet-quote"
                  href="https://web.facebook.com/?_rdc=1&_rdr"
                  target="_blank"
                  style={styles}
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App
