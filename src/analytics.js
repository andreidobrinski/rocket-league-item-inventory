import ReactGA from 'react-ga';

export const initializeGA = () => {
  ReactGA.initialize('UA-131068083-1');
  ReactGA.set({ anonymizeIp: true });
  ReactGA.pageview('/');
};

export const learnMoreEvent = () => {
  ReactGA.event({
    category: 'Info',
    action: 'Learn More Clicked',
  });
};

export const portfolioEvent = () => {
  ReactGA.event({
    category: 'Outbound',
    action: 'Portfolio Clicked',
  });
};

export const repoEvent = () => {
  ReactGA.event({
    category: 'Outbound',
    action: 'Repo Clicked',
  });
};
