const sendAnalytics = (dimension, value) => {
  const query = {
    name: `${location.hostname}.${dimension}`,
    value: 1,
    dimension: value
  }

  fetch(baseUri, {
    method: "POST",
    headers: {
      'x-qm-key': quickMetricsKey,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(query)
  })
}

const baseUri = 'https://qckm.io/json';
const quickMetricsKey ='d4JlnsTFxkcDS4KzOu2Tew';

sendAnalytics('ua', navigator.userAgent);
sendAnalytics('platform', navigator.platform);
sendAnalytics('language', navigator.language);
sendAnalytics('origin', location.origin);
