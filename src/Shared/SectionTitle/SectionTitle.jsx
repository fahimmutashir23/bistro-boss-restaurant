import PropTypes from 'prop-types';

const SectionTitle = ({title, subTitle}) => {
    return (
        <div className="text-center my-8">
            <h3 className="text-orange-600 italic">--- {subTitle} ---</h3>
            <h1 className='border-y-4 border-gray-300 max-w-fit mx-auto px-14 py-3 mt-2 uppercase text-4xl font-semibold'>{title}</h1>
        </div>
    );
};

SectionTitle.propTypes = {
    title: PropTypes.node,
    subTitle: PropTypes.node,
};

export default SectionTitle;




