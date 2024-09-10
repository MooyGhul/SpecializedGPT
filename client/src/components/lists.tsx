interface Item {
    name: string;
    price: number;
}

interface ItemProps {
    items: Item[];
}

function ListOfUsersGPT({ items }: ItemProps){
    return (
        <div>
        <header className="App-header">
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
        </header>
      </div>
    );
}

export default ListOfUsersGPT;