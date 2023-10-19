
const SingleBlog = ({ params }) => {
    return (
        <div>
            <h3>This is single blog Year: {new Date().getFullYear()} ID: {params.id || 'No id'}</h3>
        </div>
    );
};

export default SingleBlog;