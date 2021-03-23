import React from 'react';

const Clock = ({ now }) => {
    return (
        <div>
            <h1>{now}</h1>
        </div>
    );
};

export default Clock;