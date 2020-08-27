import React from 'react';
// Componets
import SearchBar from '../SearchBar/SearchBar';
import CharCard from '../CharCard/CharCard';

// Redux
import { connect } from 'react-redux';

const Characters = ({ initial, filtered }) => {

    const title = 'characters';
    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite character</h1>
            <div className="mx-auto col-8 col-sm-7 pt-3 pb-3">
                <SearchBar
                    title={title}
                />
            </div>
            <br />
            <div className="row pl-2 pr-2">
                {
                    filtered.length < 1
                        ?
                        initial.map(e => (
                            <CharCard
                                key={e.id}
                                data={e}
                            />

                        ))
                        :
                        filtered.map(e => (
                            <CharCard
                                key={e.id}
                                data={e}
                            />

                        ))
                }
            </div>

        </>
    )
}

// Entrega todo lo que tenga el store
function mapState(state) {
    return {
        initial: state.characters.array,
        filtered: state.characters.filtered
    }
}


export default connect(mapState)(Characters);