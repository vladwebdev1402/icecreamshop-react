const root = "icecreamshop-react"

export  const routes = {
    root: root,
    main: root + "/",
    catalog: "catalog/:id",
    creamy: "catalog/creamy",
    sherbet: "catalog/sherbet",
    ice:  "catalog/ice",
    melorin:  "catalog/melorin",
} 

export const translateRoutes: { [index: string]: string } = {
    catalog: "Каталог",
    sherbet: "Щербет",
    creamy: "Сливочное морожение",
    ice: "Фруктовый лёд",
    melorin: "Мелорин",
  };