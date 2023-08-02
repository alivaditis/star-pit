function removeTags(str?: string) {
	if (!str) {
    return
  }
  return str.replace( /(<([^>]+)>)/ig, '');
}

export { removeTags }