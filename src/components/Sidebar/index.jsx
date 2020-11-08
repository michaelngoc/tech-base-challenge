import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

Sidebar.propTypes = {
    countriesList: PropTypes.array,
    chooseCountry: PropTypes.func
};

Sidebar.defaultProps = {
    countriesList: [],
    chooseCountry: null
}

function Sidebar(props) {
    const { countriesList, chooseCountry } = props;

    function handleClickContry(countrySlug) {
        if (!chooseCountry) return false;
        chooseCountry(countrySlug);
    }

    const showCountriesList = (Countries) => {
        var result = [];
        if (Countries.length <= 0) return result;

        result = Countries.map((country, index) => {
            return (
                <li key={index} onClick={() => { handleClickContry(country.Slug) }}>
                    {country.Country}
                </li>
            );
        });

        return result;
    }

    return (
        <div className="sidebar">
            <div className="sidebar-item">
                <div className="item-head">
                    <h3 className="collapse-btn">
                        Countries
                    </h3>
                </div>
                <div className="item-main">
                    <ul className="list-1">
                        {showCountriesList(countriesList)}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;