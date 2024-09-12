import ListOfUsersGPT from '../components/lists';
import CreateGPTBtn from '../components/createNewGPTBtn';

interface Item {
    name: string;
    price: number;
}

interface GptsListPageProps {
    items: Item[];
}

function GptsListPage({ items }: GptsListPageProps){
    return (
        <div>
            <ListOfUsersGPT items={items}/>
            <CreateGPTBtn />
        </div>
        
    );
}

export default GptsListPage;