import Image from "next/image";
import { Form } from "../form/Form";

import logo from "./../../assets/img/logo.png";
import phone from "./../../assets/img/telefon.png";

const copy = {
    logoAlt: "itswebdev logo",
    phoneAlt: "telefon z newsletterem",
    header: "Ogólnorozwojowy newsletter dla Web Developera!",
    paragraph:
        "Zadbaj o swój rozwój i dołącz do 250 programistów, którzy czytają o dobrych praktykach, programowaniu aplikacji webowych i nauce ekosystemu Web 3",
    leadMagnet:
        "Po zapisie otrzymasz link do mojego kalendarza, gdzie będziesz mógł ustawić spotkanie, na którym pogadamy na dowolny temat. Zbudujmy network i pomagajmy sobie nawzajem 😊",
    privacy:
        "Uzupełnienie powyższego pola stanowi zgodę na otrzymywanie od It’s Web Dev – Paweł Marszalec z siedzibą w Krakowie, newslettera zawierającego treści informacyjnych, marketingowych, ciekawostek i promocji dotyczących portalu itswebdev.com. Zgodę można wycofać w każdym czasie. Wycofanie zgody nie ma wpływu na zgodność z prawem przetwarzania dokonanego przed jej wycofaniem.",
};

export const WelcomeScreen = () => (
    <section className="bg-blue-dark">
        <div className="mx-auto flex flex-col justify-center py-10 md:container md:flex-row md:py-20">
            <div className="mx-5 flex max-w-2xl flex-col md:w-3/5 xl:mx-20">
                <div className="mx-auto pb-5 md:w-4/5 lg:w-3/5">
                    <Image alt={copy.logoAlt} src={logo} />
                </div>
                <div className="p-3 text-center font-highlighted text-3xl text-orange lg:py-8 xl:text-5xl">
                    {copy.header}
                </div>
                <div className="py-3 text-center text-lg text-white lg:py-8">
                    {copy.paragraph}
                </div>
                <div className="py-3 text-center text-sm text-orange lg:py-8">
                    {copy.leadMagnet}
                </div>
                <div>
                    <Form />
                </div>
                <div className="text-center text-xs text-white opacity-60">
                    {copy.privacy}
                </div>
            </div>
            <div className="mx-auto mt-10 flex max-w-md justify-center md:mx-10 md:mt-0 md:w-2/5 md:flex-col">
                <Image alt={copy.phoneAlt} src={phone} />
            </div>
        </div>
    </section>
);
