import Home from '@/services/Home'
import Events from '@/services/Events'
export default {
  name: 'HelloWorld',
  data () {
    return {
      slider:100,
      tile: false,
      array:['GNU linux users group welcomes you','Hey there','Random text'],
      string:'Wanna be Badass',
      changed:false,
      counter:false,
      duration: 300,
       offset: 0,
       easing: 'easeInOutCubic',
      aboutData:[],
      eventData:[],
      FprojectsData:[{title:'Linit',description:'its a magazine',gitlink:'#',image:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/Screen-Shot-2017-12-04-at-10.39.57-796x447.png',id:'1'},{title:'Linit',description:'its a magazine',gitlink:'#',image:'https://cdn0.tnwcdn.com/wp-content/blogs.dir/1/files/2017/12/Screen-Shot-2017-12-04-at-10.39.57-796x447.png',id:'1'}]
    }
  },
  methods: {
   appendWords: function() {
     var i=0;
     var ary = this.array ;
     setInterval(() => {

     this.string = ary[i++];
       this.changed=!this.changed;
     if(i== ary.length) i=0;
   }, 2000)
 },
    hellyeah(e) {
     var count= window.pageYOffset || document.documentElement.scrollTop
     if(count>10)
    this.counter= true;
     else this.counter=false;
    },
   scrollLeft(){
    this.$refs.myDiv.scrollLeft -=250;
    },
  scrollRight(){
   this.$refs.myDiv.scrollLeft +=250;
  }


 },
 async mounted() {
   this.changed=true;
   try{ const data = (await Home.getAbout()).data  ;
     console.log(data);
   /*this.array = data.displaymesages;*/
   this.aboutData = data;
  /* this.eventData = data.Upcomingevents;
   this.FprojectsData= data.Fprojects;*/}
   catch(e){
   console.log('THIS IS THE ERROR',e);
 };
   try{ this.eventData = (await Events.getEvents()).data;}
   catch(e){
  console.log('THIS IS THE ERROR',e);
    };
   this.appendWords();
  },
  computed: {
      avatarSize () {
        return `${this.slider}px`
      },
    target () {
      const value = '#aboutSection'
      if (!isNaN(value)) return Number(value)
      else return value
    },
    options () {
      return {
        duration: this.duration,
        offset: this.offset,
        easing: this.easing
      }
    },
    }
};