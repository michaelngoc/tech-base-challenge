import React from 'react';
import Sidebar from './index';
import { render, cleanup } from '@testing-library/react';

import covid19Api from 'api/covid19Api';

afterEach(cleanup);

it("renders without crashing", () => {
    const { getByText } = render(<Sidebar />);

    getByText("Countries");
})

it("renders Api", async () => {
    const response = await covid19Api.getCountries();
    const responseJson = await response.json();
    const { getByText } = render(<Sidebar countriesList={responseJson} />);

    getByText("Viet Nam");
})