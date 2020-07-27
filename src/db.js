 let db = {
     users: [
        { id: 1, chat_id:1 ,username: "Elvis Huges", email: "elvishuges@gmail.com", senha:"123", age: 27},
        { id: 2, chat_id:1 ,username: "Jaque Gonçalves", email: "jaqueline@gmail.com", senha:"123", age: 28 },
        { id: 3, chat_id:2 ,username: "Eveline Huges", email: "Eveline@gmail.com", senha:"123", age: 24 },
        { id: 4, chat_id:2 ,username: "Emille Huges", email: "Emille@gmail.com", senha:"123", age: 32 }
     ],

    chats: [
        { id: 1, title:"Chat de Elvis e Jaque"},
        { id: 2, title:"Chat de Evelin e Emille"},
        { id: 3, title:"Chat de Ninguem !!"},
    ],

    chatMessages: [
        { id: 1,chat_id:1, content:"Ola "},
        { id: 2,chat_id:1, content:"Bom dia"},
        { id: 3,chat_id:1, content:"Como vai ?"},
        { id: 4,chat_id:1, content:"Bom dia"},
        { id: 5,chat_id:1, content:"Como vai ?"},
        { id: 6,chat_id:1, content:"Bom dia"},
        { id: 7,chat_id:1, content:"Como vai ?"},
    ],
}

module.exports = db