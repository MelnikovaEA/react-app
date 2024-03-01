import axios from "axios";

export const fetchData = (url, dispatch, setIsLoading, setItems, setPagesQty) => {
    axios.get(url)
        .then(response => {
            // Получаем заголовок X-Total-Count
            const totalCount = response.headers['x-total-count'];
            dispatch(setPagesQty(Math.ceil(totalCount / 8))); // Предполагается, что на каждой странице 8 элементов
            return response.data;
        })
        .then(data => {
            dispatch(setItems(data));
            dispatch(setIsLoading(false));
        })
        .catch(error => {
            console.error('Ошибка при получении данных:', error.message);
            dispatch(setIsLoading(false));
        });
}