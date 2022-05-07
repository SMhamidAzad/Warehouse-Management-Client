import React from 'react';

const Blogs = () => {
    return (
        <div style={{ height: '90vh', backgroundColor: '#021B29' }} className="row row-cols-1 row-cols-md-3 g-4 m-0">
            <div className="col">
                <div style={{height: '60%', backgroundColor: '#0A2E43'}} className="card mt-5 border-0">
                    <div className="card-body">
                    {/* #0A2E43 */}
                        <h5 className="card-title text-white">Difference between javascript and nodejs</h5>
                        <p style={{color: '#94A3B8'}}  className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla laudantium deleniti excepturi explicabo id iusto hic inventore laboriosam. Animi maiores nobis obcaecati natus. Minus aspernatur numquam debitis. Laudantium, veniam ducimus. Velit ipsa nobis laboriosam rem quos, suscipit et qui sed dolor quidem. Consequatur cupiditate corporis minus, sit tempora tempore iste enim sed esse officiis magnam nostrum maxime molestiae molestias doloribus voluptatem perferendis reiciendis, nesciunt doloremque nihil, impedit ad? Sit, est?</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div style={{height: '60%',backgroundColor: '#0A2E43'}} className="card mt-5" >
                    <div className="card-body">
                        <h5 className="card-title text-white">When should you use nodejs and when should you use mongodb</h5>
                        <p style={{color: '#94A3B8'}}  className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aspernatur illo, ducimus impedit enim sit? Eaque quis facere temporibus quia, cupiditate incidunt adipisci minus. Voluptate quam ullam illum exercitationem eligendi deleniti modi obcaecati sequi, officia in illo voluptatem atque nemo unde dolorum facere consectetur repellat, nesciunt, est inventore ut totam! Earum optio atque repellat rem totam ipsa ut odit alias impedit quia? Accusantium est dolorem, quod modi similique ad voluptatibus.</p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div style={{height: '60%',backgroundColor: '#0A2E43'}} className="card mt-5">
                    <div className="card-body">
                        <h5 className="card-title text-white"> Differences between sql and nosql databases.</h5>
                        <p style={{color: '#94A3B8'}} className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis cum quos, quam ea distinctio libero dolor voluptatum asperiores unde, quibusdam sunt voluptatem accusantium eligendi eos necessitatibus impedit rerum ipsum odio laboriosam. Ducimus laboriosam, atque aperiam rerum aliquam nostrum possimus maxime esse vel autem culpa mollitia laudantium enim doloremque blanditiis non, animi tenetur sapiente! Libero animi cupiditate non, quisquam commodi et atque blanditiis itaque, ut quos odio architecto enim nemo facilis.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;