import ymaps from 'ymaps';
// Функция ymaps.ready() будет вызвана, когда
// загрузятся все компоненты API, а также когда будет готово DOM-дерево.
export default function() {
    ymaps.load()
        .then(maps => {
            const map = new maps.Map('map', {
                center: [-8.369326, 115.166023],
                zoom: 7
            });
        })
        .catch(error => console.log('Failed to load Yandex Maps', error));
}