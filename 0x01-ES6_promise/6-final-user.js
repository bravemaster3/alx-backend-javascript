import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((item) => {
        if (item.status === 'rejected') {
          item['value'] = item['reason'];
          delete item['reason'];
        }
      });
      console.log(results);
    });
}
