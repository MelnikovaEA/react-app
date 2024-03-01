import ItemCard from "../components/itemsCards/card/ItemCard";
import {v4 as uuidv4} from "uuid";
import NotFoundPage from "../components/NotFoundPage";

//чтобы при поиске через окошко search фильтровать статичный массив(а не с бэкенда), после items перед
// map можно добавить свою фильтрацию: .filter((obj)=>obj.name.toLowerCase().includes(inputData.toLowerCase()))

export const renderItems = (items) => {
    if (items.length>0) {
        return items.map((monster) => (
            <ItemCard key={uuidv4()}
                      name={monster.name}
                      image={monster.image}
                      price={monster.price}
                      types={monster.types}
                      extraProps={monster.extraProps}
                //это можно написать короче через spread, но я не буду
                // {...monster}
            />))
    } else {
        return <NotFoundPage />
    }
}