import { rest } from "msw";
import { CardModel } from "../models/Card";

export const dataCardList: CardModel[] = [
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Introspection",
    id: 1,
    isActive: true,
    question: "Itaque accusantium voluptatum consequuntur, quod dignissimos.",
    title: "ipsam ad assumenda",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Relationships",
    id: 2,
    isActive: true,
    question:
      "Enim a reprehenderit rem quod sit dolore, reprehenderit rerum dignissimos illo adipisci.",
    title: "consectetur quo",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Family",
    id: 3,
    isActive: false,
    question:
      "Reprehenderit accusantium totam, accusamus dolore cumque repellendus.",
    title: "iste magnam",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Introspection",
    id: 4,
    isActive: false,
    question:
      "Recusandae voluptas sequi fugit aliquid corporis, tempore numquam.",
    title: "tempore",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "External world",
    id: 5,
    isActive: false,
    question: "A accusantium ea ducimus, dignissimos labore tempore ex.",
    title: "ducimus",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Introspection",
    id: 6,
    isActive: true,
    question:
      "A quibusdam repellat a, ab repellendus voluptatibus a iure, eos consequatur maxime distinctio.",
    title: "a neque autem",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "External world",
    id: 7,
    isActive: false,
    question:
      "Consequatur reiciendis quo, similique ipsum quo labore repellat.",
    title: "sed ratione",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Family",
    id: 8,
    isActive: true,
    question: "Reprehenderit hic modi officia a, praesentium rem alias error.",
    title: "dolorem",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "External world",
    id: 9,
    isActive: true,
    question:
      "Veniam ullam a maiores repellendus dignissimos, voluptatum sapiente at, reiciendis atque.",
    title: "consectetur in ad",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Family",
    id: 10,
    isActive: false,
    question:
      "Deserunt a a reprehenderit eos eum qui, molestiae magnam a incidunt a sint eius sed.",
    title: "ad explicabo",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Introspection",
    id: 11,
    isActive: false,
    question:
      "Repudiandae temporibus aspernatur reprehenderit, deleniti excepturi corrupti, voluptatibus a animi.",
    title: "explicabo",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Family",
    id: 12,
    isActive: false,
    question:
      "Ea reprehenderit nesciunt assumenda maxime ut, a minima quibusdam.",
    title: "quo maxime",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Introspection",
    id: 13,
    isActive: true,
    question:
      "Illo eaque reprehenderit vero, aliquid sit voluptatum consequuntur hic ex, reprehenderit veniam.",
    title: "perspiciatis enim",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Introspection",
    id: 14,
    isActive: false,
    question: "Voluptatibus recusandae iusto est, nostrum vero delectus a.",
    title: "in consequuntur",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "External world",
    id: 15,
    isActive: false,
    question:
      "Reprehenderit recusandae, ut quas eum repudiandae placeat, facere fugit vero, blanditiis sint.",
    title: "culpa",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Family",
    id: 16,
    isActive: true,
    question:
      "Perspiciatis mollitia reprehenderit dolore ad, a odio facere a voluptas, blanditiis in repellat.",
    title: "excepturi",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Relationships",
    id: 17,
    isActive: true,
    question:
      "Voluptatibus nostrum voluptatibus, dolore molestias, odio hic explicabo veniam.",
    title: "ut in",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Relationships",
    id: 18,
    isActive: true,
    question:
      "Voluptatibus reiciendis, eos itaque maiores, et veritatis possimus eligendi reprehenderit rem a.",
    title: "ipsa iure",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "External world",
    id: 19,
    isActive: true,
    question: "Perferendis earum, deleniti quod excepturi temporibus a a unde.",
    title: "consequuntur beatae",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Introspection",
    id: 20,
    isActive: false,
    question: "Impedit consequatur architecto dicta soluta eaque mollitia.",
    title: "quis temporibus rem",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "External world",
    id: 21,
    isActive: true,
    question:
      "A similique voluptatum consequatur quaerat a dignissimos fugiat.",
    title: "error",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "Relationships",
    id: 22,
    isActive: true,
    question:
      "Reprehenderit voluptatibus dolorum, voluptates alias hic unde, repudiandae et a at.",
    title: "quaerat",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "External world",
    id: 23,
    isActive: true,
    question: "Ut distinctio veritatis obcaecati a a, beatae ipsam ea.",
    title: "voluptate eveniet",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Relationships",
    id: 24,
    isActive: true,
    question:
      "Reprehenderit id perspiciatis quas, minima reprehenderit, ad a a saepe soluta sequi.",
    title: "reprehenderit a",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Family",
    id: 25,
    isActive: true,
    question: "Qui sunt voluptatibus a tenetur a, reprehenderit in.",
    title: "ex a esse",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Relationships",
    id: 26,
    isActive: true,
    question: "Reprehenderit reprehenderit perspiciatis voluptate a.",
    title: "perspiciatis ad",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Relationships",
    id: 27,
    isActive: true,
    question: "Reprehenderit ipsa minus ab a, nemo consectetur quidem.",
    title: "facere neque",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "External world",
    id: 28,
    isActive: false,
    question:
      "Inventore deleniti beatae ab, odit at corporis perferendis esse quidem.",
    title: "officiis a",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "External world",
    id: 29,
    isActive: false,
    question:
      "Expedita iste maxime, provident laudantium perferendis, animi voluptatibus architecto.",
    title: "obcaecati a",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Relationships",
    id: 30,
    isActive: true,
    question:
      "Neque ab dignissimos reprehenderit distinctio, a numquam a a nihil.",
    title: "deserunt maxime ex",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "External world",
    id: 31,
    isActive: true,
    question:
      "Doloremque praesentium impedit facere a cum, tenetur aliquid nam tenetur nam, in praesentium in.",
    title: "a omnis",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Relationships",
    id: 32,
    isActive: false,
    question:
      "Doloribus assumenda beatae porro obcaecati, laboriosam officiis.",
    title: "ducimus libero",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "External world",
    id: 33,
    isActive: true,
    question:
      "Reprehenderit odio voluptatibus a, voluptas reprehenderit repellendus.",
    title: "impedit pariatur",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Relationships",
    id: 34,
    isActive: true,
    question:
      "A doloribus quibusdam ex fugit quibusdam beatae, quasi repellendus minima et.",
    title: "dolor fugit modi",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661457595254-df4aaa2d45c2?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1475\u0026q=80",
    categoryName: "External world",
    id: 35,
    isActive: true,
    question:
      "Non inventore asperiores, debitis nostrum natus cum dicta repudiandae.",
    title: "a deleniti quo",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Relationships",
    id: 36,
    isActive: false,
    question:
      "Reprehenderit reprehenderit impedit dignissimos, modi doloremque.",
    title: "reprehenderit quam",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Introspection",
    id: 37,
    isActive: true,
    question: "Molestiae consequuntur sed inventore perspiciatis sed repellat.",
    title: "placeat ipsa ut",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661510048029-42404e817867?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=2070\u0026q=80",
    categoryName: "Family",
    id: 38,
    isActive: true,
    question:
      "Reprehenderit illum voluptas, reprehenderit a, accusantium dolorem.",
    title: "dolores",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1661517481616-d525273bcf55?ixlib=rb-1.2.1\u0026ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8\u0026auto=format\u0026fit=crop\u0026w=1470\u0026q=80",
    categoryName: "Introspection",
    id: 39,
    isActive: false,
    question:
      "Soluta natus officiis reprehenderit, sunt odio perspiciatis sit iste.",
    title: "minus eos",
  },
  {
    categoryImg:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D\u0026ixlib=rb-1.2.1\u0026auto=format\u0026fit=crop\u0026w=1350\u0026q=80",
    categoryName: "Family",
    id: 40,
    isActive: false,
    question:
      "Laudantium voluptatibus consectetur, laboriosam in voluptatibus qui praesentium ab.",
    title: "hic a minus eos sit",
  },
];

export const handlers = [
  // Handles a GET request
  rest.get(
    "https://mockend.com/SantFdez/the-communicator-app-react/cards?limit=40",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(dataCardList));
    }
  ),
];
