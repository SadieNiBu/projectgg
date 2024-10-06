import { api } from "~/trpc/server";

interface SearchProps {
    params: {
      search: string;
    };
  }

export default async function Page({ params }: SearchProps)
{

    // use search to get query of games
    const search = api.igdb.searchGames({query: params.search, limit: 10});


    // return a page with the search results which are just clickable names of games

    return (
        <div>
            {(await search).map(game => <div>{game.name}</div>)}
        </div>
    );

}


