import request from 'superagent';
import { apiURL } from '../config';
const UrlAPI = apiURL;


const result = [{"by":"DyslexicAtheist","descendants":0,"id":15869638,"score":1,"time":1512652062,"title":"Is the IOTA and Microsoft partnership real?","type":"story","url":"https://www.reddit.com/r/Iota/comments/7hv91c/is_the_iota_and_microsoft_partnership_real/"},
 {"by":"hnyk","descendants":0,"id":15869672,"score":1,"time":1512652405,"title":"How to Locate Unique ID(Aadhaar) Centres in 10 Steps","type":"story","url":"https://twitter.com/UIDAI/status/938661414813671424"},
 {"by":"Mojah","descendants":1,"id":15869629,"kids":[15869637],"score":5,"time":1512651966,"title":"Chrome 63 to force .dev domains to HTTPS via preloaded HSTS","type":"story","url":"https://ma.ttias.be/chrome-force-dev-domains-https-via-preloaded-hsts/?hn"},
 {"by":"rayascott","descendants":0,"id":15869646,"score":2,"time":1512652158,"title":"Best of 2017 – App Store – Apple Developer","type":"story","url":"https://developer.apple.com/app-store/best-of-2017/apps-of-the-year/"},
 {"by":"yarapavan","descendants":0,"id":15869624,"score":1,"time":1512651894,"title":"The trees behind your tools","type":"story","url":"https://blog.buildo.io/the-trees-behind-your-tools-63b01daa58f"},
 {"by":"pksadiq","descendants":1,"id":15869617,"kids":[15870066],"score":7,"time":1512651809,"title":"GNU Guix and GuixSD 0.14.0 released","type":"story","url":"https://www.gnu.org/software/guix/blog/2017/gnu-guix-and-guixsd-0.14.0-released/"},
 {"by":"Osiris30","descendants":0,"id":15869613,"score":2,"time":1512651761,"title":"NASA is reinventing the wheel","type":"story","url":"https://kottke.org/17/12/nasa-is-reinventing-the-wheel"},
 {"by":"yarapavan","descendants":0,"id":15869612,"score":3,"time":1512651759,"title":"Maker vs. Manager: How Your Schedule Can Make or Break You","type":"story","url":"https://www.farnamstreetblog.com/2017/12/maker-vs-manager/"},
 {"by":"mcenedella","descendants":0,"id":15869591,"score":2,"time":1512651540,"title":"Stratechery: Tech's Person of the Year","type":"story","url":"https://stratechery.com/2017/techs-person-of-the-year-uber-at-the-end-of-2017-fowlers-true-impact-and-means/"},
 {"by":"drydot","descendants":0,"id":15869590,"score":3,"time":1512651534,"title":"SBI BITS and NChain Alliance to Support Cryptocurrency Security and Bitcoin Cash [pdf]","type":"story","url":"http://www.sbibits.com/download/Press_Release_SBI%20Group_nChain_strategic_partnership_EN.pdf"},
 {"by":"stkim1","descendants":0,"id":15869561,"score":2,"time":1512651241,"title":"Weekly Machine Learning Toolset and Library Roundup – Dec. 7, 2017","type":"story","url":"https://blog.pocketcluster.io/2017/12/07/weekly-machine-learning-opensource-roundup-dec-7-2017/"},
 {"by":"talisoroker","descendants":0,"id":15869560,"score":1,"time":1512651223,"title":"Choosing the Right Cloud-Native Application Deployment Platform","type":"story","url":"https://blog.takipi.com/pivotal-cloud-foundry-vs-kubernetes-choosing-the-right-cloud-native-application-deployment-platform/"},
 {"by":"jerianasmith","descendants":0,"id":15869550,"score":2,"time":1512651007,"title":"If SEO Experts Tell You These 5 Things, Don’t Hire Them","type":"story","url":"http://www.digitalsuccess.us/blog/seo-experts-questions-dont-hire.html"},
 {"by":"stigi","descendants":0,"id":15869571,"score":1,"time":1512651359,"title":"Introducing Turbo: 5x faster than Yarn and NPM, and runs natively in-browser","type":"story","url":"https://medium.com/@ericsimons/introducing-turbo-5x-faster-than-yarn-npm-and-runs-natively-in-browser-cc2c39715403"},
 {"by":"jtfmumm","descendants":1,"id":15869532,"kids":[15869609],"score":11,"time":1512650701,"title":"Stateful Multi-Stream Processing in Python with Wallaroo","type":"story","url":"https://blog.wallaroolabs.com/2017/12/stateful-multi-stream-processing-in-python-with-wallaroo/"},
 {"by":"jcfausto","descendants":3,"id":15869537,"kids":[15869947,15869813,15869616],"score":2,"text":"I was wondering what people really don&#x27;t like about these meetings. Is it just about the time spend or is it about something else? What would you do to keep in sync with your peers if stand-ups had never been invented?","time":1512650854,"title":"Ask HN: What do you really don't like about status/stand-up meetings?","type":"story"},
 {"by":"sethbannon","descendants":0,"id":15869543,"score":3,"time":1512650922,"title":"Google's 'superhuman' DeepMind AI claims chess crown","type":"story","url":"http://www.bbc.com/news/technology-42251535"},
 {"by":"joebaf","descendants":4,"id":15869527,"kids":[15869994,15869730,15869760],"score":5,"text":"What is your best source of &#x27;passive&#x27; or recurring income?","time":1512650603,"title":"What was your best passive income in 2017?","type":"story"},
 {"by":"w_t_payne","descendants":0,"id":15869510,"score":1,"time":1512650345,"title":"The Autonomous Revolution Is Here (Autonomous Surface Vessels)","type":"story","url":"https://www.youtube.com/watch?v=jnuI4FxBTZw"},
 {"by":"cheschire","descendants":0,"id":15869529,"score":1,"time":1512650660,"title":"Echos, memes and algorithms","type":"story","url":"https://nrrd.io/echos-memes-and-algorithms-5c129f6ab7aa"}];

export function fetchStoriesAPI() {


  return new Promise((resolve, reject) => {
    let getResult = (() => {
      request.get(UrlAPI + 'item/15869672.json')
        .set('Content-Type', 'application/json')
        .end(function(err, res) {
          if (err || !res.ok) {
            console.log('Oh no! error' + JSON.stringify(err));
          } else {
            console.log('yay got ' + JSON.stringify(res.body));
            resolve(result);
          }
        })
    })();
  });
}
;
