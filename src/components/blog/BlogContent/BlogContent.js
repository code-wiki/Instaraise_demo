import React from 'react';
import '../../../scss/components/_blogCotent.css';
import RelatedPostsBlog from './RelatedPostsBlog';

const BlogContent = (props) => {
    return (
        <div className="container">
            <div className="row mt-5 ContentEdit">
                <>
                    <div className="col-md-8">
                        <h5>
                            <strong>{props.BlogReducer.subtitle}</strong>
                        </h5>
                        <p>{props.BlogReducer.cardDate}</p>
                        <img
                            src={props.BlogReducer.image_url}
                            className="img-fluid"
                            alt="Responsive image"
                        ></img>

                        <p className="paraEdit">
                            <em>{props.BlogReducer.descHeader}</em>
                        </p>
                        <p className="paraEdit">
                            {props.BlogReducer.description}
                        </p>
                        <p className="paraEdit">{props.BlogReducer.descPara}</p>
                        <p className="paraEdit">
                            {props.BlogReducer.descPara2}
                        </p>
                    </div>
                    <RelatedPostsBlog {...props} />
                </>
            </div>
        </div>
    );
};

export default BlogContent;
