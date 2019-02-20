import React from 'react';

function formatFormData(data) {
    return Object.keys(data).map(d => `${d}: ${data[d]}`);
  }

export default formatFormData;