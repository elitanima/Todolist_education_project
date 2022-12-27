
import './App.css';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Main } from './components/Main/Main';
import { useState } from 'react';



function App() {

    const [arrObjTodoTask, setArrObjTodoTask] = useState([]); // массив состояний тасков, изначально пустой
  

    //-----Функция добавления задачи-----
    //принимаем таски (taskText), которые записываются в input формы 
    const addTask = (taskText) => {
      //объект, который создается при вводе таски
      const newObjTask = {
        id: Date.now(), //генерация id
        taskText,
        status: false
      }
        //меняем значение arrObjTodoTask с помощью setarrObjTodoTask, получая прошлое значение prev и возвращает новый массив
        return setArrObjTodoTask((prev) => [...prev, newObjTask])
    }
    //-----end-----

  return (
    <div className='container'>
      <div className='screenView'>
        <Header addTask={addTask} />
        <Main arrObjTodoTask={arrObjTodoTask} />  
        <Footer />
      </div>
    </div>
  );
}

export default App;