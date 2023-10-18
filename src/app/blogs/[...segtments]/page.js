import React from 'react';

const SingleBlog = ({ params }) => {
    const [year, id] = params.segtments || [];
    return (
        <div>
            <h3>This is single blog Year: {year || new Date().getFullYear()} ID: {id || 'No id'}</h3>
        </div>
    );
};

export default SingleBlog;