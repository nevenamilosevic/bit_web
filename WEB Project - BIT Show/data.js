const dataModule = (function () {
    class TvShow {
        constructor(name, id, coverUrl, cast, summary, seasons, crew, episodes, akas) {
          this.id = id;
          this.name = name;
          this.coverUrl = coverUrl;
          this.cast = cast;
          this.summary = summary;
          this.seasons = seasons;
          this.crew = crew;
          this.episodes = episodes;
          this.akas = akas;
        }
      };


      class Season{
        constructor(premiereDate, endDate){
          this.premiereDate = premiereDate;
          this.endDate = endDate;
        }
      };

      const getShows = () => {
        return fetch('http://api.tvmaze.com/shows')
        .then(function (res) {
          return res.json();
        })
        .then(function (showsRawObjects) {
          const topRatedShows = showsRawObjects.filter(show => show.rating.average).sort((a,b)=> b.rating.average - a.rating.average)
          let showsSliced = topRatedShows.slice(0, 51);
          return showsSliced.map(({ name, id, image }) => new TvShow(name, id, image.original));
        });
      };


      const searchShow = (term) => {
        return fetch(`https://api.tvmaze.com/search/shows?q=${term}`)
          .then(function (res) {
            return res.json();
          })
          .then(function (showsRawObjects) { 
            let slicedShows = showsRawObjects.slice(0,10);
            return slicedShows.map(({ show }) => {
              const { name, id, image } = show;
              const imageToUse = image ? image.original : '';
              return new TvShow(name, id, imageToUse);
            });
          });
      };


      const getSingleTvShow = (id) => {
        return fetch(`https://api.tvmaze.com/shows/${id}?embed[]=seasons&embed[]=cast&embed[]=crew&embed[]=episodes&embed[]=akas`)
        .then(function(res){
          return res.json();
        })
        .then(function(rawTvShow){
          // Seasons
          const seasons = rawTvShow._embedded.seasons.map(
            (s) => new Season (s.premiereDate, s.endDate)
          );
          // Cast
          const cast = rawTvShow._embedded.cast.map((a) => a.person.name);
          // Crew
          const crew = rawTvShow._embedded.crew.map((b) => b.type + ": " + b.person.name );
          // Episode list
          const episodeList = rawTvShow._embedded.episodes.map((c) => c.name + ", Season:" + c.season + ", Episode:" + c.number);
          if (rawTvShow._embedded.akas !== undefined ){
            var akas = "";
          } else{
            var akas = rawTvShow._embedded.akas.map((d) => "AKA: " + d.name +", " + "Country: " + d.country.name);
          }
          return new TvShow(
            rawTvShow.name,
            rawTvShow.id,
            rawTvShow.image.original,
            cast,
            rawTvShow.summary,
            seasons,
            crew,
            episodeList,
            akas
          );
        });
      };



      return {
        getShows,
        searchShow,
        getSingleTvShow
      }


})();