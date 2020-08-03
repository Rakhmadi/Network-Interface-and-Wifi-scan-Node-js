// @ts-ignore

new Vue({
    el:'#app',
    data(){
        return{
            datas:[]
        }
    },
    mounted() {
        let n =async()=>{
            // @ts-ignore
            let data = await fetch('/show').then(res=>res.json())
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
           this.datas=g
           console.log(this.datas);
        }
        n()
    },
})
