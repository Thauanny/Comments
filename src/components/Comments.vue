<template lang="pt-br">
    <div class="container">
        <h1>Comentarios</h1>
        <hr>

        <FormTodo v-on:add-todo="addComment"/>

        <div class="list-group">
            <p v-if="comments.length <= 0">Sem comentarios...</p>
            <div class="list-group-item" v-for=" (comment, index) in allComments" v-bind:key="index">
                <span class="comment__author"> Autor: <strong>{{comment.name}}</strong> </span>
                <p>{{comment.message}}</p>
                <div>
                    <a href="#" title="Excluir" v-on:click.prevent="removeComment(index)">Excluir</a>
                </div>
            </div>
        </div>
        <hr>
    </div>  
</template>

<script>

import FormTodo from './FormTodo'

export default {

    components:{
        FormTodo
    },
    
    data(){ // data: function(){...}
        return{
            comments:[],           
        }
    },
    methods: {

        addComment(comment){
            this.comments.push(comment);
        },
        removeComment(index){
            this.comments.splice(index, 1);
        }
    },
    computed:{
        allComments(){
            return this.comments.map(comment => ({
                ...comment,
                name: comment.name.trim() === '' ? 'Anônimo' : comment.name
            }))
        }
    },
    watch: {
        comments(val){
            console.log('val', val)
        }
    }
}
</script>

