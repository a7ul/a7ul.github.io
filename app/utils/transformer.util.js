import moment from 'moment';

export const dateFormatter = (date) => {
  const d = moment(date);
  return d.format('Do MMM YY');
};
