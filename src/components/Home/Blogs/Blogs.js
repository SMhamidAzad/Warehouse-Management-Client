import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div style={{ height: '90vh', backgroundColor: '#021B29' }} className="row row-cols-1 row-cols-md-3 g-4 m-0 blogs">
            <div className="col">
                <div style={{backgroundColor: '#0A2E43'}} className="card mt-5 border-0 blog">
                    <div className="card-body">
                        <h5 className="card-title text-white">Difference between javascript and nodejs</h5>
                        <p style={{color: '#94A3B8'}}  className="card-text">Javascript is a simple programming language which can run in any browser javascript engine and it is commonly used in client site. On the other hand, node.js is a running environment for a Javascript programming language and It is mostly used on the server-side. Javascript is used in Frontend Development and 	It's a newer version of the ECMA script that runs on Chrome's V8 engine, which is written in C++. Nodejs is used in server side development and It uses C, C++, and JavaScript. </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div style={{backgroundColor: '#0A2E43'}} className="card mt-5 blog" >
                    <div className="card-body">
                        <h5 className="card-title text-white">When should you use nodejs and when should you use mongodb</h5>
                        <p style={{color: '#94A3B8'}}  className="card-text">MongoDB and NodeJS are two different technologies. MongoDb is a Documnet Oriented Database where we can store data and it stores data in JSON format. Node.js is a running environment for Javascript programming language which is mostly used for server-side and it helps us to to connect our client site to database by it's server site. Node JS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. It's used for traditional web sites and back-end API services.  </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div style={{backgroundColor: '#0A2E43'}} className="card mt-5 blog">
                    <div className="card-body">
                        <h5 className="card-title text-white"> Differences between sql and nosql databases.</h5>
                        <p style={{color: '#94A3B8'}} className="card-text">SQL is the standard language for dealing with Relational Databases. On the other hand, Nosql are non relational. SQL databases are table based database and It is vertically scalable. Nosql databases can be document based, key-value pairs, graph databases and it is horizentally scalable. We can use sql for complex queries but nosql is not good for complex queries. Example of Sql are Mysql, Oracle, MS SQL, PostgreSQL etc. Example of Nosql are Mongodb, Redis, Hbase etc. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;