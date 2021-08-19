import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 100,
  duration: '1s'
};

// /qa/questions
export default function() {
  http.get('http://localhost:3000/qa/questions');
  sleep(1);
}

// /qa/questions/:question_id/answers
// export default function() {
//   http.get('http://localhost:3000/qa/questions/4/answers');
//   sleep(1);
// }

// POST /qa/questions
// export default function() {
//   let url = 'http://localhost:3000/qa/questions';
//   let data = JSON.stringify({
//     body: 'This is a post',
//     name: 'Tester McTest',
//     email: 'tester@test.com',
//     product_id: 24
//   });

//   let param = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   http.post(url, data);
//   sleep(1);
// }

// POST /qa/questions/:question_id/answers
// export default function() {
//   let url = 'http://localhost:3000/qa/questions/2/answers';
//   let data = JSON.stringify({
//     body: 'This is an answer',
//     name: 'Tester McTest',
//     email: 'tester@test.com',
//     photos: []
//   });

//   let param = {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   };

//   http.post(url, data);
//   sleep(1);
// }

// PATCH /qa/questions/:question_id/helpful
// export default function() {
//   let url = 'http://localhost:3000/qa/questions/3/helpful';

//   http.patch(url);
//   sleep(1);
// }

// PATCH /qa/questions/:question_id/report
// export default function() {
//   let url = 'http://localhost:3000/qa/questions/4/report';

//   http.patch(url);
//   sleep(1);
// }

// PATCH /qa/answers/:answer_id/helpful
// export default function() {
//   let url = 'http://localhost:3000/qa/answers/2/helpful';

//   http.patch(url);
//   sleep(1);
// }

// PATCH /qa/answers/:answer_id/report
// export default function() {
//   let url = 'http://localhost:3000/qa/answers/2/report';

//   http.patch(url);
//   sleep(1);
// }
