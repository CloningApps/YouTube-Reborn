new Vue({
    el: 'body',
    data: {
        videos: [
            {
                title: 'Film 1',
                thumbnail: 'https://via.placeholder.com/250',
                url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            },
            {
                title: 'Film 2',
                thumbnail: 'https://via.placeholder.com/250',
                url: 'https://www.youtube.com/watch?v=0hP6uA7JKbc'
            }
        ]
    },
    methods: {
        searchVideos() {
            const query = document.getElementById('search').value;
            // Logika wyszukiwania (połączenie z API backendu)
        },
        uploadVideo() {
            // Logika przesyłania video
        }
    }
});
