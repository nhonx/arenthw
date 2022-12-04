export const MEAL_LIST = [
  {
    id: 1,
    name: "05.21.Morning",
    type: "Morning",
    img: "/images/m01.jpg",
  },
  {
    id: 2,
    name: "05.21.Lunch",
    type: "Lunch",
    img: "/images/m01.jpg",
  },
  {
    id: 3,
    name: "05.21.Dinner",
    type: "Dinner",
    img: "/images/m01.jpg",
  },
  {
    id: 4,
    name: "05.21.Snack",
    type: "Snack",
    img: "/images/m01.jpg",
  },
  {
    id: 5,
    name: "05.21.Morning",
    type: "Morning",
    img: "/images/m01.jpg",
  },
  {
    id: 6,
    name: "05.21.Lunch",
    type: "Lunch",
    img: "/images/m01.jpg",
  },
  {
    id: 7,
    name: "05.21.Dinner",
    type: "Dinner",
    img: "/images/m01.jpg",
  },
  {
    id: 8,
    name: "05.21.Snack",
    type: "Snack",
    img: "/images/m01.jpg",
  },
];

export const MY_EXERCISES = Array.from(Array(12).keys()).map((x: number) => ({
  id: x,
  name: "家事全般",
  position: "立位",
  amount: "軽い",
  timeMinutes: 10,
  burnedKcal: 26,
}));
export const MY_DIARIES = Array.from(Array(8).keys()).map((x: number) => ({
  id: x,
  title: "私の日記の記録が一部表示されます。",
  desc: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
  date: "2021.05.21",
  time: "23:25",
}));

export const NEWS_LIST = Array.from(Array(8).keys()).map((x: number) => ({
  id: x,
  datetime: "2021.05.17   23:25",
  title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
  tags: ["魚料理", "和食", "DHA"],
  img: `/images/column-${x + 1}.jpg`,
}));
