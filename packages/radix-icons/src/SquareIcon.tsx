import * as React from 'react';
import { BaseIconProps } from './types';

interface SquareIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const SquareIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: SquareIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M2 3V2h11v11H2V3zm1 9h9V3H3v9z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g opacity=".2">
          <path d="M0 0h15v15H0V0z" fill={color} />
          <path d="M13 2H2v11h11V2z" fill={color} />
        </g>
        <path d="M0 0h15v15H0V0z" fill={color} />
        <path
          d="M2 3V2h11v11H2V3zm1 9h9V3H3v9z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`SquareIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default SquareIcon;
