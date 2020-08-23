import React from 'react';

// Redux
import { connect } from 'react-redux';



const SearchBar = ({ title, characters, episodes, locations }) => {

    function searchInfo(e) {

        let target = e.target.value
        if (target.length > 0)
            target = target[0].toUpperCase() + target.slice(1);

        if (target.length > 2) {
            if (title === 'characters') {
                characters.filter(function (charc) {
                    let personaje;
                    if (charc.name.includes(target) || charc.type.includes(target)) {
                        console.log(charc)
                        personaje = charc;
                    }
                    return personaje;
                });
            }
            if (title === 'episodes') {
                episodes.filter(function (epis) {
                    let episode;
                    if (epis.name.includes(target)) {
                        console.log(epis)
                        episode = epis;
                    }
                    return episode;
                });
            }
            if (title === 'locations') {
                locations.filter(function (loca) {
                    let location;
                    if (loca.name.includes(target) || loca.type.includes(target)) {
                        console.log(loca)
                        location = loca;
                    }
                    return location;
                });
            }
        }
    }

    return (
        <form>
            <div>
                {
                    title === 'episodes'
                        ? <input className="form-control"
                            type="text"
                            placeholder={`Search ${title} name`}
                            aria-label="Search"
                            onChange={searchInfo}
                        />
                        : <input className="form-control"
                            type="text"
                            placeholder={`Search ${title} name or type`}
                            aria-label="Search"
                            onChange={searchInfo}
                        />
                }


            </div>
        </form>

    )

}

// Entrega todo lo que tenga el store
function mapState(state) {
    return {
        characters: state.characters.array,
        episodes: state.episodes.array,
        locations: state.locations.array
    }
}

export default connect(mapState)(SearchBar);