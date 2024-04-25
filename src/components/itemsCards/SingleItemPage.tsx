import React, {useState, useEffect, MouseEventHandler} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import {Item} from "../../appTypes/appTypes.ts";
import ItemCard from "./card/ItemCard.js";
import {Button, InfoWrapper, CardWrapper, Page, Text} from "../styled/cards/SingleItemPage";
import axios from "axios";

const SingleItemPage: React.FC = () => {

    const navigate = useNavigate();

    const {id}: {id?: string } = useParams();
    const [item, setItem] = useState<Item | null>(null);

    useEffect(() => {
        const fetchItem = async () => {
            try {
                const response = await axios.get(`https://json-server-vercel-omega-three.vercel.app/monsters/${id}`);
                setItem(response.data);
            } catch (error) {
                alert('Ошибка при загрузке данных');
                navigate(-2);
            }
        };

        fetchItem();
    }, [id]);

    const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
        navigate(-1);
    };

    return item && <Page>
        <CardWrapper>
            <ItemCard {...item}/>
        </CardWrapper>
        <InfoWrapper>
            <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam illum rem sint velit! Autem
                commodi
                corporis dicta doloribus, eligendi est minima officia omnis perferendis quia quos soluta voluptate
                voluptatum.
            </Text>
            <Button onClick={handleClick}>На главную</Button>
        </InfoWrapper>
    </Page>
};

export default SingleItemPage;