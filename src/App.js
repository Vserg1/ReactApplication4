import React from "react";
import "./styles.css";

const movie = {
  title: "Title new",
  vote_average: 10.1,
  image: "http://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
  overview: "chto-to zdes napisano"
};

function Image(propc) {
  //console.log("Image propc", propc);
  return <img width="100%" src={propc.src} alt={propc.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      like: false
    };
  }

  toogleOverView = () => {
    this.setState({
      show: !this.state.show
    });
  };
  handleLike = () => {
    this.setState({
      like: !this.state.like
    });
  };

  render() {
    console.log("state=", this.state);
    //console.log("state=", this.state);
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toogleOverView}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button
            type="button"
            onClick={this.handleLike}
            className={this.state.like ? "btn--like" : ""}
            //style={{ background: this.state.like ? "blue" : "white" }}
          >
            Like
          </button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}
