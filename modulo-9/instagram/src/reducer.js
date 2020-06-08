import { SET_LIKE } from "./actionsTypes";

const stories =  [
    {
      id: 1,
      user_thumb: "img/profiles/yoda/yoda-profile.jpg",
      user_name: 'Yoda'
    },
    {
      id: 2,
      user_thumb: "img/profiles/bruce/bruce-profile.jpg",
      user_name: 'Bruce'
    },
    {
      id: 3,
      user_thumb: "img/profiles/gamora/gamora-profile.jpg",
      user_name: 'Gamora'
    }
]
const posts = [
    {
        id: 1,
        user_name: "carol",
        user_thumb: "img/profiles/carol/carol-profile.jpg",
        post_figure: "img/profiles/carol/carol-2.jpg",
        like_number: 13,
        show_like: {
            user_name: "bruce",
            user_thumb: "img/profiles/bruce/bruce-profile.jpg"
        },
        liked: false,
    },
    {
        id: 2,
        user_name: "black_panther",
        user_thumb: "img/profiles/black-panther/black-panther-profile.jpg",
        post_figure: "img/profiles/black-panther/black-panther-3.jpg",
        like_number: 35,
        show_like: {
            user_name: "domino",
            user_thumb: "img/profiles/domino/domino-profile.jpg"
        },
        liked: false,
    },
    {
        id: 3,
        user_name: "gamora123",
        user_thumb: "img/profiles/gamora/gamora-profile.jpg",
        post_figure: "img/profiles/gamora/gamora-3.jpg",
        like_number: 27,
        show_like: {
            user_name: "carol",
            user_thumb: "img/profiles/carol/carol-profile.jpg"
        },
        liked: false,
    },
    {
        id: 4,
        user_name: "dominooficial",
        user_thumb: "img/profiles/domino/domino-profile.jpg",
        post_figure: "img/profiles/domino/domino-2.jpg",
        like_number: 8,
        show_like: {
            user_name: "bruce",
            user_thumb: "img/profiles/bruce/bruce-profile.jpg"
        },
        liked: false,
    }
]

const initialState = {
    stories,
    posts: JSON.parse(window.localStorage.getItem('posts')) || posts
}

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LIKE:
            const newPosts = state.posts.map(post => {
                if(post.id === payload) {
                    return {
                        ...post,
                        liked: !post.liked
                    };
                }
                return post;
            })
            window.localStorage.setItem('posts', JSON.stringify(newPosts))
            return { ...state, posts: newPosts};

        default:
            return state
    }
}
