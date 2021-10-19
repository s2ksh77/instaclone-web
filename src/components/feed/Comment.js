import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FatText } from '../shared';
import sanitizeHtml from 'sanitize-html';
import { Link } from 'react-router-dom';

const CommentContainer = styled.div``;
const CommentCaption = styled.span`
  margin-left: 10px;

  mark {
    background-color: inherit;
    color: ${(props) => props.theme.accent};
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const Comment = ({ author, payload }) => {
  return (
    <CommentContainer>
      <FatText>{author}</FatText>
      <CommentCaption>
        {payload.split(' ').map((word, index) =>
          /#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/.test(word) ? (
            <React.Fragment key={index}>
              <Link to={`/hashtags/${word}`}>{word}</Link>{' '}
            </React.Fragment>
          ) : (
            <React.Fragment key={index}>{word}</React.Fragment>
          )
        )}
      </CommentCaption>
    </CommentContainer>
  );
};

Comment.propTypes = {
  author: PropTypes.string.isRequired,
  payload: PropTypes.string.isRequired,
};

export default Comment;

//   const cleanedPayload = sanitizeHtml(
//     payload.replace(/#[\d|A-Z|a-z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]+/g, '<mark>$&</mark>'),
//     {
//       allowedTags: ['mark'],
//     }
//   );
