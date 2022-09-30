import React from 'react';

const Blog = () => {
    return (
        <div>
            <h3 className='text-center mt-5 pt-5 mb-5'>Some Important Question and Answer</h3>
            <div className="blogs ms-4">
                <div className="blog">
                    <h4>How does React Work? </h4>
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
                </div>
                <div className="blog">
                    <h4>Difference Between Props and State?</h4>
                    <p>Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component.</p>
                </div>
                <div className="blog">
                    <h4>What are the usecases of useEffect except loading data from api ?</h4>
                    <p>1. Reading from local storage</p>
                    <p>2. Registering and deregistering event listeners</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;