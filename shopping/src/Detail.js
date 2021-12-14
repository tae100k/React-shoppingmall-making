import React, {useState} from 'react';
import imgA from './shoes1.jpg';
import {useHistory, useParams} from 'react-router-dom'
import styled from 'styled-components';


function Detail(props) {

    let histroy = useHistory();
    let { id } = useParams();
    let 찾은상품= props.shoes.find(x=> x.id==id);


    return ( 
    <div className='container'>
    <div className='row'>
        <div className='col-md-6'>
          <img src={imgA}/>
        </div>
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}</p>
        <button className="btn btn-danger">주문하기</button>
        <button className="btn btn-danger" onClick={()=>{
            histroy.push('/');
        }}>뒤로가기</button>
      </div>
    </div>)
}

export default Detail