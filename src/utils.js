function groupByCategory(coll) {
  return coll.reduce(function (acc, obj) {
    console.log(obj.category);
    const key = obj.category?.name;
    if (!key) return acc;
    if (!acc[key]) {
      return {
        ...acc,
        [key]: [obj],
      };
    }
    return {
      ...acc,
      [key]: [...acc[key], obj],
    };
  }, {});
}

export { groupByCategory };
