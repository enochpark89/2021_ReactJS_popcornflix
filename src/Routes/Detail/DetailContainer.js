import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      result_two: null,
      videos: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/")
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const { isMovie } = this.state;

    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }
    let result = null;
    let result_two = null;
    let videos = null; 
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ data: result_two } = await moviesApi.Credits(parsedId));
        ({ data: videos } = await moviesApi.Videos(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));
        ({ data: result_two } = await tvApi.Credits(parsedId));
        ({ data: videos } = await tvApi.Videos(parsedId));
      }
   
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result, result_two, videos});
    }
  }


  render() {
    const { result, result_two, videos,  error, loading,  } = this.state;
    return <DetailPresenter result={result} result_two={result_two} videos={videos} error={error} loading={loading} />;
  }
}