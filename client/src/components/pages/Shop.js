import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOPDATA } from '../../utils/queries';
import '../pages/shop.css';

export default function Shop() {
    // query/grab data to display in the DOM
    const { loading, data } = useQuery(QUERY_SHOPDATA);
    const dataArray = data?.getShopItems;
    // const products = data?.products || [];
    console.log(useQuery)
    console.log("products test", data)
    return (
        <div style={{backgroundImage: "url(../../rockywall/rockywall.png", backgroundColor: "lightsteelblue"}}>
            
            {loading && (
                <h1>Loading...</h1>
            )}

            {!loading && (
                
                <ul>
                    {dataArray.map((item)=>{
                        return (<li style={{marginLeft: '155px'}}><img style={{margin: '25px', justifyContent: 'center'}} src={item.image} alt={item.name} /><p style={{margin:'15px'}}>{item.name}{item.price}</p><p>{item.description}</p></li>)
                    })}
                </ul>

            )}




        </div>
    )

}