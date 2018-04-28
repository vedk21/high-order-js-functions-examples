var comments = [
  {
    id: 123,
    comment: 'He is coming....',
    isResolved: 0,
    isChecked: 0,
    isSentBack: 1,
    createdAt: 1521229820395
  },
  {
    id: 124,
    comment: 'Rock is back in form',
    isResolved: 0,
    isChecked: 1,
    isSentBack: 0,
    createdAt: 1521229808537
  },
  {
    id: 125,
    comment: 'Nothing was there!',
    isResolved: 0,
    isChecked: 1,
    isSentBack: 0,
    createdAt: 1521229794306
  }
];

// resolve all the comments which are marked as checked
comments.map(comment => (comment.isChecked) ? comment.isResolved = 1 : '');
/************ OR ***********/
comments.forEach(comment => (comment.isChecked) ? comment.isResolved = 1 : '');

console.log('The array after isResolved', comments);

// prepare a payload which only has comment id and comment
const commentsPayload = comments.map(cmnt => {
  return {
    comment: cmnt.comment,
    id: cmnt.id
  };
});

console.log('The post request payload is: ', commentsPayload);

// to get all resolved comments
const resolvedComments = comments.filter(comment => comment.isResolved);

console.log('The resolved comments are: ', resolvedComments);

// sort the comments according to creation date
comments.sort((comment1, comment2) => comment1.createdAt > comment2.createdAt ? 1 : -1);

console.log('The sorted comments are: ', comments);

// check if any comment is sent back or not
const isAnySentBack = comments.some(comment => comment.isSentBack);

console.log('is there any comment which is sent back: ', isAnySentBack ? 'Yes' : 'No');

// check if all comments are resolved or not
const isAllResolved = comments.every(comment => comment.isResolved);

console.log('All comments are resolved: ', isAllResolved ? 'Yes' : 'No');

// find first occurence of comment with status resolved
const firstResolvedComment = comments.find(comment => comment.isResolved);

console.log('The first resolved comment is: ', firstResolvedComment);