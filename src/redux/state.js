// БАЗА ДАННЫХ

let rerenderEntireTree = () => {
    console.log("State")
}

let state = {
    // 1. Данные с сообщениями. Используються в MyPosts.jsx
    profilePage: {
        posts: [
            { id: 1, message: "Hi, how are you?", likesCount: 10 },
            { id: 2, message: "Post 2", likesCount: 30 },
            { id: 3, message: "Post 3", likesCount: 100 },
            { id: 4, message: "Post 4", likesCount: 110 },
        ],
        newPostText: "Hello"
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
            { id: 4, message: "Day" },
            { id: 5, message: "Yes" },
        ],
        newMessage: "Message"
    }
};

// 1 СТРАНИЦА POSTS.
//ФУНКЦИИ ДЛЯ TEXTARE В STATE - INDEX - APP - PROFILE - MYPOSTS

// 1. Функция для создания постов из страницы Profile
export const addPost = () => {
     let newPost = {
         id: 5, 
         message: state.profilePage.newPostText, 
         likesCount: 0
        };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state)
};

// 2. Функция изменения текста на ввод сообщений в textarea
export const updateNewPostText = (newText) => {
   state.profilePage.newPostText = newText
   rerenderEntireTree(state)
};

// 2 СТРАНИЦА DIALOGS. 
//ФУНКЦИИ ДЛЯ TEXTARE В STATE - INDEX - APP - PROFILE - MYPOSTS

export const addMessage = () => {
    let newMessage = {
        id: 6,
        message: state.dialogsPage.newMessage,
    };
   state.dialogsPage.messages.push(newMessage);
   state.dialogsPage.newMessage = "";
   rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessage = newMessage
    rerenderEntireTree(state)
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default state;
