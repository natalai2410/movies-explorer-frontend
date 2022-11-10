class MainApi {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _returnResult(result) {
        if (result.ok) {
            return result.json();
        }
        return Promise.reject(`Упс... Что-то пошло не так: ${result.statusText}`);
    }


    register({name, email, password}) {
        return fetch(`${this._baseUrl}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password}),
        }).then(this._returnResult);
    }

    authorize({email, password}) {
        return fetch(`${this._baseUrl}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({email, password}),
        }).then(this._returnResult);
    }

    getContent(jwt) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`,
            },
        })
            .then(this._returnResult);
    };

    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'GET',
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        })
            .then(this._returnResult);
    }

    sendUserInfo({name, email}) {
        return fetch(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify({
                name: name,
                email: email,
            })
        })
            .then(result => {
                return this._returnResult(result);
            })
    };

    getMovies() {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(result => {
            return this._returnResult(result);
        })
    }

    addMovies(data) {
        return fetch(`${this._baseUrl}/movies`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
            body: JSON.stringify(data),
        })
            .then(result => {
            return this._returnResult(result);
        })
    }

    deleteMovies(movieId) {
        return fetch(`${this._baseUrl}/movies/${movieId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
            },
        })
            .then(result => {
            return this._returnResult(result);
        })
    }
}

const mainApi = new MainApi({
    baseUrl: 'http://localhost:3000',
    //baseUrl: 'https://api.kryukova.nomoredomains.icu',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default mainApi;


