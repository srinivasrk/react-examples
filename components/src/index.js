import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          author={Faker.internet.userName()}
          avatar ={Faker.image.avatar()}
          commentData={Faker.lorem.paragraph()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={Faker.internet.userName()}
          avatar ={Faker.image.avatar()}
          commentData={Faker.lorem.paragraph()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          author={Faker.internet.userName()}
          avatar ={Faker.image.avatar()}
          commentData={Faker.lorem.paragraph()}
        />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)