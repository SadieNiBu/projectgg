import '~/styles/game.css'

const Game = () => {
    return (
        <div className="grid grid-cols-[.4fr,1fr] grid-rows-1] ">
            {/* Image taking up the first column */}
            <div className="flex w-fit">
                <img
                    src="https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg"
                    className="game_pic ml-4 object-cover w-auto h-[300px] rounded-lg"
                />
            </div>
            
            {/* Right column containing two sections */}
            <div className="flex flex-col pl-2 ml-4 mr-4 ">
                <div className='pb-2'>
                    <p className="text-white font-[400] text-[32px] leading-[38.4px] ">Animal Crossing: New Horizons</p>
                    <p className="text-white font-[400] text-[20px] leading-[24px] pl-1">
                        Escape to a deserted island and create your own paradise as you explore, create, and customize in the Animal Crossing: New Horizons game.
                    </p>
                </div>
                <div className="info_box text-white font-[500] text-[16px] leading-[22.4px] self-end">
                    <p className="m-2">Rating: 4.8/5<br />Studio: Nintendo<br />Release Date: Dec 31, 2018</p>
                </div>
            </div>
        </div>
    );
}





export default Game