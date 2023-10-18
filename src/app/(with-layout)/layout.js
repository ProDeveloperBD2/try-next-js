import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({ children }) => {
    return (
        <div>
            <Navbar></Navbar>
            {children}
            <footer>
                <h3>My Footer</h3>
            </footer>
        </div>
    );
};

export default layout;