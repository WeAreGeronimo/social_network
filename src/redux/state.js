import {renderEntireTree} from './render'

let state = {

    profilePage: {
        postData:  [
            {id:1, name: "Егор почти Крид", text_post:'я наконец-то свободен от блэкстар', time: "сегодня в 20:31", likes_q: 201},
            {id:2, name: "Егор почти Крид", text_post:'да здравствует реакт', time: "сегодня в 20:12", likes_q: 7},
            {id:3, name: "Егор почти Крид", text_post:'да здравствует реакт2', time: "сегодня в 20:12", likes_q: 7}
          ],

          friendData:  [
            {id:1, name: "Егор", surname: "Крид"},
            {id:2, name: "Edem", surname: "Qirimli"},
            {id:3, name: "Витя", surname: "Витя"},
            {id:4, name: "Гектор", surname: "Гик"},
            {id:5, name: "Климентий", surname: "Ворошилов"},
            {id:6, name: "Апостол", surname: "Первый"},
          ],
    },

    dialogPage: {
        dialogsData: [
            {id:1, name:'Edem Qirimli', text:'Че делаешь?'},
            {id:2, name:'Гектор Гик', text:'Почти смешно'},
            {id:3, name:'Павел Дуров', text:'Как успехи?'},
            {id:4, name:'Витя Витя', text:'ээ'},
            {id:5, name:'Алукард Вульф', text:'не понял'},
          ],
    
          messagesData: [
            {id:1, text_message: "Здравствуй!" , time: "20:51:20"},
            {id:2, text_message: "все продвигается довольно легко?" , time: "20:51:25"},
            {id:3, text_message: "еще бы" , time: "20:51:32" },
            {id:4, text_message: "ведь реакт для этого и создан)" , time: "20:51:34" },
            {id:5, text_message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit molestias fugiat omnis reprehenderit, voluptatem aut autem corporis eaque eveniet amet ad natus excepturi voluptatum accusamus consequuntur iste quos nam repellendus placeat dignissimos enim ut. Quo nihil commodi distinctio inventore, assumenda repudiandae voluptatibus eveniet magni deserunt nostrum ut quisquam delectus perferendis cumque dicta at magnam. Veniam vero aliquid porro suscipit nihil consequatur commodi deserunt tempora non asperiores ipsum quasi assumenda eius nesciunt necessitatibus amet, unde officia eveniet sit dignissimos iste magnam. Esse, veritatis! At nisi iusto obcaecati dignissimos dolorum quo, reprehenderit distinctio eveniet tempora et voluptatibus ipsum voluptatum perferendis soluta sequi. Earum cupiditate adipisci tempore laudantium quam distinctio fugiat quibusdam delectus, illo provident? Voluptates sequi error architecto et quo, voluptatem ea nesciunt animi quasi optio impedit cumque necessitatibus natus officiis ratione possimus laborum ex omnis ipsa! Repellendus, rerum neque cupiditate est et, nobis maiores vitae impedit ab qui similique quia ex tempora, pariatur dolores iusto non voluptas doloribus iure necessitatibus sed! Beatae illo similique exercitationem est perspiciatis quis labore! Maxime dolorum minus nihil, iste molestias qui cumque praesentium, laudantium unde reprehenderit rem quasi, nemo ratione deserunt? Cum, eum commodi quo voluptatibus soluta deserunt odio architecto earum officiis asperiores itaque, assumenda tempora." , time: "20:51:34" },
        ],
    },


    }



export let addPost = (postMessages) => {
debugger;
  let newPost = {

    

    id:4,
    name: "Егор почти Крид", 
    text_post: postMessages, 
    time: "13:31", 
    likes_q: 0,
  };
  state.profilePage.postData.push(newPost);
  renderEntireTree(state);
}

export default state;