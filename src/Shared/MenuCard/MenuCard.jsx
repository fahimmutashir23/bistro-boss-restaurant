import PropTypes from 'prop-types';

const MenuCard = ({item}) => {
    const {name, image, recipe, price} = item;

    return (
        <div className='flex gap-2'>
            <div>
                <img src={image} alt="" className='rounded-tr-full rounded-b-full ' />
            </div>
            <div>
                <h1 className='uppercase text-xl font-semibold'>{name}------</h1>
                <p>{recipe}</p>
            </div>
            <h1 className='text-orange-500 font-semibold'>${price}</h1>
        </div>
    );
};

MenuCard.propTypes = {
    item: PropTypes.object
};

export default MenuCard;