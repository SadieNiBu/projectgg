import '~/styles/game.css'
import FullStar from './full_star'
import EmptyStar from './empty_star'

const NewReview = () => {
    return (
        <div>
            <div className='star_box ml-[30px]'/>
            <div className='absolute mt-[5px] ml-[32px]'>
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
                <EmptyStar />
            </div>
            <form>
            <input className='new_review_box ml-[60px]' type='text'>
            </ input>
            </form>
        </div>
    )
}

export default NewReview