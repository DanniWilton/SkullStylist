import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SHOPDATA } from '../../utils/queries';

export default function Shop() {
    // query/grab data to display in the DOM
    const { loading, data } = useQuery(QUERY_SHOPDATA);
    return (
        <div>
            

            {loading && (
                <h1>Laoding</h1>
            )}

            {!loading && (
                
                <ul>
                    <li></li>
                </ul>

            )}



        </div>
    )

}