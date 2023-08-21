export enum PAGE {
  CHARACTERS = 'characters',
  LOCATIONS = 'locations',
  EPISODES = 'episodes',
}

export const getCategories = async (data: any, page: string) => {
  let categories: string[] = []
  if (page === PAGE.CHARACTERS) await data.map((category: any) => categories.push(category.species));
  if (page === PAGE.EPISODES) await data.map((category: any) => categories.push(category.episode));
  if (page === PAGE.LOCATIONS) await data.map((category: any) => categories.push(category.type));
  return [...new Set(categories)]
}