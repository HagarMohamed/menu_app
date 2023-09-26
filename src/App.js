
import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Header from './components/Header';
import Category from './components/Category';
import ItemList from './components/ItemList';
import { items } from './Data';
import { useState } from 'react';
import { categories } from './CatData';
function App() {

const [selected, setSelected] = useState("الكل");
const [itemsData, setItemData] = useState(items);

const filterCategory = (cat) =>{
  setSelected(cat);
  if(cat == "الكل"){
    setItemData(items)
  }
  else{
    const newArr = items.filter((item) => item.category === cat)
    setItemData(newArr)
  }
}

const searchFun = (word) =>{

  if(word != ""){
    
    const searchArr = items.filter((item) => item.title.includes(word))
  setItemData(searchArr)
  }

  
}
const [itemsCat, setItemsCat] = useState(categories);


  return (
    <div className="color-body font">
     <NavBar searchFun={searchFun}/>
      <Container>
      <Header/>
      <Category filterFun = {filterCategory} itemsCat = {itemsCat} selectedName={selected}/>
      <ItemList itemsData ={itemsData}/>
      </Container>
    </div>
  );
}

export default App;
