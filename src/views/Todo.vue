<template>
  <div class="todo">
     <vs-tabs alignment="fixed">
      <vs-tab label="時間割">
        <div>
          <p>sss</p>
        </div>
      </vs-tab>


      <vs-tab label="課題">
        <div class="add">
        <input v-model="name" value="" placeholder="課題01">
        <button v-on:click="doAdd" class="addition">追加</button>
        </div>
        <div class="list">        
          <ul>
            <li v-for="item in list" v-bind:key="item.id">
                <vs-checkbox v-if="isPublishEditMode == true" v-on:change="item.isPublish= false== item.isPublish"></vs-checkbox>
                {{item.id}}{{item.name}}{{item.isPublish ?'公開中':'非公開'}}
                <button v-on:click="doRemove(index)" class="clear">削除</button>
            </li>
        </ul>
        </div>
        <div class="entair">
            <vs-row vs-type="flex" vs-justify="flex-end">
        <div class="centerx">
            <vs-button v-if="isPublishEditMode == false" color="#f0f0f0" text-color="#000"  @click="isPublishEditMode=true">編集</vs-button>
            <vs-button v-if="isPublishEditMode == true" color="#f0f0f0" text-color="#000"  @click="isPublishEditMode=false">終了</vs-button>
        </div>
        </vs-row>
        </div>
        <div class="look">
            <vs-button color="primary" type="flat">過去に10人がこの課題を見ています。</vs-button>
        </div>
        <div  class="bottom_br">
            <div v-for="(parson,index) in persons" v-bind:key="parson.name+index">
                <vs-button line-origin="left" color="primary" type="line">
                  {{parson.name}}
                </vs-button>
            </div>
        </div>
      </vs-tab>
    </vs-tabs>
  </div>
</template>
<script>
export default {
    data:function(){
            return{
                list:[
                    {id:1,name:'タスク1',isPublish:true},
                    {id:2,name:'タスク２',isPublish:false},
                    {id:3,name:'タスク３',isPublish:false},
                  
                ],
                persons:[
                    {name:'田中花子'},
                    {name:'山田太郎'},
                    {name:'田中二郎'},
                    {name:'田中次郎'},
                    {name:'田中二朗'}

                ],
                isPublishEditMode:false
              }
        },
    methods:{
      openPublishConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'primary',
        title: `確認`,
        text: '本当に公開してもいいですか？',
        accept:this.acceptAlert,
        acceptText:'はい',
        cancelText:'いいえ'
      })
      },
      openPrivateConfirm(){
      this.$vs.dialog({
        type:'confirm',
        color: 'primary',
        title: `確認`,
        text: '本当に非公開してもいいですか？',
        accept:this.acceptAlert,
        acceptText:'はい',
        cancelText:'いいえ'
      })
      },
      acceptAlert(){
        this.$vs.notify({
          color:'primary',
          title:'Deleted image',
          text:'The selected image was successfully deleted'
        })
      },
            doAdd:function(){
          var max = this.list.reduce(function(a,b){
              return a >b.id ? a:b.id
          },0)
          this.list.push({
              id:max+1,
              name:this.name,
          })
      },
      doRemove:function(index){
        this.list.splice(index,1)
      }
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
        position: relative;
        top: -8px;
        left: 0;
        font-size: 10px;
      }
    }
  }
  .vs-row{
    margin-top: 20px;
  }
}

.bottom_br{
    border-top: solid 0.1px #000;
}
.vs-button-line{
  width: 100%;
  margin-top: 30px;
  // text-align: left;
}

.add{
  position: relative;
  top: 10px;
  left: -50px;
  input{
    border: solid 0.5px;
    height: 25px;
    padding: 10px;
  }
  .addition{
      position: relative;
      top: 0;
      left: 112px;
    }
}


.list{
  position: relative;
  top: 10px;
  left: 28px;
  li{
    width: 32%;
    list-style: none;
    .clear{
      position: relative;
      top: 0;
      left: 200px;
    }
  }
}

.look{
  position: relative;
  top: -15px;
  left: 90px;
  .vs-button--text{
    font-size: 10px;
  }
}



</style>

