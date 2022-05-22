import React from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {
    const { partId } = useParams();
    return (
        <div>
            hello {partId}
        </div>
    );
};

export default Purchase;