import React from 'react';
import PropTypes from 'prop-types';

import Star from './Star';

const SVG = (props) => {
    const components = {
        'star': Star,
    };

    if (components[props.name]) {
        const TagName = components[props.name];
        return <TagName {...props} />;
    }
    return null;
};

SVG.propTypes = {
    name: PropTypes.string,
};

export default SVG;