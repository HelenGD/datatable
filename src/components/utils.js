const textComparator = (a, b, isDesc) => {
  if (a === b) {
    return 0;
  }

  if (isDesc) {
    return b > a ? 1 : -1
  }

  return a > b ? 1 : -1
};

export const getSortedRecords = (
  records, 
  {order, column}
) => {
  const isDesc = order === 'desc';

  switch (column) {
    case 'id': 
    case 'firstName':
    case 'lastName':
    case 'email':
    case 'phone':
    case 'description':
      return records.slice().sort((a, b) => {
        const fieldA = a[column];
        const fieldB = b[column];

        return textComparator(fieldA, fieldB, isDesc);
      });
    case 'address':
      return records.slice().sort((a, b) => {
        const fieldA = Object.values(a[column]).join(', ');
        const fieldB = Object.values(b[column]).join(', ');

        return textComparator(fieldA, fieldB, isDesc);
      });
    default:
      return records;
  }
};
