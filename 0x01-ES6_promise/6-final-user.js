import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((results) => {
      results.forEach((itemOri) => {
        const item = itemOri;
        if (item.status === 'rejected') {
          item.value = `Error: ${item.reason.message}`;
          delete item.reason;
        }
        return (item);
      });
    });
}
