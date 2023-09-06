import axios from 'axios';

export const requestServer = {
    url: 'https://pixabay.com/api/',
    params: {
        key: '39231991-d5f67166a35af0d36a8b05287',
        q: '',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        page: 0,
        per_page: 40
    },
    
    onRequestServer(query = this.params.q) {
        this.params.q = query;
        this.params.page += 1;
        return axios.get(this.url, { params: this.params });
    }
}