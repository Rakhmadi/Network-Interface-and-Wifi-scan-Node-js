// @ts-ignore

new Vue({
    el:'#app',
    data(){
        return{
            datas:[],
            wifi:[]
        }
    },
    mounted() {
        this.rfs()
        setInterval(()=>{
            this.rfs()
            console.log('refs');
            
        },2000)
    },
    methods: {
        async rfs(){
             // @ts-ignore
             let data = await fetch('/show').then(res=>res.json())
             let datawifi= await fetch('/show/wifi').then(res=>res.json())
             // @ts-ignore
             this.wifi = datawifi
             // @ts-ignore
             let d =[]
             let n = []
             let g=[]
             for (const key in data) {
                 d.push(key)
                 n.push(data[key])
             }
            for (let h = 0; h < d.length; h++) {
                g.push({
                    int:d[h],
                    inf:n[h]
                })
            }
            // @ts-ignore
            this.datas=g
            // @ts-ignore
            /////////////////////// 

        }
    },
})
