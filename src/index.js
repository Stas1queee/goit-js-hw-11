import axios from 'axios';
import Notiflix from 'notiflix';
import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
    LINK: 'https://pixabay.com/api/',
    API_KEY: '33394752-271cdc679e71c2d243d21eadd',
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    gallery: document.querySelector('.gallery'),
    loadMore: document.querySelector('.load-more'),
    btnText: document.querySelector('.text'),

};




