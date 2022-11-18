import { defineStore } from "pinia";
import axios from 'axios';

export const useArticleStore = defineStore("userAuthStore", {
    state: () => ({
        user: null,
    }),
    actions: {
    async fetchUser(){
        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Credentials": true,
                "Access-Control-Allow-Origin": true,
            },
        };

        try {
            const response = await axios.get(
                "http://localhost:5000/auth/user",
                config
            );
            if (response && response.data) {
                console.log("You are authenticated! User: ", response.data);
                this.user = response.data;
                localStorage.setItem("user", JSON.stringify({ user: response.data }));
            }
        } catch (err) {
            console.log("Not properly authenticated", err);
        }

    }
    }
});