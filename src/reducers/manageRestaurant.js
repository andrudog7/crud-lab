import cuid from 'cuid';

export default function manageRestaurants(state = {
    restaurants: [],
    reviews: []
}, action) {
    switch(action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {text: action.text, id: cuid()}
            return {...state,
                restaurants: [...state.restaurants, restaurant]
            }
        case 'DELETE_RESTAURANT':
            const restaurants = state.restaurants.filter(res => res.id !== action.id)
            return {...state, restaurants}
        case 'ADD_REVIEW':
            debugger
            return {...state,
                reviews: [...state.reviews, action.review]
            }
        case 'DELETE_REVIEW':
            const reviews = state.reviews.filter(rev => rev.id !== action.id)
            return {...state, reviews}
        default:
            return state
    }
}
