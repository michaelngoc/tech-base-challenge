import React from 'react';
import ReactDOM from 'react-dom';
import Result from './index';
import { render, cleanup } from '@testing-library/react';

import covid19Api from 'api/covid19Api';

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Result></Result>, div);
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