import React from 'react';
import '../../../scss/components/_blogCotent.css';
import RelatedPostsBlog from './RelatedPostsBlog';

const BlogContent = (props) => {
    return (
        <section className="bgChange">
            <div className="container">
                <div className="row ContentEdit">
                    <React.Fragment>
                        <div className="col-md-8">
                            <h5 className="blogHeaderColorChange">
                                <strong>{props.BlogReducer.subtitle}</strong>
                            </h5>
                            <p className="darkParaDate">
                                {props.BlogReducer.cardDate}
                            </p>
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
                            <p className="paraEdit">
                                {props.BlogReducer.descPara}
                            </p>
                            <p className="paraEdit">
                                {props.BlogReducer.descPara2}
                            </p>
                        </div>
                        <RelatedPostsBlog {...props} />
                    </React.Fragment>
                </div>
            </div>
        </section>
    );
};

export default BlogContent;
