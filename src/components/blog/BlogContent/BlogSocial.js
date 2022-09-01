import React from 'react';
import {
    TwitterShareButton,
    FacebookShareButton,
    TelegramShareButton,
    RedditShareButton,
    VKShareButton,
} from 'react-share';

const BlogSocial = (props) => {
    return (
        <>
            <ul className="d-flex socialDark">
                <li>
                    <TwitterShareButton
                        title={props.BlogReducer.subtitle}
                        url="https://blog.instaraise.io/potential-of-multichain-in-defi-ecosystem-instaraise-spaces-recap/ "
                    >
                        <i className="fa fa-twitter"></i>
                    </TwitterShareButton>
                </li>
                <li>
                    <FacebookShareButton
                        title={props.BlogReducer.subtitle}
                        url="https://blog.instaraise.io/potential-of-multichain-in-defi-ecosystem-instaraise-spaces-recap/ "
                    >
                        <i className="fa fa-facebook"></i>
                    </FacebookShareButton>
                </li>
                <li>
                    <TelegramShareButton
                        title={props.BlogReducer.subtitle}
                        url="https://t.me/share/url?url=https://blog.instaraise.io/potential-of-multichain-in-defi-ecosystem-instaraise-spaces-recap/&text=Potential%20of%20Multichain%20in%20DeFi%20Ecosystem-%20Instaraise%20Spaces%20Recap"
                    >
                        <i className="fa fa-telegram"></i>
                    </TelegramShareButton>
                </li>
                <li>
                    <RedditShareButton
                        title={props.BlogReducer.subtitle}
                        url="https://www.reddit.com/submit?url=https://blog.instaraise.io/potential-of-multichain-in-defi-ecosystem-instaraise-spaces-recap/&title=Potential%20of%20Multichain%20in%20DeFi%20Ecosystem-%20Instaraise%20Spaces%20Recap"
                    >
                        <i className="fa fa-reddit"></i>
                    </RedditShareButton>
                </li>
                <li>
                    <VKShareButton
                        title={props.BlogReducer.subtitle}
                        url="https://oauth.vk.com/authorize?client_id=-1&redirect_uri=https%3A%2F%2Fvk.com%2Fshare.php%3Ftitle%3DPotential%2520of%2520Multichain%2520in%2520DeFi%2520Ecosystem-%2520Instaraise%2520Spaces%2520Recap%26url%3Dhttps%3A%2F%2Fblog.instaraise.io%2Fpotential-of-multichain-in-defi-ecosystem-instaraise-spaces-recap%2F&display=widget"
                    >
                        <i className="fa fa-vk"></i>
                    </VKShareButton>
                </li>
            </ul>
        </>
    );
};

export default BlogSocial;
