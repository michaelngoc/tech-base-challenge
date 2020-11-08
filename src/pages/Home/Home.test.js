import React from 'react';
import Home from './index';
import { render, cleanup } from '@testing-library/react';

import covid19Api from 'api/covid19Api';
import Sidebar from 'components/Sidebar';
import Result from 'components/Result';

afterEach(cleanup);

it("renders without crashing", () => {
    const { getByText } = render(<Home />);

    getByText("Covid19");
    getByText("New Confirmed:");
    getByText("New Deaths:");
    getByText("New Recovered:");
    getByText("Total Confirmed:");
    getByText("Total Deaths:");
    getByText("Total Recovered:");
})

it("renders api", async () => {
    const { } = render(<Home />);
    const response = await covid19Api.getSummary();
    const responseJson = await response.json();

    expect(responseJson.Global.NewConfirmed).toEqual(509804);
    expect(responseJson.Global.NewDeaths).toEqual(7577);
    expect(responseJson.Global.NewRecovered).toEqual(298867);
    expect(responseJson.Global.TotalConfirmed).toEqual(49825235);
    expect(responseJson.Global.TotalDeaths).toEqual(1250362);
    expect(responseJson.Global.TotalRecovered).toEqual(32772759);
})

it("renders Sidebar api", async () => {
    const response = await covid19Api.getCountries();
    const responseJson = await response.json();
    const { getByText } = render(<Sidebar countriesList={responseJson} />);

    getByText("Viet Nam");
})

it("renders Result api", async () => {
    const response = await covid19Api.getLiveByCountry("viet-nam");
    const responseJson = await response.json();
    const { getByText } = render(<Result resultList={responseJson} />);

    getByText("2020-04-13T00:00:00Z");
    getByText("Active: 118");
    getByText("Confirmed: 262");
    getByText("Recovered: 144");
})