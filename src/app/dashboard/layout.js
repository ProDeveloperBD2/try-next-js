import React from 'react';
import Sidebar from './Sidebar';

const layout = ({ children }) => {
    return (
        <div className='flex gap-6'>
            <Sidebar ></Sidebar>
            {children}
        </div>
    );
};

export default layout;