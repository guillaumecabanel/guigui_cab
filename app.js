const sendAnalytics = (dimension, value) => {
  const query = {
    name: `web.guigui.${dimension}`,
    value: 1,
    dimension: value
  }

  fetch(baseUri, {
    method: "POST",
    headers: {
      'x-qm-key': quickMetricsKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: query })
  })
}

const baseUri = 'https://qckm.io/json';
const quickMetricsKey ='xRzQjjvlAX0iXJ2_NiN6OA';

sendAnalytics('ua', navigator.userAgent);
sendAnalytics('platform', navigator.platform);
sendAnalytics('language', navigator.language);
