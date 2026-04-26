import Input from "@/components/input";

export default function Chatbot(){
    return(
        <div className="px-10">
            {/* CHATBOT */}
            <section className="mt-10 flex items-center justify-center flex-col w-full">
                <div className=" text-center space-y-3">
                <h1 className="text-4xl text-[#1e7f43]">Assistant d’aide</h1>
                <p className="text-xl text-[#444444]">Que souhaitez-vous savoir aujourd&rsquo;hui sur la gestion de budget?</p>
                </div>
                <div className="mt-10 space-y-3 w-full">
                <Input label="Votre question:" placeholder="Posez votre question ici..."/>
                </div>
            </section>
        </div>
    )
}