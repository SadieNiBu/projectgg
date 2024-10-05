import '~/styles/game.css'

const Game = () => {
    return (
        <div>
            <img 
            src="https://m.media-amazon.com/images/I/81UfEdvf2kL._AC_UF1000,1000_QL80_.jpg"
            className="game_pic w-[194px] h-[218.41]"/>
            <div className='absolute top-[330px]'>
                <p className="text-white font-[400] text-[32px] leading-[38.4px] pl-[300px] m-7">Animal Crossing: New Horizons</p>
                <p className="text-white font-[400] text-[20px] leading-24px pl-[300px]">Escape to a deserted island and create your own paradise as<br/>you explore, create, and customize in the Animal Crossing:<br/>New Horizons game.</p>
            </div>
            <div className='info_box text-white font-[500] text-[16px] leading-[22.4px]'>
                <p className='pl-[7px]'>Rating: 4.8/5<br/>Studio: Nintendo<br/>Release Date: Dec 31, 2018</p>
            </div>
        </div>
    )
}

export default Game