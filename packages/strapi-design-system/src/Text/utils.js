import { ALPHA, BETA, DELTA, EPSILON, OMEGA, PI, SIGMA } from './constants';

export const ellipsisStyle = ({ ellipsis }) =>
  ellipsis &&
  `
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

export const variantStyle = ({ variant, theme }) => {
  switch (variant) {
    case ALPHA: {
      return `
        font-weight: ${theme.fontWeights.bold};
        font-size: ${theme.fontSizes[5]};
        line-height: ${theme.lineHeights[2]};
      `;
    }
    case BETA: {
      return `
        font-weight: ${theme.fontWeights.bold};
        font-size: ${theme.fontSizes[4]};
        line-height: ${theme.lineHeights[1]};
      `;
    }
    case DELTA: {
      return `
        font-weight: ${theme.fontWeights.semiBold};
        font-size: ${theme.fontSizes[3]};
        line-height: ${theme.lineHeights[2]};
      `;
    }
    case EPSILON: {
      return `
        font-size: ${theme.fontSizes[3]};
        line-height: ${theme.lineHeights[6]};
      `;
    }
    case OMEGA: {
      return `
        font-size: ${theme.fontSizes[2]};
        line-height: ${theme.lineHeights[4]};
      `;
    }
    case PI: {
      return `
        font-size: ${theme.fontSizes[1]};
      `;
    }
    case SIGMA: {
      return `
        font-size: ${theme.fontSizes[0]};
        font-weight: ${theme.fontWeights.bold};
        text-transform: uppercase;
      `;
    }
    default: {
      return `
        font-size: ${theme.fontSizes[2]};
      `;
    }
  }
};

export const handleColor = ({ theme, textColor }) => theme.colors[textColor || 'neutral800'];
