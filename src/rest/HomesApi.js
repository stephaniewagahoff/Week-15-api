const HOMES_ENDPOINT = 'https://ancient-taiga-31359.herokuapp.com/api/houses';

class HomesApi {
    get = async () => {
        try {
        const resp = await fetch(HOMES_ENDPOINT);
        const data =await resp.json();
        return data;
    } catch(e) {
        console.log('Oops, looks like fetchHomes had an issue.', e);
    }
}

    put = async (home) => {
        try {
        const resp = await fetch(`${HOMES_ENDPOINT}/${home._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(home)
        });
        return await resp.json();
    } catch(e) {
        console.log('Oops, looks like updating homes had an issue.', e); 
    }
}

}

export const homesApi = new HomesApi();