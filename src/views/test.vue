<template>
    <div class="test">
        <!-- <p v-bind:class="{child:isChild,'is-active':isActive}">test</p>
        <p v-bind:style="{color:textColor,backgroundColor:bgColor}">test</p> -->
    
        <!-- <p class="child" v-bind:class="{'is-active':'isActive'}">text</p>
        <p style="color:blue" v-bind:style="{color:textColor}">text</p> -->


        <!-- ここ -->
        <!-- <p v-bind:class="classObject">text</p>
        <p v-bind:style="styleObject">text</p> -->

        <!-- <img v-bind="item" v-bind:id="'thumb-' + item.id"> -->
<!-- 
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
            <circle cx="100" cy="75" v-bind:r="radius" fill="lighrtpink"/>
        </svg>

        <input type="range" min="0" max="100" v-model="radius"> -->

        <!-- <div v-if="ok">v-if条件による描画</div>
        <div v-show="ok">v-show条件による表示</div> -->
        <!-- <div style="display:none;">v-show条件による表示</div> -->

        <!-- <div v-if="type ==='A'">
            type は A
        </div>

        <div v-else-if="type ==='B'">
            type は B
        </div>

        <div v-else>
            全ての条件を満たさなかった時
        </div> -->

        <!-- <ul>
            <li v-for="item in list" v-bind:key="item.id">
                ID.{{item.id}}{{item.name}} HP.{{item.hp}}
            </li>
        </ul> -->
        <!-- <ul>
            <li v-for="item in list"
            v-bind:key="item.id"
            v-bind:class="{tuyoui:item.hp>300}">
            ID.{{item.id}}{{item.name}}HP.{{item.hp}}
            <span v-if="item.hp>300">つよい！</span>

            </li>
        </ul> -->

        名前<input v-model="name">
        <button v-on:click="doAdd">モンスター追加</button>
        <ul>
            <li v-for="item in list" v-bind:key="item.id">
                ID.{{item.id}}{{item.name}}{{item.hp}}
                <button v-on:click="doRemove(index)">モンスター削除</button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {

        data:function(){
            return{
                list:[
                    {id:1,name:'スライム',hp:100},
                    {id:2,name:'ゴブリン',hp:200},
                    {id:3,name:'ドラゴン',hp:500},


                ]
                }
        },

        methods:{
            doAdd:function(){
                var max = this.list.reduce(function(a,b){
                    return a >b.id ? a:b.id
                },0)
                this.list.push({
                    id:max+1,
                    name:this.name,
                    hp:500
                })
            },

            doRemove:function(index){
                this.list.splice(index,1)
            }
        }
//     data:function(){
//         // var state = {count:0}
//         return{
//             test:'あああ',
//             list:['りんご','バナナ','いちご','みかん'],
//             message:'Vue.js!',
//             show:true,
//             // state: state,
//             mustache:{
//                 value:'hello'
//             },
//             lists:['りんご','バナナ','いちご','みかん'],
//             num:1,
//             clicknum:0
//         }
//     },

//     methods:{
//         increment:function(){
//             this.clickinte +=1
//         },
//         handleClick:function(event){
//             alert(event.target)
//         },
//         numberplus:function(){
//             this.clicknum = this.clicknum + 1
//         }
//     },

//     computed:{
//         computedMessage:function(){
//             return this.message + '!'
//         }
//     },
//     created: function(){
//         console.log('created')
//     },
}


</script>

<style scoped>
/* .v-enter-active, .v-leave-active{
    transition: opacity 1s;
}

.v-enter, .v-leave-to{
    opacity: 0;
} */
</style>