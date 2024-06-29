import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers=[
  {
    'id' : 1,
    'image' : 'https://othetak.com/images/desktop/logo/logo_header_ico.svg',
    'name':'홍길동',
    'birthday' : '961222',
    'gender' : '남자',
    'job':'대학생'
  },  {
    'id' : 2,
    'image' : 'https://othetak.com/images/desktop/logo/logo_header_ico.svg',
    'name':'송수정',
    'birthday' : '941020',
    'gender' : '여자',
    'job':'선생님'
  },  {
    'id' : 3,
    'image' : 'https://othetak.com/images/desktop/logo/logo_header_ico.svg',
    'name':'성병주',
    'birthday' : '9108060',
    'gender' : '남자',
    'job':'대학생'
  }
]
class App extends Component {
  render(){
    return (
      <div>
        {customers.map(customersInfo => 
        {
          return ( 
            <Customer
            key={customersInfo.id}
            id={customersInfo.id}
            image={customersInfo.image}
            name={customersInfo.name}
            birthday={customersInfo.birthday}
            gender={customersInfo.gender}
            job={customersInfo.job}
            />
          );
        })
        }
       
      
    
      </div>
    );
  }
}


export default App;
