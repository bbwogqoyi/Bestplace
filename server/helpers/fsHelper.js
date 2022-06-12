const fileSizeFormatter = (bytes, decimal = 2) => {
  if(bytes === 0) {
    return '0 Bytes'
  }

  const sizes = [ 'Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB']
  const index = Math.floor(Math.log(bytes) / Math.log(1000))
  return parseFloat( (bytes / Math.pow(1000, index)).toFixed(decimal) + ' ' + sizes[index])
}