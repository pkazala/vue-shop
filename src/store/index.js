import { createStore } from 'vuex'
import axios from 'axios'

export const store = createStore({
    state() {
        return {
            ItemType: "all",
            cart: [],
            products: [],
            productsDB: []
        }
    },
    mutations: {
        setNewType(state, input) {
            // mutate state
            state.ItemType = input
            console.log(state.ItemType)
        },
        removeFromCart(state, payload) {
            let indexToDelete = state.cart.indexOf(Number(payload));
            state.cart.splice(indexToDelete, 1)
        },
        addToCart(state, input) {
            state.cart.push({ product: input.product, curSize: input.size, quantity: input.quantity })
        },
        getProducts(state, products) {
            state.products = products
        }

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
            axios.get('http://127.0.0.1:5000/getProducts')
                .then(response => {
                    commit('getProducts', response.data)
                })
        },

    },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        },
    }
})