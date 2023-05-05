export const getAll = () => {
	return `*[_type=='product'] {
    _id,
    name,
    type,
    bin,
    image{
      asset->{
        url,
      }
    }
  }`;
};

export const selectProducts = (query: string | string[] | undefined) => {
	return `*[_type=='product' && (bin match '${query}*' || type match '${query}*' || _id match '${query}')] {
    _id,
    name,
    type,
    bin,
    image{
      asset->{
        url,
      }
    }
  }`;
};
