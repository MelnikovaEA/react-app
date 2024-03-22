import CategoriesSortContainer from "../categories/CategoriesSortContainer";
import ItemsCardsContainer from "../itemsCards/ItemsCardsContainer";
import Pagination from "../pagination/Pagination";
import {Container} from "../styled/AppBodyContainer";

const AppBody = () => {
    return (
        <Container>
            <CategoriesSortContainer/>
            <ItemsCardsContainer/>
            <Pagination/>
        </Container>
    );
};

export default AppBody;