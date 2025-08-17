class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUserInformation() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => res.json());
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "GET",
      headers: {
        ...this._headers,
      },
    }).then((res) => res.json());
  }
  

  updateUserProfile(body) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  createCard(body) {
    return fetch(`${this._baseUrl}/cards/`, {
      method: "POST",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify(body),
    }).then((res) => res.json());
  }

  like(id, like) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      method: like ? "PUT" : "DELETE",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ isLiked: like }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      method: "DELETE",
      headers: {
        ...this._headers,
      },
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }

  updateProfilePhoto(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        ...this._headers,
      },
      body: JSON.stringify({ avatar }),
    }).then((res) => {
      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }
      return res.json();
    });
  }
}

const api = new Api({
  baseUrl: "https://around-api.es.tripleten-services.com/v1",
  headers: {
    authorization: "0c810133-6e18-4511-b8a8-5d053ae06fff",
    "Content-Type": "application/json",
  },
});

export default api;

    /*
    async _makeRequest(endPoint, method = "GET", body = null) {
      const options = {
        method,
        headers: { ...this._headers },
      };
      if (body) {
        options.headers["Content-Type"] = "application/json";
        options.body = JSON.stringify(body);
      }
      try {
        const res = await fetch(`${this._baseUrl}/${endPoint}`, options);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        return await res.json();
      } catch (err) {
        return console.log(err);
      }
    }
    async getInitialCards() {
      return this._makeRequest("/cards");
    }
    async getUserInfo() {
      return this._makeRequest("/users/me");
    }
    async setUserInfo(name, about) {
      return this._makeRequest("/users/me", "PATCH", { name, about });
    }
    async addCard(data) {
      return this._makeRequest("/cards", "POST", data);
    }
    async removeCard(cardId) {
      return this._makeRequest(`/cards/${cardId}`, "DELETE");
    }
    async changeLikeCardStatus(cardId, isLiked) {
      return isLiked ? 
      this._makeRequest(`/cards/${cardId}/likes`, "PUT") 
      : 
      this._makeRequest(`/cards/${cardId}/likes`, "DELETE");
    }
    async updateAvatar(data) {
      return this._makeRequest("/users/me/avatar", "PATCH", data);
    }
    async getUserInfoAndCards() {
      try {
        const [userInfo, cards] = await Promise.all([
          this.getUserInfo(),
          this.getInitialCards(),
        ]);
        return { userInfo, cards };
      } catch (error) {
        return await Promise.reject(error);
      }
    }
  }
  */