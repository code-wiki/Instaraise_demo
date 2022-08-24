// import { CARD_DATA } from '../../../config/HomeConfig/CardConfig/config.card';
// import { connect } from 'react-redux';
// import { handle_Related_Posts } from '../../../redux/actions/BlogAction/action.blog';
// import React from 'react';
// const RelatedPosts = (props) => {
//     const MAX_LENGTH = CARD_DATA.length; // 10
//     React.useEffect(() => {
//         if (props.BlogReducer.id) {
//             props.fetchRelatedPosts({
//                 currentIndex: props.BlogReducer.id,
//             });
//         }
//     }, []);
//     // // console.log('ID', currentPageId, 'Length', MAX_LENGTH);
//     console.log(props);
//     return (
//         <>
//             <div className="sharedPost">
//                 <h4 className="postpadding">Related Posts</h4>
//             </div>
//             <div className="combineCard">
//                 <div className="sidebarimg">
//                     {/* <img
//             src={
//                 CARD_DATA[
//                     MAX_LENGTH === currentPageId ? 0 : currentPageId
//                 ].image_url
//             }
//         /> */}
//                     <img src={props.relatedPosts[0].image_url} />
//                 </div>
//                 <div className="textSticky">
//                     {/* <p>
//             {props.relatedPostss[0].subtitle}
//             {
//                 CARD_DATA[
//                     MAX_LENGTH === currentPageId ? 0 : currentPageId
//                 ].subtitle
//             }
//         </p> */}
//                 </div>
//             </div>
//             <div className="combineCard">
//                 <div className="sidebarimg">
//                     {/* <img
//             src={
//                 CARD_DATA[
//                     MAX_LENGTH === currentPageId ||
//                     MAX_LENGTH - 1 === currentPageId
//                         ? MAX_LENGTH - 1 === currentPageId
//                             ? 0
//                             : 1
//                         : currentPageId + 1
//                 ].image_url
//             }
//         /> */}
//                     <img src={props.relatedPosts[1].image_url} />
//                 </div>
//                 <div className="textSticky">
//                     <p>
//                         {/* {
//                 CARD_DATA[
//                     MAX_LENGTH === currentPageId ||
//                     MAX_LENGTH - 1 === currentPageId
//                         ? MAX_LENGTH - 1 === currentPageId
//                             ? 0
//                             : 1
//                         : currentPageId + 1
//                 ].subtitle
//             } */}
//                     </p>
//                 </div>
//             </div>
//         </>
//     );
// };
// const mapDispatchToProps = (dispatch) => ({
//     fetchRelatedPosts: (payload) => dispatch(handle_Related_Posts(payload)),
// });
// const mapStateToProps = (state) => ({
//     relatedPosts: state.relatedPosts,
//     BlogReducer: state.BlogReducer,
// });
// export default connect(mapStateToProps, mapDispatchToProps)(RelatedPosts);
