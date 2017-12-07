import request from 'superagent';
import { apiURL } from '../config';
const UrlAPI = apiURL;



// export function fetchStoriesAPI() {
//   return new Promise((resolve, reject) => {
//     let getResult = (() => {
//       request.get(UrlAPI + 'newstories.json')
//         .set('Content-Type', 'application/json')
//         .end(function(err, res) {
//           if (err || !res.ok) {
//             console.log('Oh no! error' + JSON.stringify(err));
//           } else {
//             console.log('yay got ' + JSON.stringify(res.body));
//             resolve(res.body);
//           }
//         })
//     })();
//   });
// }
// ;

export function fetchStoriesAPI() {
  //
  // let items = [15869672,15869646,15869638,15869629,15869624,
  //             15869617,15869613,15869612,15869591,15869590,
  //             15869571,15869561,15869560,15869550,15869543,
  //             15869537,15869532,15869529,15869527,15869510]
  //
  // let stories = [];
  //
  // items.forEach(function(ID){
  //   return new Promise((resolve, reject) => {
  //     let getResult = (() => {
  //       request.get(UrlAPI + ID)
  //         .set('Content-Type', 'application/json')
  //         .end(function(err, res) {
  //           if (err || !res.ok) {
  //             // console.log('Oh no! error' + JSON.stringify(err));
  //           } else {
  //             // console.log('yay got ' + JSON.stringify(res.body));
  //             resolve(res.body);
  //           }
  //         })
  //     })();
  //   }
  // })

  return new Promise((resolve, reject) => {
    let getResult = (() => {
      request.get(UrlAPI + 'item/15869672.json')
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            console.log('Oh no! error' + JSON.stringify(err));
          } else {
            console.log('yay got ' + JSON.stringify(res.body));
            resolve([res.body]);
          }
        })
    })();
  });
}
;
