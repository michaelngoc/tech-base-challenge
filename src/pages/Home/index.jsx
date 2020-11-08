import React, { useEffect, useState } from 'react';
import './style.scss';
import covid19Api from 'api/covid19Api';
import { Container, Row, Col } from 'reactstrap';
import Sidebar from 'components/Sidebar';
import Result from 'components/Result';

function HomePage() {
    const [covid19Sumary, setCovid19Sumary] = useState({
        Global: {
            NewConfirmed: 0,
            NewDeaths: 0,
            NewRecovered: 0,
            TotalConfirmed: 0,
            TotalDeaths: 0,
            TotalRecovered: 0,
        },
    });
    const [countriesList, setCountriesList] = useState([]);
    const [resultList, setResultList] = useState([]);

    const getCovid19Api = async () => {
        try {
            const response = await covid19Api.getSummary();
            const responseJson = await response.json();
            setCovid19Sumary(responseJson);
        } catch (error) {
            console.log('Failed to fetch results: ', error);
        }
    };
    const getCovid19CountriesApi = async () => {
        try {
            const response = await covid19Api.getCountries();
            const responseJson = await response.json();
            setCountriesList(responseJson);
        } catch (error) {
            console.log('Failed to fetch results: ', error);
        }
    };
    const getCovid19DayOneAllStatusApi = async (slugContry) => {
        try {
            const response = await covid19Api.getDayOneAllStatus(slugContry);
            const responseJson = await response.json();
            setResultList(responseJson);
        } catch (error) {
            console.log('Failed to fetch results: ', error);
        }
    };

    useEffect(() => {
        getCovid19Api();
        getCovid19CountriesApi();
    }, []);

    function handleClickContry(slug) {
        getCovid19DayOneAllStatusApi(slug);
    }

    return (
        <div className="home-page">
            <Container>
                <h1 className="text-center">Covid19</h1>
                <table className="w-100 mb-50">
                    <tbody>
                        <tr>
                            <th>New Confirmed:</th>
                            <td>{covid19Sumary.Global.NewConfirmed}</td>
                            <th>New Deaths:</th>
                            <td>{covid19Sumary.Global.NewDeaths}</td>
                            <th>New Recovered:</th>
                            <td>{covid19Sumary.Global.NewRecovered}</td>
                        </tr>
                        <tr>
                            <th>Total Confirmed:</th>
                            <td>{covid19Sumary.Global.TotalConfirmed}</td>
                            <th>Total Deaths:</th>
                            <td>{covid19Sumary.Global.TotalDeaths}</td>
                            <th>Total Recovered:</th>
                            <td>{covid19Sumary.Global.TotalRecovered}</td>
                        </tr>
                    </tbody>
                </table>
                <Row className="mt-50">
                    <Col md="3">
                        <div className="countries mb-50">
                            <Sidebar countriesList={countriesList} chooseCountry={handleClickContry} />
                        </div>
                    </Col>
                    <Col md="9">
                        <Result resultList={resultList} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default HomePage;