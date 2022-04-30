import { memo } from 'react';

export const SmallCounter = memo(({ value }) => {
  console.log('Show me again');

  return <small>{value}</small>;
});
