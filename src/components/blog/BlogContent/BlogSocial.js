import React from 'react';
import {
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
    RedditShareButton,
    VKShareButton,
} from 'react-share';

const BlogSocial = (props) => {
    const uri = `https://instaraisedemo.netlify.app/${props.BlogReducer.blogLink}`;
    return (
        <>
            <ul className="d-flex socialDark">
                <li>
                    <TwitterShareButton
                        title={props.BlogReducer.subtitle}
                        url={uri}
                    >
                        <i className="fa fa-twitter"></i>
                    </TwitterShareButton>
                </li>
                <li>
                    <FacebookShareButton
                        title={props.BlogReducer.subtitle}
                        url={uri}
                    >
                        <i className="fa fa-facebook"></i>
                    </FacebookShareButton>
                </li>
                <li>
                    <TelegramShareButton
                        title={props.BlogReducer.subtitle}
                        url={uri}
                    >
                        <i className="fa fa-telegram"></i>
                    </TelegramShareButton>
                </li>
                <li>
                    <RedditShareButton
                        title={props.BlogReducer.subtitle}
                        url={uri}
                    >
                        <i className="fa fa-reddit"></i>
                    </RedditShareButton>
                </li>
                <li>
                    <VKShareButton title={props.BlogReducer.subtitle} url={uri}>
                        <i className="fa fa-vk"></i>
                    </VKShareButton>
                </li>
            </ul>
        </>
    );
};

export default BlogSocial;
