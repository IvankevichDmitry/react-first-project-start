// БАЗА ДАННЫХ

let state = {
    // 1. Данные с сообщениями. Используються в MyPosts.jsx
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 10 },
            { id: 2, message: "Post 2", likesCount: 30 },
            { id: 3, message: "Post 3", likesCount: 100 },
            { id: 4, message: "Post 4", likesCount: 110 },
        ],
    },
    //  2. Данные с пользователями и сообщениями пользователей. Используються в Dialogs.jsx
    dialogsPage: {
        dialogs: [
            { id: 1, name: "Dmitry"},
            { id: 2, name: "Alina" },
            { id: 3, name: "Timothy" },
            { id: 4, name: "Eketerina" },
            { id: 5, name: "Maxim" },
            { id: 6, name: "Tanya" },
        ],
        messages: [
            { id: 1, message: "Hi" },
            { id: 2, message: "Hello" },
            { id: 3, message: "Good morning" },
            { id: 4, message: "Good day" },
            { id: 5, message: "Yes" },
            { id: 6, message: "Welcome" },
        ],
    }
};

// Функция для создания постов из страницы Profile
export let addPost = (message) => {
     let newPost = {
         id: 5, 
         message: message, 
         likesCount: 0
        };
    state.profilePage.posts.push(newPost);
};


export default state;
