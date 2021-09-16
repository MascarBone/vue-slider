let app = new Vue ({
   el: '#app',
   
   data: {
       images: [
        {
            source: 'https://www.taxidrivers.it/wp-content/uploads/2017/02/john-wick-2.jpg',
            alt: 'Awesome Keanu Rives Image'
        },
        {
            source: 'https://www.pushbutton.it/wp-content/uploads/2020/12/Cyberpunk-2077-10.jpg',
            alt: 'Awesome Keanu Rives CyberPunk Image'
        },
        {
            source: 'https://www.cinematographe.it/wp-content/uploads/2021/09/matrix-4-114286.jpg',
            alt: 'Awesome Matrix 4 Image'
        },
        {
            source: 'https://www.gamelegends.it/wp-content/uploads/2021/09/Redfall-970x570.jpg',
            alt: 'Awesome Redfall Image'
        },
        {
            source: 'https://i.imgur.com/JPwXKHW.gif',
            alt: 'Awesome Among Us Gif Image'
        },
        {
            source: 'https://qdss.it/wp-content/uploads/2020/04/thumb-1920-942234.jpg',
            alt: 'Awesome Sekiro Image'
        },
        {
            source: 'https://www.gamelegends.it/wp-content/uploads/2021/01/Death-Stranding.jpg',
            alt: 'Awesome Death Stranding Image'
        },
        ],    

        imageIndex : 0,
        
        timeScroll : setInterval(function () {
        app.clickNext();
        }, 3000),       
        
    },

    methods: {
        
        clickPrevious : function() {
            clearInterval(this.timeScroll);    
            if(this.imageIndex <= 0)
            {
                console.log('logt--')
                this.imageIndex = this.images.length-1;
                app.timeEvent();
            }else{
                console.log('logf--')
                this.imageIndex--;
                app.timeEvent();
            }
        },
        clickNext : function() {
            clearInterval(this.timeScroll);
            if(this.imageIndex >= this.images.length-1 )
            {
                console.log('logt++')
                this.imageIndex = 0;
                app.timeEvent();
            }else{
                console.log('logf++')
                this.imageIndex++;
                app.timeEvent();
            }
        },
        clickBar : function(index) {
            this.imageIndex = index;
        },
        
        timeEvent : function () {
            this.timeScroll = setInterval(function () {
                app.clickNext();
                }, 3000)
        }
    },
});


// SetInterval che richiama l'oggetto Vue.js ed ogni 3 secondi
// esegue il metodo 'clickNext()'
// const timeScroll = setInterval(function () {
//     // console.log ('working');
//     app.clickNext();
//     }, 3000)

    