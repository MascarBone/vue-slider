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
    ]},

    imageIndex : 0,

    methods: {
        
        clickPrevious = function() {
            
        },
        clickNext = function() {

        }
    }
});