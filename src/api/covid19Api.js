const covid19Api = {
    getDefault: () => {
        const url = 'https://api.covid19api.com';
        return fetch(url);
    },
    getAllDate: () => {
        const url = 'https://api.covid19api.com/all';
        return fetch(url);
    },
    getSummary: () => {
        const url = 'https://api.covid19api.com/summary';
        return fetch(url);
    },
    getCountries: () => {
        const url = 'https://api.covid19api.com/countries';
        return fetch(url);
    },
    getTotalCountries: (slugContry) => {
        const url = 'https://api.covid19api.com/total/country/' + slugContry;
        return fetch(url);
    },
    getLiveByCountry: (slugContry) => {
        const url = 'https://api.covid19api.com/live/country/' + slugContry;
        return fetch(url);
    },
    getLiveByCountryStatus: (slugContry, status) => {
        const url = 'https://api.covid19api.com/live/country/' + slugContry + '/status/' + status;
        return fetch(url);
    },
    getDayOneAllStatus: (slugContry) => {
        const url = 'https://api.covid19api.com/dayone/country/' + slugContry;
        return fetch(url);
    },
    getTotalDayOneAllStatus: (slugContry) => {
        const url = 'https://api.covid19api.com/total/dayone/country/' + slugContry;
        return fetch(url);
    },
    getDayOneStatus: (slugContry, status) => {
        const url = 'https://api.covid19api.com/dayone/country/' + slugContry + '/status/' + status;
        return fetch(url);
    },
    getTotalDayOneStatus: (slugContry, status) => {
        const url = 'https://api.covid19api.com/total/dayone/country/' + slugContry + '/status/' + status;
        return fetch(url);
    },
}
export default covid19Api;