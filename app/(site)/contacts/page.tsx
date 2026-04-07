import ContactsClient from "./ContactsClient";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Контакты",
  description:
    "Контакты Triumph Thermo. Телефон и формы: заказать звонок, оставить заявку, скачать прайс. Без карты.",
  urlPath: "/contacts",
});

export default function Page() {
  return <ContactsClient />;
}
