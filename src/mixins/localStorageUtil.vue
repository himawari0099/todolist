<script>
const STORAGE_KEY = "todos-vuejs-demo"
export default {
  name:"local-storage-util",
  methods:{
    $$localStrageUtil$fetch: function () {
      var todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
      todos.forEach(function (todo, index) {
        todo.id = index + 1
      })
      return todos
    },
    $$localStrageUtil$save: function (todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    }
  }
}
</script>