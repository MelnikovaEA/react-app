import React, {useState, useEffect} from 'react';
import {useParams, useNavigate} from "react-router-dom";
import ItemCard from "./card/ItemCard";
import {Button, InfoWrapper, Page, Text} from "../styled/cards/SingleItemPage";
import axios from "axios";

const SingleItemPage = () => {

    const navigate = useNavigate();

    const {id} = useParams();
    const [item, setItem] = useState(null);

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

    const handleClick = () => {
        navigate(-1);
    };

    return item && <Page>
        <ItemCard {...item}/>
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