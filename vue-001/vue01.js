new Vue({
    el:"#vue-01",
    data:{
        name:"高玉东",
        job:"web前端",
    },
    methods:{
        greet:function(time){
            return "good"+time+" "+this.name+"!";
        }
    }
});