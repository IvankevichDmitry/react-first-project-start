// БАЗА ДАННЫХ 

let store = {
    // Личные свойства и методы объекта
    _state: {
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
                { id: 1, name: "Dmitry" },
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
    },
    _callSubscriber() {
        console.log("State")
    },


    // Интерфейсные методы объекта для вызова в index.js. Метод 3
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },


    // Все методы 1 и 2
    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber(this._state)
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },
    addMessage () {
        let newMessage = {
            id: 6,
            message: this._state.dialogsPage.newMessage,
        };
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessage = "";
        this._callSubscriber(this._state)
    },
    updateNewMessageText (newMessage) {
        this._state.dialogsPage.newMessage = newMessage
        this._callSubscriber(this._state)
    } 
}


// 1 СТРАНИЦА POSTS.
//ФУНКЦИИ ДЛЯ TEXTARE В STATE - INDEX - APP - PROFILE - MYPOSTS
// 1. Функция для создания постов из страницы Profile: addPost = () => {}
// 2. Функция изменения текста на ввод сообщений в textarea: updateNewPostText = (newText) => {}

// 2 СТРАНИЦА DIALOGS. 
//ФУНКЦИИ ДЛЯ TEXTARE В STATE - INDEX - APP - PROFILE - MYPOSTS
// 1. Функция для создания сообщений из страницы Profile: addMessage = () => {}
// 2. Функция изменения текста на ввод сообщений в textarea: updateNewMessageText = (newMessage) => {}


// 3 ФУНКЦИЯ КОЛБЭК ДЛЯ ОТРИСОВКИ index.js: subscribe = (observer) => {}


export default store;
