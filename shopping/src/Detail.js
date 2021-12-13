import React, {useState} from 'react';
import imgA from './shoes1.jpg';
import {useHistory} from 'react-router-dom'


function Detail() {

    let histroy = useHistory();

    return ( 
    <div className='container'>
    <div className='row'>
        <div className='col-md-6'>
          <img src={imgA}/>
        </div>
        <h4 className="pt-5">상품명</h4>
        <p>상품 설명</p>
        <p>12000원</p>
        <button className="btn btn-danger">주문하기</button>
        <button className="btn btn-danger" onClick={()=>{
            histroy.push('/sdsdfsdfsdf');
        }}>뒤로가기</button>
      </div>
    </div>)
}

export default Detail