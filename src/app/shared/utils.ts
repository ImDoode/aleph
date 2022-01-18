

export function formatHash(value: number, postfix = '', decimals = 2) {
    if (value === 0)
      return {
        formattedValue: 0,
        formattedPostfix: 'Hashes'
      }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Hashes', 'KH', 'MH', 'GH', 'TH', 'PH'];

    const i = Math.floor(Math.log(value) / Math.log(k));

  return {
    formattedValue: parseFloat((value / Math.pow(k, i)).toFixed(dm)),
    formattedPostfix: `${sizes[i]}${postfix ? `/${postfix}` : ''}`
  };
}