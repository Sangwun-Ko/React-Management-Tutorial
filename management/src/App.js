import './App.css';
import { Customer } from './components/Customer.js';

const customers = [{
  'id': 1,
  'image': 'https://picsum.photos/64/64',
  'name': '고상운',
  'birthday': '940522',
  'gender': '남자',
  'job': '학생'
},
{
  'id': 2,
  'image': 'https://picsum.photos/64/64',
  'name': '고상민',
  'birthday': '920817',
  'gender': '남자',
  'job': '직업'
},
{
  'id': 3,
  'image': 'https://picsum.photos/64/64',
  'name': '고상인',
  'birthday': '970421',
  'gender': '남자',
  'job': '경찰'
}]

function App() {
  return (
    <div>
      {customers.map(c => { return (<Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}/> ) })      }
    </div>
  );
}

export default App;
