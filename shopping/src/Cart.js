import React from 'react';
import {Table} from 'react-bootstrap';
import {connect} from 'react-redux';
import './Cart.css';

function Cart(props){
    return (
        <div>
            <div>
            <Table responsive="sm">
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                
                {
                    props.state.map((a, i)=>{
                        return(
                            <tr key={i}>
                                <td>{a.id}</td>
                                <td>{a.name}</td>
                                <td>{a.quan}</td>
                                <td><button onClick={()=>{
                                    props.dispatch({type : '수량증가'})
                                }}>+</button><button onClick={()=>{
                                    props.dispatch({type:'수량감소'})
                                }}>-</button></td>
                            </tr>
                             
                        )
                    })
                }

            </Table>
            {
                props.isAlert ? (
                <div className = "my-alert">
                    <p>지금 구매하시면 신규할인</p>
                    <button onClick={()=>{
                        props.dispatch({type:'닫기'})
                    }}>닫기</button>
                </div>) : null
            }
                
            </div>
        </div>
    );
}

function 함수명(state) {
    console.log(state)
    return {
        state : state.reducer,
        isAlert : state.reducer2
    }
}

export default connect(함수명)(Cart);