

export function formatHash(bytes: number, decimals = 2) {
    if (bytes === 0)
      return {
        formattedValue: 0,
        formattedPostfix: 'B'
      }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

  return {
    formattedValue: parseFloat((bytes / Math.pow(k, i)).toFixed(dm)),
    formattedPostfix: sizes[i]
  };
}