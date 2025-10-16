import _ from 'lodash';

export const combineCommonFields = (accumulator: any, addition: any) => {
  // combined starts as a copy of accumulator
  let combined = _.cloneDeep(accumulator);
  // and then to combined in the fields that is has in common to addition,
  // the value of the fields of addition is added to the corresponding field in
  // combined
  // Iterate over the keys of addition
  _.forEach(addition, (value, key) => {
    // If the key exists in both objects, sum the values
    if (_.has(combined, key)) {
      combined[key] += value;
    }
    // Otherwise, do nothing (ignore keys only in addition)
  });
  return combined
}
