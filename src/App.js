import React from "react";
import Search from "./components/search/search";
import Youtube from "./api/youtube";
import Videolist from "./components/video/VideoList";
import VideoDetail from "./components/video/VideoDetail";
import Navabar from "./components/ui/Navbar";
class App extends React.Component {
  state = { video: [], selectedVideo: null };
  componentDidMount() {
    this.onTermSubmit("DesignCode");
  }
  onTermSubmit = async (term) => {
    const res = await Youtube.get("/search", {
      params: {
        q: term,
      },
    });
    this.setState({ video: res.data.items, selectedVideo: res.data.items[0] });
  };
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div>
        <Navabar>
          <Search onFormSubmit={this.onTermSubmit} />
        </Navabar>
        <div className="ui container">
          <div className="ui grid">
            <div className="ui row">
              <div className="eleven wide column">
                <VideoDetail video={this.state.selectedVideo} />
              </div>
              <div className="five wide column">
                <Videolist
                  onVideoSelect={this.onVideoSelect}
                  video={this.state.video}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
