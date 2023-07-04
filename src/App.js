import { useState } from 'react';

function App() {
  const [learnerData, setLearnerData] = useState({
    learners: [
      {
        name: 'Cait Yomorta',
        bio: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus placeat nostrum explicabo? Voluptatibus expedita saepe officia optio, commodi totam ratione laudantium ipsum porro molestias, quasi nulla minus vitae laboriosam corrupti Delectus inventore explicabo est odit incidunt rem a recusandae eum pariatur. Aperiam doloremque blanditiis harum voluptate animi fugit beatae asperiores quo, dignissimos sed illum veniam eum accusantium nulla quod voluptatum',
        scores: [
          {
            date: '2018-02-08',
            score: 77
          },
          {
            date: '2018-04-22',
            score: 92
          },
          {
            date: '2018-09-15',
            score: 68
          }
        ]
      },
      {
        name: 'Holly Baird',
        bio: 'Eum molestiae explicabo deserunt, maiores quod eaque omnis tenetur vero ducimus, magnam autem! Quia facere quaerat eum repudiandae dolorum eligendi iure quae. Eos id possimus accusantium, earum animi modi hic.',
        scores: [
          {
            date: '2018-12-14',
            score: 88
          },
          {
            date: '2019-01-09',
            score: 79
          },
          {
            date: '2019-02-23',
            score: 91
          },
          {
            date: '2019-03-01',
            score: 95
          }
        ]
      },
      {
        name: 'Wes Mungia',
        bio: 'Repudiandae veritatis recusandae quidem tenetur impedit, numquam incidunt enim, adipisci id cupiditate asperiores nam perferendis. Facere odit laborum ipsum autem repellendus natus eius doloremque ullam perferendis. Enim repellendus ut veniam?',
        scores: [
          {
            date: '2018-10-11',
            score: 62
          },
          {
            date: '2018-11-24',
            score: 74
          },
          {
            date: '2018-12-19',
            score: 85
          }
        ]
      }
    ]
  });

  return (
    <div className="App">
      <header>
        <h1>Learners</h1>
      </header>
      {learnerData.learners.map((learner) => {
        return (
          <Learner learner={learner} />
        )
      })}
    </div>
  );
}

function Learner({ learner }) {
  return (
    <div className="profile">
      <h2>{learner.name}</h2>
      <p>{learner.bio}</p>
      <Score scores={learner.scores} />
    </div>
  )
}

function Score({ scores }) {
  return (
    <div className='profScores'>
      {scores.map((score) => {
        return (
          <div className='scores'>
            <p><b>date: </b>{score.date}</p>
            <p><b>score: </b>{score.score}</p>
            <hr />
          </div>
        )
      })}
    </div>
  )
}

export default App;
