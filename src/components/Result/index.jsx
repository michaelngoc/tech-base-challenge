import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'reactstrap';

Result.propTypes = {
    resultList: PropTypes.array
};

Result.defaultProps = {
    resultList: [],
}

function Result(props) {
    const { resultList } = props;

    const showResultList = (Result) => {
        var result = [];
        if (Result.length <= 0) return result;

        result = Result.map((item, index) => {
            return (
                <div className="col-md-4 col-sm-6 mt-15 mb-15" key={index}>
                    <h4>{item.Date}</h4>
                    <p>Active: {item.Active}</p>
                    <p>Confirmed: {item.Confirmed}</p>
                    <p>Deaths: {item.Deaths}</p>
                    <p>Recovered: {item.Recovered}</p>
                    <p>Country: {item.Country}</p>
                    <p>City: {item.City}</p>
                </div>
            );
        });

        return result;
    }

    return (
        <Row>
            {showResultList(resultList)}
        </Row>
    );
}

export default Result;