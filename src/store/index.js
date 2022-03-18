import { createStore } from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from '@/db.js'

export const store = createStore({
    state() {
        return {
            ItemType: "all",
            test: [],
            cart_old: [1, 3],
            cart: [
                {
                    id: 1,
                    curSize: "M",
                    cartId: 1
                },
                {
                    id: 3,
                    curSize: "S",
                    cartId: 1
                },
            ],
            products: [
                {
                    id: 1,
                    name: "Earthen Bottle",
                    type: "jersey",
                    price: 48,
                    size: ["S", "M", "L"],
                    imageSrc:
                        "https://i.ibb.co/HP0PT5C/t1.png",
                    imageAlt:
                        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                },
                {
                    id: 2,
                    name: "Nomad Tumbler",
                    type: "apparel",
                    price: 35,
                    size: ["S", "M", "L", "XL"],
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
                    imageAlt:
                        "Olive drab green insulated bottle with flared screw lid and flat top.",
                },
                {
                    id: 3,
                    name: "Focus Paper Refill",
                    type: "jersey",
                    price: 89,
                    size: ["S", "M", "L"],
                    imageSrc:
                        "https://i.ibb.co/kD3LzHJ/g2.jpg",
                    imageAlt:
                        "Person using a pen to cross a task off a productivity paper card.",
                },
                {
                    id: 4,
                    name: "Machined Mechanical Pencil",
                    type: "accesory",
                    price: 35,
                    size: [],
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
                    imageAlt:
                        "Hand holding black machined steel mechanical pencil with brass tip and top.",
                },
                {
                    id: 5,
                    name: "Bottle",
                    type: "jersey",
                    price: 44,
                    size: ["S", "L"],
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
                    imageAlt:
                        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                },
                {
                    id: 6,
                    name: "Pencil",
                    type: "accesory",
                    price: 34,
                    size: ["S", "L"],
                    imageSrc:
                        "https://picsum.photos/id/821/600/600",
                    imageAlt:
                        "Hand holding black machined steel mechanical pencil with brass tip and top.",
                },
                // More products...
            ],
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
            state.cart.push({ id: (Number(input.id)), curSize: input.size })
        },
        /* changeCurrentSize(state, input){
            const item = state.products.find(item => item.id == (Number(input.id)));
            item.curSize = input.size
        }, */

        ...vuexfireMutations
    },
    actions: {
        /* changeCurrentSize({ commit }, input) {
            commit('changeCurrentSize', input)
        }, */
        addToCart({ commit }, input) {
            commit('addToCart', input)
        },
        removeFromCart({ commit }, payload) {
            commit('removeFromCart', payload)
        },
        setNewType({ commit }, input) {
            commit('removeFromCart', input)
        },
        bindTest: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('test', db.collection('test'))
        })

    },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
        },
        cartItems: (state) => {
            let cartItems = state.cart.map(
                item => state.products.find(
                    product => product.id === item.id
                )
            )
            console.log(cartItems)
            let final = []
            cartItems.forEach(item => {
                state.cart.forEach(element => {
                    if (element.id === item.id) {
                        item.curSize = element.curSize

                    }
                })
            final.push(item)
            })
            console.log(final)
            return final
        }
    }
})