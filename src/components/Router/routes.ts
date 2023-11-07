const root = ""

export  const routes = {
    main: root + "/",
    catalog: root + "/catalog/:id",
    creamy: root + "/catalog/creamy",
    sherbet: root + "/catalog/sherbet",
    ice: root + "/catalog/ice",
    melorin: root + "/catalog/melorin",
} 

export const translateRoutes: { [index: string]: string } = {
    catalog: "Каталог",
    sherbet: "Щербет",
    creamy: "Сливочное морожение",
    ice: "Фруктовый лёд",
    melorin: "Мелорин",
  };