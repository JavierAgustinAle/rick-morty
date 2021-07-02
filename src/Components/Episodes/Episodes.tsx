import React from 'react';
// Components
import SearchBar from '../SearchBar/SearchBar';
import InfoCard from '../InfoCard/InfoCard';
import Pagination from '../Pagination/Pagination';
import NoData from '../NoData/NoData';

// Redux
import { useSelector } from 'react-redux';

const Episodes = (): JSX.Element => {

    const title: string = "episodes";

    const initial = useSelector((state: any) => state.episodes.array);
    const filtered = useSelector((state: any) => state.episodes.filteredEpi);
    const error = useSelector((state: any) => state.episodes.errorEpiso);
    const search = useSelector((state: any) => state.episodes.searchEpi);

    return (
        <>
            <h1 className="pt-1 text-center">Search your favorite episode</h1>
            <div className="mx-auto col-8 col-sm-7 pt-3 pb-3">
                <SearchBar
                    title={title}
                />
                {
                    error ?
                        <div className="mx-auto"><NoData /></div>
                        : null
                }
                {
                    search && !error ?
                        <span><small>{`Showing info for ${search}`}</small></span>
                        : null
                }
            </div>
            <br />
            <div className="row pl-2 pr-2 pb-3">
                {
                    error === false ?
                        filtered.length < 1
                            ?
                            initial.map(e => (
                                <InfoCard
                                    title={title}
                                    key={e.id}
                                    data={e}
                                />

                            ))
                            :
                            filtered.map(e => (
                                <InfoCard
                                    title={title}
                                    key={e.id}
                                    data={e}
                                />

                            ))
                        : null
                }
            </div>
            {
                error === false && filtered < 1
                    ?
                    <div className="pb-2">
                        <Pagination
                            title={title}
                        />
                    </div>
                    : null

            }
        </>
    )
}

export default Episodes;