import { createStore } from 'vuex'

export const store = createStore({
    state() {
        return {
            ItemType: "all",
            cart: [1, 3],
            products: [
                {
                    id: 1,
                    name: "Earthen Bottle",
                    type: "jersey",
                    price: "$48",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
                    imageAlt:
                        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                },
                {
                    id: 2,
                    name: "Nomad Tumbler",
                    type: "apparel",
                    price: "$35",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg",
                    imageAlt:
                        "Olive drab green insulated bottle with flared screw lid and flat top.",
                },
                {
                    id: 3,
                    name: "Focus Paper Refill",
                    type: "jersey",
                    price: "$89",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg",
                    imageAlt:
                        "Person using a pen to cross a task off a productivity paper card.",
                },
                {
                    id: 4,
                    name: "Machined Mechanical Pencil",
                    type: "accesory",
                    price: "$35",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg",
                    imageAlt:
                        "Hand holding black machined steel mechanical pencil with brass tip and top.",
                },
                {
                    id: 5,
                    name: "Bottle",
                    type: "jersey",
                    price: "$48",
                    imageSrc:
                        "https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg",
                    imageAlt:
                        "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
                },
                {
                    id: 6,
                    name: "Pencil",
                    type: "accesory",
                    price: "$35",
                    imageSrc:
                        "https://picsum.photos/id/821/500/400",
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
        removeFromCart (state, payload) {
            let indexToDelete = state.cart.indexOf( Number(payload) );
            state.cart.splice(indexToDelete, 1)
          },
    },
    actions: {
        /* addToCart({ commit }, payload) {
          commit('addToCart', payload),
          commit('decrementProductInventory', payload)
        }, */
        removeFromCart({ commit }, payload) {
          commit('removeFromCart', payload)
        },
        setNewType({ commit }, input) {
            commit('removeFromCart', input)
          }
      },
    getters: {
        product: (state) => (id) => {
            return state.products.filter(p => p.id === Number(id))[0]
          },
        cartItems: (state) => {
            return state.cart.map(
                itemId => state.products.find(
                    product => product.id === itemId
                )
            )
        }
    }
})