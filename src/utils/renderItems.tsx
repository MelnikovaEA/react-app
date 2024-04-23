import ItemCard from "../components/itemsCards/card/ItemCard.js";
import {v4 as uuidv4} from "uuid";
import NotFoundPage from "../components/errors/NotFoundPage.js";
import { Item } from "../appTypes/appTypes.ts";

//чтобы при поиске через окошко search фильтровать статичный массив(а не с бэкенда), после items перед
// map можно добавить свою фильтрацию: .filter((obj)=>obj.name.toLowerCase().includes(inputData.toLowerCase()))

export const renderItems = (items: Item[]) => {
    if (items.length>0) {
        return items.map((item: Item) => (
            <ItemCard key={uuidv4()}
                      id={item.id}
                      name={item.name}
                      image={item.image}
                      price={item.price}
                      types={item.types}
                      extraProps={item.extraProps}
                //это можно написать короче через spread, но я не буду
                // {...item}
            />))
    } else {
        return <NotFoundPage />
    }
}