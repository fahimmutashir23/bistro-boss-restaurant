import { Helmet } from "react-helmet-async";
import PropTypes from 'prop-types';


const PageTitle = ({title}) => {
    return (
        <Helmet><title>Bistro Restaurant | {title}</title></Helmet>
    );
};

PageTitle.propTypes = {
    title: PropTypes.node
};

export default PageTitle;
