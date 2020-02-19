<template>
  <div class="todo">
     <vs-tabs alignment="fixed">
      <vs-tab label="時間割">
        <div>
          <p>sss</p>
        </div>
      </vs-tab>
      <vs-tab label="課題">
        <div class="entair">
          <vs-row vs-type="flex" vs-justify="flex-end">
          <div class="centerx">
            <vs-button color="#f0f0f0" text-color="#aaff00"  @click="openConfirm()">Alert Primary</vs-button>
          </div>
          <div class="centerx">
            <vs-button @click="openConfirm()" color="danger" type="gradient">Alert Primary</vs-button>
          </div>
          </vs-row>
        </div>
        <vs-button color="success" type="flat" icon="done">過去に10人がこの課題を見ています。</vs-button>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
<script>
export default {
  data:()=>({
    activeConfirm:false
  }),
    methods:{
      openConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'danger',
        title: `Confirm`,
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        accept:this.acceptAlert
      })
      },
      acceptAlert(){
        this.$vs.notify({
          color:'danger',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
        })
      },
    }
}



// export default {
//   name: "todo",
//   data:function(){
//     return {
//       todos: [],
//       options: [
//         { value: -1, label: 'すべて' },
//         { value: 0, label: '作業中' },
//         { value: 1, label: '完了' },
//         { value: 2, label: '削除一覧'}
//       ],
//       current: -1 
//     }
//   },
//   created() {
//     this.todos = this.$$localStrageUtil$fetch()
//   },
//   computed: {
//     computedTodos: function () {
//       return this.todos.filter(function (el) {
//         return this.current < 0 ? true : this.current === el.state
//       }, this)
//     },
//     labels() {
//       return this.options.reduce(function (a, b) {
//         return Object.assign(a, { [b.value]: b.label })
//       }, {})
//     }
//   },
//   methods: {
//     // クリックした時の実行
//     doAdd: function() {
//       var comment = this.$refs.comment


//       if (!comment.value.length) {
//         return
//       }


//       // 新しいID/リストを追加
//       this.todos.push({
//         id: this.todos.length + 1,
//         comment: comment.value,
//         state: 0
//       })


//       comment.value = ''
//     },
//     doChangeState: function (item) {
//       item.state = !item.state ? 1 : 0
//     },
//     //  削除ボタンをクリックした時
//     doRemove: function (item) {
//       var index = this.todos.indexOf(item)
//       //削除を一個実行するとき
//       this.todos.splice(index, 1)
//     }
//   },
//   watch: {
//     todos: {
//       handler: function (newVal) {
//         console.log(newVal);
//         this.$$localStrageUtil$save(newVal)
//       },
//       deep: true
//     }
//   },
// }
</script>
<style lang="scss">
.vs-tabs--li button {
  font-size: 20px;
}

.entair{
  display: flex;
  .centerx{
    padding:10px;
    .vs-button{
      height: 20px;
      .vs-button--text{
        margin-bottom: 10px;
      }
    }
  }
}

</style>