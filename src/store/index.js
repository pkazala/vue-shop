import { createStore } from 'vuex'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { stringify } from '@firebase/util'

export const store = createStore({
    state() {
        return {
            jwt: '',
            username: '',
            ItemType: "all",
            cart: [],
            products: [],
            productsDB: [],
            discount: '',
            disc_codes: [{
                name: "DISC10",
                value: .9
            },
            {
                name: "DISC20",
                value: .8
            },
            {
                name: "TURBODISC50",
                value: .5
            }]
        }
    },
    mutations: {
        setNewType(state, input) {
            // mutate state
            state.ItemType = input
            console.log(state.ItemType)
        },
        removeFromCart(state, payload) {
            let indexToDelete = state.cart.indexOf(payload);
            state.cart.splice(indexToDelete, 1)
            var cart = localStorage.getItem('cart')
            var cartParsed = JSON.parse(cart)
            cartParsed.splice(indexToDelete, 1)
            localStorage.setItem('cart', stringify(cartParsed))
            console.log(cartParsed)
        },
        addToCart(state, input) {
            state.cart.push({ product: input.product, curSize: input.size, quantity: input.quantity })
            localStorage.setItem('cart', stringify(state.cart))
        },
        getProducts(state, products) {
            state.products = products
        },
        getJWT(state, jwt) {
            state.jwt = jwt.access_token
            localStorage.setItem('token', stringify(jwt.access_token))
        },
        setUsername(state, input) {
            console.log(input)
            try {
                state.username = jwt_decode(input.access_token).sub
                console.log(state.username)
            }
            catch (error) {
                console.log(error)
            }
        },
        loadJWT(state) {
            var token = localStorage.getItem('token')
            state.jwt = token
            state.username = jwt_decode(token).sub
        },
        loadCart(state) {
            var cart = localStorage.getItem('cart')
            var cartParsed = JSON.parse(cart)
            state.cart = cartParsed
        },

    },
    actions: {
        addToCart({ commit }, input) {
            commit('addToCart', input)
        },
        removeFromCart({ commit }, payload) {
            commit('removeFromCart', payload)
        },
        setNewType({ commit }, input) {
            commit('removeFromCart', input)
        },
        getProducts({ commit }) {
            axios.get('https://flask-server-app.herokuapp.com/getProducts')
                .then(response => {
                    commit('getProducts', response.data)
                    commit('loadJWT')
                })
        },
        getJWT({ commit }, input) {
            commit('getJWT', input)
            commit('setUsername', input)
        },
        loadJWT({ commit }) {
            commit('loadJWT')
        },
        loadCart({ commit }) {
            commit('loadCart')
        },

    },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        },
    }
})