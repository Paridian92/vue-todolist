const app = new Vue({
  el: '#app',

  data:{
    strTodo:'',
    alertActive: false,
    todos:[
      {
        todo:'studiare html/css',
        checked: false
      },
      {
        todo:'fare la spesa',
        checked: false
      },
      {
        todo:'cucinare',
        checked: false
      },
      {
        todo:'420',
        checked: false
      },
    ]
  }, 
  methods:{
    removeTodo(index){
      this.todos.splice(index,1)
    },
    addTodo(){
      this.todos.push({todo: this.strTodo, checked: false})
    }

  }

  
});