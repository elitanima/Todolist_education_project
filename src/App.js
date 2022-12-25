
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react';



function App() {

    const [todoCard, setTodoCard] = useState([]); // массив состояний тасков, изначально пустой

    //-----Функция добавления задачи-----
    //принимаем таски (taskText), которые записываются в input формы 
    const addTask = (taskText) => {
      //объект, который создается при вводе таски
      const newTask = {
        id: Date.now(), //генерация id
        taskText,
        status: false
      }
        //меняем значение todoCard с помощью setTodoCard, получая прошлое значение prev и возвращает новый массив
        return setTodoCard((prev) => [...prev, newTask])
    }
    //-----end-----

  return (
    <div className='container'>
      <div className='screenView'>
        <Header addTask={addTask} />
        {/* отдаем в Main todoCard */}
        <Main card={todoCard} /> 
        <Footer />
      </div>
    </div>
  );
}

export default App;
