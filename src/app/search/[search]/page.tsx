import { api } from "~/trpc/server";

interface SearchProps {
    params: {
      search: string;
    };
  }

export default async function Page({ params }: SearchProps)
{

    // use search to get query of games
    const search = await api.igdb.searchGames({query: params.search, limit: 10});


    // return a page with the search results which are just clickable names of games

    return (
        <div className="z-100 mt-20 flex flex-col self-center h-full justify-center gap-4">
            {search.map(game => 
            <div className=" rounded bg-slate-500 w-fit self-center">
                <a key={game.id} className="text-2xl self-center justify-center m-3" href={`/game/${game.id}`}>{game.name}</a>
            </div>
            )}
        </div>
    );

}


