export const FAQ_TITLE = "Frequently Asked Questions";
export const FAQ_SUBTITLE = "Berühren Sie eine Frage um die Antwort zu sehen";

export interface Faq {
  question: string;
  answer: string;
}

export const faqs: Faq[] = [
  {
    question: "Wie sind die Öffnungszeiten?",
    answer: "Mo 8:00-12:00, Di 9:30-12:00 & 14:30-18:00, Do 14:30-18:00, Fr 8:00-12:00",
  },
  {
    question: "Brauche ich einen Termin?",
    answer: "Für die bestmögliche Koordination und um Wartezeiten für Sie zu minimieren, bitten wir Sie einen Termin zu vereinbaren.",
  },
  {
    question: "Wie kann ich einen Termin vereinbaren?",
    answer: "Sehr gerne können Sie online einen Termin vereinbaren, bequem vom Sofa aus und zu jeder Zeit. Zudem können Sie uns natürlich anrufen und persönlich einen Termin ausmachen.",
  },
  {
    question: "Wie lange dauert es, bis ich meine Einlagen abholen kann?",
    answer: "Wir haben das Ziel Sie bestmöglichst zu versorgen und wollen Ihnen ein individuell zugeschnittenes Produkt fertigen. Daher können die Zeiten für die Produktion leicht variieren. Einlagen sind im Normalfall innerhalb von 2 Wochen abholbereit.",
  },
  {
    question: "Muss ich zur Abholung persönlich vorbeikommen oder kann jemand anderes das Produkt für mich abholen?",
    answer: "Wir möchten Ihnen ein absolut zufriedenstellendes Produkt zur Verfügung stellen, dass optimal an Ihre Bedürfnisse angepasst ist. Daher empfehlen wir Ihnen persönlich zur Abholung Ihrer Einlagen zu kommen und 1 Paar *einlagentaugliche* Schuhe mitzubringen. Dann werden wir die Einlagen in Ihren Schuh einpassen.",
  },
  {
    question: "Brauche ich zwingend ein Rezept?",
    answer: "Selbstverständlich können Sie sich ihre neue Einlagen, Kompressionsstrümpfe, ... auch privat zulegen. Sprechen Sie uns an für genauere Informationen bezüglich Kosten.",
  },
];
