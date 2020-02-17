<template>
  <div class="todo">
    <label 
      class="todo__filterLabel"
      v-for="(label, index) in options" :key="label + index">
      <input
        class="todo__filterLabel__radio" 
        type="radio"
        v-model="current"
        v-bind:value="label.value">{{ label.label }}
    </label>
    <p class="todo__filterResult">（{{ computedTodos.length }} 件を表示）</p>
    <table class="todo__mainTable">
      <thead class="todo__mainTable__header">
        <tr class="tableRow">
          <th class="idLabel">ID</th>
          <th class="commentLabel">コメント</th>
          <th class="stateLabel">状態</th>
          <th class="buttonLabel">-</th>
        </tr>
      </thead>
      <tbody class="todo__mainTable__body">
        <tr class="tableRow" v-for="(todo, index) in computedTodos" :key="todo + index">
          <th class="id">{{ todo.id }}</th>
          <td class="comment">{{ todo.comment }}</td>
          <td class="state">
            <button v-on:click="doChangeState(todo)">
              {{ todo.state }}
            </button>
          </td>
          <td class="button">
            <button v-on:click="doRemove(todo)">
              削除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <h2>新しい作業の追加</h2>
    <form class="add-form" v-on:submit.prevent="doAdd">
      コメント <input type="text" ref="comment">
      <button type="submit">追加</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "todo",
  data:function(){
    return {
      todos: [],
      options: [
        { value: -1, label: 'すべて' },
        { value: 0, label: '作業中' },
        { value: 1, label: '完了' }
      ],
      current: -1
    }
  },
  created() {
    this.todos = this.$$localStrageUtil$fetch()
  },
  computed: {
    computedTodos: function () {
      return this.todos.filter(function (el) {
        return this.current < 0 ? true : this.current === el.state
      }, this)
    },
    labels() {
      return this.options.reduce(function (a, b) {
        return Object.assign(a, { [b.value]: b.label })
      }, {})
    }
  },
  methods: {
    doAdd: function() {
      var comment = this.$refs.comment
      if (!comment.value.length) {
        return
      }
      this.todos.push({
        id: this.todos.length + 1,
        comment: comment.value,
        state: 0
      })
      comment.value = ''
    },
    doChangeState: function (item) {
      item.state = !item.state ? 1 : 0
    },
    doRemove: function (item) {
      var index = this.todos.indexOf(item)
      this.todos.splice(index, 1)
    }
  },
  watch: {
    todos: {
      handler: function (newVal) {
        console.log(newVal);
        this.$$localStrageUtil$save(newVal)
      },
      deep: true
    }
  },
}
</script>
<style lang="sass" scoped>

</style>