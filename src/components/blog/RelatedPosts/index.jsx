import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';

const RelatedPosts = ({ currentPageId }) => {
    const MAX_LENGTH = CARD_DATA.length; // 10
    console.log('ID', currentPageId, 'Length', MAX_LENGTH);

    return (
        <>
            <div className="sharedPost">
                <h4 className="postpadding">Related Posts</h4>
            </div>
            <div className="combineCard">
                <div className="sidebarimg">
                    <img
                        src={
                            CARD_DATA[
                                MAX_LENGTH === currentPageId ? 0 : currentPageId
                            ].image_url
                        }
                    />
                </div>
                <div className="textSticky">
                    <p>
                        {
                            CARD_DATA[
                                MAX_LENGTH === currentPageId ? 0 : currentPageId
                            ].id
                        }
                    </p>
                </div>
            </div>
            <div className="combineCard">
                <div className="sidebarimg">
                    <img
                        src={
                            CARD_DATA[
                                MAX_LENGTH === currentPageId ||
                                MAX_LENGTH - 1 === currentPageId
                                    ? MAX_LENGTH - 1 === currentPageId
                                        ? 0
                                        : 1
                                    : currentPageId + 1
                            ].image_url
                        }
                    />
                </div>
                <div className="textSticky">
                    <p>
                        {
                            CARD_DATA[
                                MAX_LENGTH === currentPageId ||
                                MAX_LENGTH - 1 === currentPageId
                                    ? MAX_LENGTH - 1 === currentPageId
                                        ? 0
                                        : 1
                                    : currentPageId + 1
                            ].id
                        }
                    </p>
                </div>
            </div>
        </>
    );
};
export default RelatedPosts;
