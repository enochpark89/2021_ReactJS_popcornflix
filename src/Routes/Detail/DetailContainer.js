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
      result2: null,
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
    let result2 = null;
    try {
      if (isMovie) {
        ({ data: result } = await moviesApi.movieDetail(parsedId));
        ({ result2: result2 } = await moviesApi.movieCredits(parsedId));
      } else {
        ({ data: result } = await tvApi.showDetail(parsedId));

      }
      console.log(result)
    } catch {
      this.setState({ error: "Can't find anything." });
    } finally {
      this.setState({ loading: false, result });
    }
  }


  render() {
    const { result, error, loading, result2 } = this.state;
    return <DetailPresenter result={result} result2={result2} error={error} loading={loading} />;
  }
}