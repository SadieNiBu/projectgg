import { Game } from '~/lib/schemas/igdb';
import { constructImageUrl } from '~/lib/utils';
import '~/styles/game.css'

const GameID = async (game: Game) =>
{   
    console.log(JSON.stringify(game));
    function getGameCover()
    {
        if (!game.cover)
        {
            console.log("Test Message: Undefined");
            return undefined;
        }
        console.log("Test Message"+game.cover?.image_id);
        return constructImageUrl(game.cover?.image_id ?? "", "cover_big");
    }
    function getGameName()
    {
        return game.name;
    }
    function getGameSummary()
    {
        return game.summary;
    }
    function getGameRating()
    {
        const rate = (((game.rating ?? 0) / 20)).toFixed(2);
        return rate;
    }
    function getReleaseDate()
    {
        return game.first_release_date;
    }

    return (
        <div className="grid grid-cols-[.4fr,1fr] grid-rows-1] ">
            {/* Image taking up the first column */}
            <div className="flex w-fit pt-[75px]">
                <img
                    src={getGameCover() ? getGameCover() : "https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg"}
                    className="game_pic ml-20 object-cover w-auto h-[300px] rounded-lg"
                />
            </div>

            {/* Right column containing two sections */}
            <div className="flex flex-col pl-10 ml-4 mr-4 pt-[70px]">
                <div className='pb-20'>
                    <p className="text-white font-[400] text-[32px] leading-[38.4px] ">{getGameName()}</p>
                    <p className="text-white font-[400] text-[20px] leading-[24px] pt-2">{getGameSummary()}</p>
                </div>
                <div className="info_box text-white font-[500] text-[16px] leading-[22.4px]">
                    <p className="m-1">Rating: {getGameRating()}<br />Studio: Nintendo<br />Release Date: {getReleaseDate()}</p>
                </div>
            </div>
        </div>
    );
}

export default GameID