let app = new Vue ({
   el: '#app',
   
   data: {
       image: [
        {
            source: 'https://via.placeholder.com/650x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/750x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/550x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/450x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/150x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/250x350',
            alt: 'Placeholder Image'
        },
        {
            source: 'https://via.placeholder.com/350x350',
            alt: 'Placeholder Image'
        },
    ],    

    imageIndex : 0,
    },

    methods: {
        
        clickPrevious : function() {
            if(this.imageIndex <= 0)
            {
                console.log('logt--')
                this.imageIndex = this.image.length-1;
            }else{
                console.log('logf--')
                this.imageIndex--;
            }
        },
        clickNext : function() {
            if(this.imageIndex >= this.image.length-1 )
            {
                console.log('logt++')
                this.imageIndex = 0;
            }else{
                console.log('logf++')
                this.imageIndex++;
            }
        }
    }
});